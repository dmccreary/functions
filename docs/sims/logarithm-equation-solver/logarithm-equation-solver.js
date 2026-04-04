// Logarithm Equation Solver MicroSim
// CANVAS_HEIGHT: 480
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 50;
let defaultTextSize = 14;

let equationSelect;
let zoomSlider;
let showSolutionCheckbox;
let showDomainCheckbox;

let equations = [
  { label: '2ˣ = 5', lhs: (x) => pow(2, x), rhs: (x) => 5, lhsLabel: 'y = 2ˣ', rhsLabel: 'y = 5', xMin: -2, xMax: 5, yMin: -1, yMax: 10 },
  { label: 'e³ˣ = 40', lhs: (x) => exp(3 * x), rhs: (x) => 40, lhsLabel: 'y = e³ˣ', rhsLabel: 'y = 40', xMin: -1, xMax: 3, yMin: -5, yMax: 50 },
  { label: 'log₂(x+3) = 5', lhs: (x) => log(x + 3) / log(2), rhs: (x) => 5, lhsLabel: 'y = log₂(x+3)', rhsLabel: 'y = 5', xMin: -3, xMax: 35, yMin: -2, yMax: 8 },
  { label: 'log(x)+log(x+3) = 1', lhs: (x) => (x > 0 && x + 3 > 0) ? log(x) / log(10) + log(x + 3) / log(10) : NaN, rhs: (x) => 1, lhsLabel: 'y = log(x)+log(x+3)', rhsLabel: 'y = 1', xMin: -1, xMax: 8, yMin: -3, yMax: 5 },
  { label: '3ˣ = 10', lhs: (x) => pow(3, x), rhs: (x) => 10, lhsLabel: 'y = 3ˣ', rhsLabel: 'y = 10', xMin: -2, xMax: 5, yMin: -2, yMax: 15 }
];

