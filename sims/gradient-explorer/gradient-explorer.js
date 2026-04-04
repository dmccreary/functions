// Gradient Explorer MicroSim
// CANVAS_HEIGHT: 500
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 30;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

let gridRange = 10;
let mSlider, cSlider;
let showTriangleCheckbox, showEquationCheckbox;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Gradient slider
  mSlider = createSlider(-5, 5, 1, 0.1);
  mSlider.position(sliderLeftMargin, drawHeight + 8);
  mSlider.size(canvasWidth - sliderLeftMargin - 20);

  // y-intercept slider
  cSlider = createSlider(-8, 8, 0, 0.5);
  cSlider.position(sliderLeftMargin, drawHeight + 34);
  cSlider.size(canvasWidth - sliderLeftMargin - 20);

  // Checkboxes
  showTriangleCheckbox = createCheckbox('Show Rise/Run Triangle', false);
  showTriangleCheckbox.position(10, drawHeight + 62);

  showEquationCheckbox = createCheckbox('Show Equation', true);
  showEquationCheckbox.position(10, drawHeight + 82);

  describe('Interactive gradient explorer showing y=mx+c with adjustable gradient and y-intercept', LABEL);
}

function draw() {
  updateCanvasSize();
  mSlider.size(canvasWidth - sliderLeftMargin - 20);

  let m = mSlider.value();
  let c = cSlider.value();

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill('black');
  noStroke();
  textSize(20);
  textAlign(CENTER, TOP);
  text('Gradient Explorer', canvasWidth / 2, 6);

  let plotW = canvasWidth - 2 * margin;
  let plotH = drawHeight - 2 * margin - 20;
  let cx = canvasWidth / 2;
  let cy = margin + 20 + plotH / 2;

  // Grid lines
  stroke(220);
  strokeWeight(0.5);
  for (let i = -gridRange; i <= gridRange; i++) {
    let px = cx + (i / gridRange) * (plotW / 2);
    let py = cy - (i / gridRange) * (plotH / 2);
    line(px, cy - plotH / 2, px, cy + plotH / 2);
    line(cx - plotW / 2, py, cx + plotW / 2, py);
  }

  // Axes
  stroke('black');
  strokeWeight(2);
  line(cx - plotW / 2, cy, cx + plotW / 2, cy);
  line(cx, cy - plotH / 2, cx, cy + plotH / 2);
  strokeWeight(1);

  // Axis labels
  noStroke();
  fill('black');
  textSize(12);
  textAlign(CENTER, TOP);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0) continue;
    if (i % 2 !== 0) continue;
    let px = cx + (i / gridRange) * (plotW / 2);
    text(i, px, cy + 4);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0) continue;
    if (i % 2 !== 0) continue;
    let py = cy - (i / gridRange) * (plotH / 2);
    text(i, cx - 6, py);
  }
  textAlign(RIGHT, TOP);
  text('O', cx - 4, cy + 4);

  // Axis names
  textSize(14);
  textAlign(CENTER, CENTER);
  fill('darkblue');
  noStroke();
  text('x', cx + plotW / 2 + 14, cy);
  text('y', cx, cy - plotH / 2 - 14);

  // Helper to convert grid coords to pixel coords
  function toPixelX(gx) { return cx + (gx / gridRange) * (plotW / 2); }
  function toPixelY(gy) { return cy - (gy / gridRange) * (plotH / 2); }

  // Draw the line y = mx + c
  // Find where line enters/exits the grid
  let x1 = -gridRange;
  let y1 = m * x1 + c;
  let x2 = gridRange;
  let y2 = m * x2 + c;

  // Clip to visible grid
  function clipLine(x1, y1, x2, y2) {
    let points = [];
    let edges = [
      { axis: 'x', val: -gridRange },
      { axis: 'x', val: gridRange },
      { axis: 'y', val: -gridRange },
      { axis: 'y', val: gridRange }
    ];
    // parametric: P = (x1,y1) + t*(x2-x1, y2-y1)
    let dx = x2 - x1;
    let dy = y2 - y1;
    let tmin = 0, tmax = 1;
    // clip to x bounds
    if (dx !== 0) {
      let t1 = (-gridRange - x1) / dx;
      let t2 = (gridRange - x1) / dx;
      if (dx < 0) { let tmp = t1; t1 = t2; t2 = tmp; }
      tmin = max(tmin, t1);
      tmax = min(tmax, t2);
    }
    // clip to y bounds
    if (dy !== 0) {
      let t1 = (-gridRange - y1) / dy;
      let t2 = (gridRange - y1) / dy;
      if (dy < 0) { let tmp = t1; t1 = t2; t2 = tmp; }
      tmin = max(tmin, t1);
      tmax = min(tmax, t2);
    } else {
      if (y1 < -gridRange || y1 > gridRange) return null;
    }
    if (tmin > tmax) return null;
    return {
      x1: x1 + tmin * dx, y1: y1 + tmin * dy,
      x2: x1 + tmax * dx, y2: y1 + tmax * dy
    };
  }

  let clipped = clipLine(x1, y1, x2, y2);
  if (clipped) {
    stroke('blue');
    strokeWeight(2.5);
    line(toPixelX(clipped.x1), toPixelY(clipped.y1),
         toPixelX(clipped.x2), toPixelY(clipped.y2));
    strokeWeight(1);
  }

  // y-intercept point
  if (abs(c) <= gridRange) {
    fill('blue');
    noStroke();
    ellipse(toPixelX(0), toPixelY(c), 10, 10);
  }

  // Rise/Run triangle
  if (showTriangleCheckbox.checked() && m !== 0) {
    let baseX = 0;
    let baseY = c;
    let runVal = 1;
    let riseVal = m;
    // If outside range, try a different base
    if (abs(baseY) > gridRange - 2) {
      baseX = -c / m;
      baseY = 0;
    }
    let endX = baseX + runVal;
    let endY = baseY + riseVal;

    if (abs(endX) <= gridRange && abs(endY) <= gridRange &&
        abs(baseX) <= gridRange && abs(baseY) <= gridRange) {
      // Run (horizontal)
      stroke('green');
      strokeWeight(2);
      line(toPixelX(baseX), toPixelY(baseY), toPixelX(endX), toPixelY(baseY));
      // Rise (vertical)
      stroke('red');
      strokeWeight(2);
      line(toPixelX(endX), toPixelY(baseY), toPixelX(endX), toPixelY(endY));
      strokeWeight(1);

      // Labels
      noStroke();
      textSize(13);
      textAlign(CENTER, CENTER);
      fill('green');
      text('run = 1', (toPixelX(baseX) + toPixelX(endX)) / 2, toPixelY(baseY) + 14);
      fill('red');
      let riseLabel = 'rise = ' + nf(riseVal, 0, 1);
      text(riseLabel, toPixelX(endX) + 35, (toPixelY(baseY) + toPixelY(endY)) / 2);
    }
  }

  // Show equation
  if (showEquationCheckbox.checked()) {
    noStroke();
    fill(0, 0, 0, 200);
    textSize(18);
    textAlign(LEFT, TOP);
    let eqStr = 'y = ';
    if (m === 0) {
      eqStr += nf(c, 0, 1);
    } else if (m === 1) {
      eqStr += 'x';
      if (c > 0) eqStr += ' + ' + nf(c, 0, 1);
      else if (c < 0) eqStr += ' - ' + nf(abs(c), 0, 1);
    } else if (m === -1) {
      eqStr += '-x';
      if (c > 0) eqStr += ' + ' + nf(c, 0, 1);
      else if (c < 0) eqStr += ' - ' + nf(abs(c), 0, 1);
    } else {
      eqStr += nf(m, 0, 1) + 'x';
      if (c > 0) eqStr += ' + ' + nf(c, 0, 1);
      else if (c < 0) eqStr += ' - ' + nf(abs(c), 0, 1);
    }
    // Background box
    let tw = textWidth(eqStr);
    fill(255, 255, 255, 200);
    noStroke();
    rect(10, margin + 22, tw + 12, 26, 6);
    fill('black');
    noStroke();
    text(eqStr, 16, margin + 24);
  }

  // Gradient display
  noStroke();
  fill('blue');
  textSize(16);
  textAlign(RIGHT, TOP);
  let mDisplay = 'm = ' + nf(m, 0, 1);
  let mw = textWidth(mDisplay);
  fill(255, 255, 255, 200);
  noStroke();
  rect(canvasWidth - mw - 22, margin + 22, mw + 12, 24, 6);
  fill('blue');
  noStroke();
  text(mDisplay, canvasWidth - 16, margin + 24);

  // Control labels
  noStroke();
  fill('black');
  textSize(14);
  textAlign(LEFT, CENTER);
  text('Gradient m: ' + nf(m, 0, 1), 10, drawHeight + 18);
  text('Intercept c: ' + nf(c, 0, 1), 10, drawHeight + 44);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}
