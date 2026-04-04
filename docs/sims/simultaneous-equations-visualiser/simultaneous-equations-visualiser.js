// Simultaneous Equations Visualiser MicroSim
// CANVAS_HEIGHT: 520
let canvasWidth = 400;
let drawHeight = 370;
let controlHeight = 150;
let canvasHeight = drawHeight + controlHeight;
let margin = 30;
let sliderLeftMargin = 120;
let defaultTextSize = 16;

let gridRange = 10;
let m1Slider, c1Slider, m2Slider, c2Slider;
let showAlgebraCheckbox, showStatusCheckbox;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Line 1 sliders
  m1Slider = createSlider(-5, 5, 2, 0.5);
  m1Slider.position(sliderLeftMargin, drawHeight + 8);
  m1Slider.size(canvasWidth - sliderLeftMargin - 20);

  c1Slider = createSlider(-8, 8, -1, 0.5);
  c1Slider.position(sliderLeftMargin, drawHeight + 32);
  c1Slider.size(canvasWidth - sliderLeftMargin - 20);

  // Line 2 sliders
  m2Slider = createSlider(-5, 5, -1, 0.5);
  m2Slider.position(sliderLeftMargin, drawHeight + 56);
  m2Slider.size(canvasWidth - sliderLeftMargin - 20);

  c2Slider = createSlider(-8, 8, 7, 0.5);
  c2Slider.position(sliderLeftMargin, drawHeight + 80);
  c2Slider.size(canvasWidth - sliderLeftMargin - 20);

  // Checkboxes
  showAlgebraCheckbox = createCheckbox('Show Algebraic Solution', false);
  showAlgebraCheckbox.position(10, drawHeight + 106);

  showStatusCheckbox = createCheckbox('Parallel/Perpendicular Status', false);
  showStatusCheckbox.position(10, drawHeight + 128);

  describe('Interactive visualiser for simultaneous linear equations showing two lines and their intersection', LABEL);
}