let solutions = [
  { steps: ['2ˣ = 5', 'x = log₂(5)', 'x = log(5)/log(2)', 'x ≈ 2.322'], x: log(5) / log(2), y: 5, domain: null },
  { steps: ['e³ˣ = 40', '3x = ln(40)', 'x = ln(40)/3', 'x ≈ 1.229'], x: log(40) / 3, y: 40, domain: null },
  { steps: ['log₂(x+3) = 5', 'x + 3 = 2⁵', 'x + 3 = 32', 'x = 29'], x: 29, y: 5, domain: { type: 'left', bound: -3 } },
  { steps: ['log(x) + log(x+3) = 1', 'log(x(x+3)) = 1', 'x² + 3x = 10', 'x² + 3x - 10 = 0', '(x+5)(x-2) = 0', 'x = 2 (x > 0)'], x: 2, y: 1, domain: { type: 'left', bound: 0 } },
  { steps: ['3ˣ = 10', 'x = log₃(10)', 'x = log(10)/log(3)', 'x ≈ 2.096'], x: log(10) / log(3), y: 10, domain: null }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  equationSelect = createSelect();
  equationSelect.position(10, drawHeight + 8);
  for (let eq of equations) {
    equationSelect.option(eq.label);
  }
  equationSelect.selected(equations[0].label);

  zoomSlider = createSlider(50, 200, 100, 10);
  zoomSlider.position(80, drawHeight + 42);
  zoomSlider.size(130);

  showSolutionCheckbox = createCheckbox('Show algebraic solution', false);
  showSolutionCheckbox.position(10, drawHeight + 65);

  showDomainCheckbox = createCheckbox('Show domain restriction', false);
  showDomainCheckbox.position(10, drawHeight + 82);

  describe('Graph showing both sides of logarithmic/exponential equations as curves with intersection point', LABEL);
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

  let selLabel = equationSelect.value();
  let idx = 0;
  for (let i = 0; i < equations.length; i++) {
    if (equations[i].label === selLabel) { idx = i; break; }
  }

  let eq = equations[idx];
  let sol = solutions[idx];
  let zoom = zoomSlider.value() / 100;

  let xMin = eq.xMin / zoom;
  let xMax = eq.xMax / zoom;
  let yMin = eq.yMin / zoom;
  let yMax = eq.yMax / zoom;

  let plotW = canvasWidth - 2 * margin;
  let plotH = drawHeight - 2 * margin - 10;
  let originX, originY;

  // Compute origin position in pixel space
  let xFrac = -xMin / (xMax - xMin);
  let yFrac = yMax / (yMax - yMin);
  originX = margin + xFrac * plotW;
  originY = margin + 5 + yFrac * plotH;

  let toPixelX = (x) => margin + ((x - xMin) / (xMax - xMin)) * plotW;
  let toPixelY = (y) => margin + 5 + ((yMax - y) / (yMax - yMin)) * plotH;

  // Domain restriction shading
  if (showDomainCheckbox.checked() && sol.domain) {
    noStroke();
    fill(220, 220, 220, 120);
    if (sol.domain.type === 'left') {
      let boundPx = toPixelX(sol.domain.bound);
      rect(margin, margin + 5, boundPx - margin, plotH);
      fill('gray');
      noStroke();
      textSize(10);
      textAlign(CENTER, TOP);
      text('Domain restricted', (margin + boundPx) / 2, margin + 15);
      // Vertical domain line
      stroke('gray');
      strokeWeight(1);
      drawingContext.setLineDash([4, 3]);
      line(boundPx, margin + 5, boundPx, margin + 5 + plotH);
      drawingContext.setLineDash([]);
    }
  }

  // Grid
  stroke(230);
  strokeWeight(0.5);
  let xStep = getStep(xMax - xMin);
  let yStep = getStep(yMax - yMin);
  for (let x = ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
    let px = toPixelX(x);
    line(px, margin + 5, px, margin + 5 + plotH);
  }
  for (let y = ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
    let py = toPixelY(y);
    line(margin, py, margin + plotW, py);
  }

  // Axes
  stroke('black');
  strokeWeight(2);
  // x-axis
  if (originY >= margin && originY <= margin + 5 + plotH) {
    line(margin, originY, margin + plotW, originY);
  }
  // y-axis
  if (originX >= margin && originX <= margin + plotW) {
    line(originX, margin + 5, originX, margin + 5 + plotH);
  }
  strokeWeight(1);

  // Axis tick labels
  noStroke();
  fill('black');
  textSize(10);
  textAlign(CENTER, TOP);
  for (let x = ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
    if (abs(x) < xStep * 0.1) continue;
    let px = toPixelX(x);
    let labelY = constrain(originY + 4, margin + plotH - 10, margin + 5 + plotH + 2);
    text(nf(x, 0, 1), px, labelY);
  }
  textAlign(RIGHT, CENTER);
  for (let y = ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
    if (abs(y) < yStep * 0.1) continue;
    let py = toPixelY(y);
    let labelX = constrain(originX - 5, margin - 2, margin + plotW);
    text(nf(y, 0, 1), labelX, py);
  }

  // Draw LHS curve (blue)
  stroke('blue');
  strokeWeight(2.5);
  noFill();
  let prevValid = false;
  for (let px = margin; px <= margin + plotW; px += 1) {
    let x = xMin + ((px - margin) / plotW) * (xMax - xMin);
    let y = eq.lhs(x);
    if (isNaN(y) || !isFinite(y) || abs(y) > abs(yMax - yMin) * 3) {
      prevValid = false;
      continue;
    }
    let py = toPixelY(y);
    if (prevValid) {
      let prevX = xMin + ((px - 1 - margin) / plotW) * (xMax - xMin);
      let prevY = eq.lhs(prevX);
      let prevPy = toPixelY(prevY);
      if (abs(py - prevPy) < plotH) {
        line(px - 1, prevPy, px, py);
      }
    }
    prevValid = true;
  }

  // Draw RHS curve (red)
  stroke('red');
  strokeWeight(2);
  noFill();
  prevValid = false;
  for (let px = margin; px <= margin + plotW; px += 1) {
    let x = xMin + ((px - margin) / plotW) * (xMax - xMin);
    let y = eq.rhs(x);
    if (isNaN(y) || !isFinite(y)) {
      prevValid = false;
      continue;
    }
    let py = toPixelY(y);
    if (prevValid) {
      let prevX = xMin + ((px - 1 - margin) / plotW) * (xMax - xMin);
      let prevY = eq.rhs(prevX);
      let prevPy = toPixelY(prevY);
      line(px - 1, prevPy, px, py);
    }
    prevValid = true;
  }

  // Intersection point
  let solPx = toPixelX(sol.x);
  let solPy = toPixelY(sol.y);
  if (solPx >= margin && solPx <= margin + plotW && solPy >= margin && solPy <= margin + 5 + plotH) {
    // Highlight ring
    stroke('green');
    strokeWeight(2);
    noFill();
    ellipse(solPx, solPy, 16, 16);
    fill('green');
    noStroke();
    ellipse(solPx, solPy, 6, 6);

    // Coordinate label
    noStroke();
    fill('darkgreen');
    textSize(12);
    textAlign(LEFT, BOTTOM);
    text('(' + nf(sol.x, 0, 3) + ', ' + nf(sol.y, 0, 1) + ')', solPx + 10, solPy - 4);
  }

  // Legend
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  fill('blue');
  text(eq.lhsLabel, margin + 5, margin + 10);
  fill('red');
  text(eq.rhsLabel, margin + 5, margin + 24);

  // Title
  noStroke();
  fill('black');
  textSize(16);
  textAlign(CENTER, TOP);
  text('Solve: ' + eq.label, canvasWidth / 2, 6);

  // Algebraic solution panel
  if (showSolutionCheckbox.checked()) {
    let panelX = canvasWidth - margin - 160;
    let panelY = margin + 10;
    let panelW = 155;
    let panelH = 20 + sol.steps.length * 18;

    fill('lightyellow');
    stroke('goldenrod');
    strokeWeight(1);
    rect(panelX, panelY, panelW, panelH, 6);

    noStroke();
    fill('black');
    textSize(11);
    textAlign(LEFT, TOP);
    text('Solution Steps:', panelX + 8, panelY + 5);
    fill('darkblue');
    textSize(11);
    for (let i = 0; i < sol.steps.length; i++) {
      text((i + 1) + '. ' + sol.steps[i], panelX + 8, panelY + 22 + i * 18);
    }
  }

  // Control labels
  noStroke();
  fill('black');
  textSize(11);
  textAlign(LEFT, CENTER);
  text('Zoom: ' + zoomSlider.value() + '%', 10, drawHeight + 52);
}

function getStep(range) {
  if (range <= 5) return 1;
  if (range <= 15) return 2;
  if (range <= 30) return 5;
  if (range <= 60) return 10;
  return 20;
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
