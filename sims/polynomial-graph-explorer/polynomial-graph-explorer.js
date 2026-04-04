// Polynomial Graph Explorer MicroSim
// CANVAS_HEIGHT: 520
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 140;
let canvasHeight = drawHeight + controlHeight;
let margin = 40;
let sliderLeftMargin = 100;
let defaultTextSize = 16;

let gridRange = 6;
let rootSliders = [];
let multSelects = [];
let aSlider;
let showTurningPts;
let numRootsSelect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Row 0: Number of roots selector + show turning points checkbox
  numRootsSelect = createSelect();
  numRootsSelect.position(sliderLeftMargin, drawHeight + 6);
  numRootsSelect.option('1');
  numRootsSelect.option('2');
  numRootsSelect.option('3');
  numRootsSelect.option('4');
  numRootsSelect.selected('3');

  showTurningPts = createCheckbox('Show turning points', false);
  showTurningPts.position(sliderLeftMargin + 60, drawHeight + 6);

  // Rows 1-4: Root sliders with multiplicity selects to the right
  let defaults = [-3, 0, 2, 4];
  for (let i = 0; i < 4; i++) {
    let s = createSlider(-5, 5, defaults[i], 0.5);
    s.position(sliderLeftMargin, drawHeight + 28 + i * 22);
    s.size(canvasWidth - sliderLeftMargin - 100);
    rootSliders.push(s);

    let m = createSelect();
    m.position(canvasWidth - 90, drawHeight + 28 + i * 22);
    m.option('1');
    m.option('2');
    m.option('3');
    m.selected('1');
    multSelects.push(m);
  }

  // Row 5: Leading coefficient slider
  aSlider = createSlider(-3, 3, 1, 0.5);
  aSlider.position(sliderLeftMargin, drawHeight + 116);
  aSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('Polynomial graph explorer with adjustable roots, multiplicities, and leading coefficient', LABEL);
}