function draw() {
  updateCanvasSize();
  m1Slider.size(canvasWidth - sliderLeftMargin - 20);
  c1Slider.size(canvasWidth - sliderLeftMargin - 20);
  m2Slider.size(canvasWidth - sliderLeftMargin - 20);
  c2Slider.size(canvasWidth - sliderLeftMargin - 20);

  let m1 = m1Slider.value();
  let c1 = c1Slider.value();
  let m2 = m2Slider.value();
  let c2 = c2Slider.value();

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
  textSize(18);
  textAlign(CENTER, TOP);
  text('Simultaneous Equations Visualiser', canvasWidth / 2, 5);

  let plotW = canvasWidth - 2 * margin;
  let plotH = drawHeight - 2 * margin - 20;
  let cx = canvasWidth / 2;
  let cy = margin + 20 + plotH / 2;

  function toPixelX(gx) { return cx + (gx / gridRange) * (plotW / 2); }
  function toPixelY(gy) { return cy - (gy / gridRange) * (plotH / 2); }

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
  textSize(11);
  textAlign(CENTER, TOP);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0 || i % 2 !== 0) continue;
    text(i, toPixelX(i), cy + 3);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0 || i % 2 !== 0) continue;
    text(i, cx - 5, toPixelY(i));
  }
  textAlign(RIGHT, TOP);
  text('O', cx - 4, cy + 3);
  textSize(13);
  textAlign(CENTER, CENTER);
  fill('darkblue');
  noStroke();
  text('x', cx + plotW / 2 + 12, cy);
  text('y', cx, cy - plotH / 2 - 12);

  // Clip and draw a line
  function drawGridLine(m, c, col) {
    let x1 = -gridRange, y1 = m * x1 + c;
    let x2 = gridRange, y2 = m * x2 + c;
    let dx = x2 - x1, dy = y2 - y1;
    let tmin = 0, tmax = 1;
    if (dx !== 0) {
      let t1 = (-gridRange - x1) / dx;
      let t2 = (gridRange - x1) / dx;
      if (dx < 0) { let tmp = t1; t1 = t2; t2 = tmp; }
      tmin = max(tmin, t1); tmax = min(tmax, t2);
    }
    if (dy !== 0) {
      let t1 = (-gridRange - y1) / dy;
      let t2 = (gridRange - y1) / dy;
      if (dy < 0) { let tmp = t1; t1 = t2; t2 = tmp; }
      tmin = max(tmin, t1); tmax = min(tmax, t2);
    } else {
      if (y1 < -gridRange || y1 > gridRange) return;
    }
    if (tmin > tmax) return;
    stroke(col);
    strokeWeight(2.5);
    line(toPixelX(x1 + tmin * dx), toPixelY(y1 + tmin * dy),
         toPixelX(x1 + tmax * dx), toPixelY(y1 + tmax * dy));
    strokeWeight(1);
  }

  // Draw both lines
  drawGridLine(m1, c1, color(0, 100, 255));
  drawGridLine(m2, c2, color(220, 40, 40));

  // Check for intersection
  let isParallel = abs(m1 - m2) < 0.001;

  if (!isParallel) {
    // Intersection: m1*x + c1 = m2*x + c2 => x = (c2 - c1) / (m1 - m2)
    let ix = (c2 - c1) / (m1 - m2);
    let iy = m1 * ix + c1;

    if (abs(ix) <= gridRange && abs(iy) <= gridRange) {
      // Highlight intersection
      fill('gold');
      stroke('black');
      strokeWeight(2);
      ellipse(toPixelX(ix), toPixelY(iy), 16, 16);
      strokeWeight(1);

      // Coordinates label
      noStroke();
      fill('black');
      textSize(14);
      textAlign(LEFT, BOTTOM);
      let coordStr = '(' + nf(ix, 0, 2) + ', ' + nf(iy, 0, 2) + ')';
      let labelX = toPixelX(ix) + 12;
      let labelY = toPixelY(iy) - 8;
      // Background
      fill(255, 255, 255, 210);
      noStroke();
      rect(labelX - 3, labelY - 16, textWidth(coordStr) + 6, 20, 4);
      fill('black');
      noStroke();
      text(coordStr, labelX, labelY);
    } else {
      // Intersection exists but off screen
      noStroke();
      fill(100);
      textSize(13);
      textAlign(CENTER, BOTTOM);
      text('Intersection at (' + nf(ix, 0, 2) + ', ' + nf(iy, 0, 2) + ') — off screen',
           canvasWidth / 2, drawHeight - 8);
    }
  } else {
    // Parallel — no intersection
    noStroke();
    fill('orangered');
    textSize(15);
    textAlign(CENTER, CENTER);
    let msg = (abs(c1 - c2) < 0.001) ? 'Lines are identical (infinite solutions)' : 'Lines are parallel — no intersection';
    // Background
    fill(255, 255, 240, 220);
    stroke('orangered');
    strokeWeight(1);
    rectMode(CENTER);
    rect(canvasWidth / 2, drawHeight / 2, textWidth(msg) + 20, 28, 8);
    rectMode(CORNER);
    fill('orangered');
    noStroke();
    text(msg, canvasWidth / 2, drawHeight / 2);
  }

  // Show algebraic solution
  if (showAlgebraCheckbox.checked() && !isParallel) {
    let ix = (c2 - c1) / (m1 - m2);
    let iy = m1 * ix + c1;
    noStroke();
    textSize(12);
    textAlign(LEFT, TOP);

    let solLines = [
      'Line 1: y = ' + nf(m1, 0, 1) + 'x + ' + nf(c1, 0, 1),
      'Line 2: y = ' + nf(m2, 0, 1) + 'x + ' + nf(c2, 0, 1),
      'Set equal: ' + nf(m1, 0, 1) + 'x + ' + nf(c1, 0, 1) + ' = ' + nf(m2, 0, 1) + 'x + ' + nf(c2, 0, 1),
      'x = ' + nf(ix, 0, 2) + ',  y = ' + nf(iy, 0, 2)
    ];

    let boxX = 8;
    let boxY = margin + 22;
    let lineH = 16;
    let boxW = 0;
    for (let s of solLines) { boxW = max(boxW, textWidth(s)); }
    fill(255, 255, 255, 220);
    noStroke();
    rect(boxX, boxY, boxW + 16, solLines.length * lineH + 10, 6);
    fill('black');
    noStroke();
    for (let i = 0; i < solLines.length; i++) {
      text(solLines[i], boxX + 8, boxY + 5 + i * lineH);
    }
  }

  // Parallel / Perpendicular status
  if (showStatusCheckbox.checked()) {
    noStroke();
    textSize(13);
    textAlign(RIGHT, TOP);
    let status = '';
    if (isParallel) {
      status = 'Parallel (m\u2081 = m\u2082)';
      fill('orangered');
    } else if (abs(m1 * m2 + 1) < 0.01) {
      status = 'Perpendicular (m\u2081 \u00D7 m\u2082 = -1)';
      fill('green');
    } else {
      status = 'Neither parallel nor perpendicular';
      fill('gray');
    }
    let sw = textWidth(status);
    let sx = canvasWidth - 10;
    let sy = margin + 22;
    fill(255, 255, 255, 210);
    noStroke();
    rect(sx - sw - 8, sy, sw + 12, 20, 4);
    if (isParallel) fill('orangered');
    else if (abs(m1 * m2 + 1) < 0.01) fill('green');
    else fill('gray');
    noStroke();
    text(status, sx, sy + 2);
  }

  // Line equation legends
  noStroke();
  textSize(12);
  textAlign(RIGHT, BOTTOM);
  fill(0, 100, 255);
  text('L\u2081: y = ' + nf(m1, 0, 1) + 'x + ' + nf(c1, 0, 1), canvasWidth - 10, drawHeight - 20);
  fill(220, 40, 40);
  noStroke();
  text('L\u2082: y = ' + nf(m2, 0, 1) + 'x + ' + nf(c2, 0, 1), canvasWidth - 10, drawHeight - 4);

  // Control labels
  noStroke();
  fill(0, 100, 255);
  textSize(13);
  textAlign(LEFT, CENTER);
  text('m\u2081: ' + nf(m1, 0, 1), 10, drawHeight + 18);
  text('c\u2081: ' + nf(c1, 0, 1), 10, drawHeight + 42);
  fill(220, 40, 40);
  noStroke();
  text('m\u2082: ' + nf(m2, 0, 1), 10, drawHeight + 66);
  text('c\u2082: ' + nf(c2, 0, 1), 10, drawHeight + 90);
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