function draw() {
  updateCanvasSize();

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  let numRoots = int(numRootsSelect.value());
  let aVal = aSlider.value();
  if (aVal === 0) aVal = 0.5;

  // Gather active roots and multiplicities
  let roots = [];
  let mults = [];
  for (let i = 0; i < numRoots; i++) {
    roots.push(rootSliders[i].value());
    mults.push(int(multSelects[i].value()));
  }

  // Show/hide controls based on numRoots
  for (let i = 0; i < 4; i++) {
    rootSliders[i].style('display', i < numRoots ? 'inline' : 'none');
    multSelects[i].style('display', i < numRoots ? 'inline' : 'none');
  }

  // Plot dimensions
  let plotL = margin;
  let plotR = canvasWidth - margin;
  let plotT = margin + 10;
  let plotB = drawHeight - 20;
  let plotW = plotR - plotL;
  let plotH = plotB - plotT;
  let cx = (plotL + plotR) / 2;
  let cy = (plotT + plotB) / 2;

  // Grid lines
  stroke(220);
  strokeWeight(0.5);
  for (let i = -gridRange; i <= gridRange; i++) {
    let px = cx + (i / gridRange) * (plotW / 2);
    let py = cy - (i / gridRange) * (plotH / 2);
    line(px, plotT, px, plotB);
    line(plotL, py, plotR, py);
  }

  // Axes
  stroke('black');
  strokeWeight(2);
  line(plotL, cy, plotR, cy);
  line(cx, plotT, cx, plotB);
  strokeWeight(1);

  // Axis labels
  noStroke();
  fill('black');
  textSize(11);
  textAlign(CENTER, TOP);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0) continue;
    let px = cx + (i / gridRange) * (plotW / 2);
    text(i, px, cy + 3);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0) continue;
    let py = cy - (i / gridRange) * (plotH / 2);
    text(i, cx - 5, py);
  }

  // Evaluate polynomial
  function evalPoly(x) {
    let y = aVal;
    for (let i = 0; i < roots.length; i++) {
      y *= pow(x - roots[i], mults[i]);
    }
    return y;
  }

  // Scale y to fit. Find max |y| in range for auto-scaling
  let yMax = 1;
  let step = (gridRange * 2) / 200;
  for (let x = -gridRange; x <= gridRange; x += step) {
    let y = abs(evalPoly(x));
    if (isFinite(y) && y > yMax) yMax = y;
  }
  if (yMax > 100) yMax = 100;
  let yScale = gridRange / yMax;

  // Draw polynomial curve
  stroke('blue');
  strokeWeight(2);
  noFill();
  beginShape();
  for (let px = plotL; px <= plotR; px += 1) {
    let x = ((px - cx) / (plotW / 2)) * gridRange;
    let y = evalPoly(x) * yScale;
    let py = cy - (y / gridRange) * (plotH / 2);
    if (py < plotT - 20 || py > plotB + 20) {
      endShape();
      beginShape();
      continue;
    }
    vertex(px, py);
  }
  endShape();

  // Mark roots on x-axis
  for (let i = 0; i < roots.length; i++) {
    let rpx = cx + (roots[i] / gridRange) * (plotW / 2);
    fill('red');
    noStroke();
    ellipse(rpx, cy, 10, 10);
    fill('red');
    textSize(11);
    textAlign(CENTER, TOP);
    noStroke();
    let mLabel = 'm=' + mults[i];
    text(mLabel, rpx, cy + 14);
  }

  // Show turning points (numerical approximation)
  if (showTurningPts.checked()) {
    let dx = 0.01;
    for (let x = -gridRange + dx; x < gridRange - dx; x += dx) {
      let y0 = evalPoly(x - dx) * yScale;
      let y1 = evalPoly(x) * yScale;
      let y2 = evalPoly(x + dx) * yScale;
      let d1 = y1 - y0;
      let d2 = y2 - y1;
      if (d1 * d2 < 0 && isFinite(y1)) {
        let tpx = cx + (x / gridRange) * (plotW / 2);
        let tpy = cy - (y1 / gridRange) * (plotH / 2);
        if (tpy > plotT && tpy < plotB) {
          fill('green');
          noStroke();
          ellipse(tpx, tpy, 8, 8);
        }
      }
    }
  }

  // End behaviour arrows
  let leftY = evalPoly(-gridRange) * yScale;
  let rightY = evalPoly(gridRange) * yScale;
  stroke('blue');
  strokeWeight(2);
  let arrowLen = 15;
  // Left arrow
  let lx = plotL;
  let ly = cy - (leftY / gridRange) * (plotH / 2);
  ly = constrain(ly, plotT, plotB);
  let leftDir = leftY > evalPoly(-gridRange + 0.1) * yScale ? 1 : -1;
  line(lx, ly, lx + 8, ly + leftDir * arrowLen);
  line(lx, ly, lx + 12, ly + leftDir * 2);
  // Right arrow
  let rx = plotR;
  let ry = cy - (rightY / gridRange) * (plotH / 2);
  ry = constrain(ry, plotT, plotB);
  let rightDir = rightY > evalPoly(gridRange - 0.1) * yScale ? 1 : -1;
  line(rx, ry, rx - 8, ry + rightDir * arrowLen);
  line(rx, ry, rx - 12, ry + rightDir * 2);

  // Build factored form string
  let factoredStr = '';
  if (aVal !== 1) factoredStr += nf(aVal, 0, 1);
  for (let i = 0; i < roots.length; i++) {
    let r = roots[i];
    let rStr = '';
    if (r === 0) rStr = 'x';
    else if (r > 0) rStr = '(x - ' + nf(r, 0, 1) + ')';
    else rStr = '(x + ' + nf(-r, 0, 1) + ')';
    if (mults[i] > 1) rStr += '^' + mults[i];
    factoredStr += rStr;
  }
  if (factoredStr === '') factoredStr = nf(aVal, 0, 1);

  // Display equation
  noStroke();
  fill('black');
  textSize(13);
  textAlign(CENTER, TOP);
  text('f(x) = ' + factoredStr, canvasWidth / 2, 4);

  // Y-scale note
  fill('gray');
  textSize(10);
  textAlign(RIGHT, TOP);
  noStroke();
  text('y scaled to fit', plotR, plotT + 2);

  // Control labels
  noStroke();
  fill('black');
  textSize(defaultTextSize);
  textAlign(LEFT, CENTER);
  text('Roots:', 10, drawHeight + 15);
  for (let i = 0; i < numRoots; i++) {
    text('r' + (i + 1) + '=' + nf(rootSliders[i].value(), 0, 1), 10, drawHeight + 39 + i * 22);
  }
  text('a=' + nf(aVal, 0, 1), 10, drawHeight + 126);
  // Multiplicity column header
  textSize(12);
  fill('gray');
  text('mult', canvasWidth - 90, drawHeight + 15);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  for (let i = 0; i < 4; i++) {
    rootSliders[i].size(canvasWidth - sliderLeftMargin - 100);
    multSelects[i].position(canvasWidth - 90, drawHeight + 28 + i * 22);
  }
  aSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}
