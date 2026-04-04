// Regression Model Fitter MicroSim
// CANVAS_HEIGHT: 500
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 50;
let defaultTextSize = 14;

let datasetSelect;
let showLinear, showQuadratic, showExponential, showResiduals;
let currentData = [];

let datasets = {
  'Population Growth': {
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [100, 122, 148, 180, 220, 268, 325, 396, 482, 587, 715],
    xLabel: 'Year', yLabel: 'Population'
  },
  'Falling Object': {
    x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
    y: [0, 1.2, 4.9, 11.0, 19.6, 30.6, 44.1, 60.0, 78.5],
    xLabel: 'Time (s)', yLabel: 'Distance (m)'
  },
  'Temperature Cooling': {
    x: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    y: [95, 78, 65, 55, 48, 42, 38, 35, 33, 31, 30],
    xLabel: 'Time (min)', yLabel: 'Temp (°C)'
  },
  'Savings': {
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    y: [1000, 1200, 1350, 1600, 1800, 2100, 2350, 2700, 3000],
    xLabel: 'Year', yLabel: 'Amount ($)'
  },
  'Crop Yield': {
    x: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    y: [15, 38, 55, 68, 76, 80, 78, 72, 60, 45],
    xLabel: 'Fertiliser (kg)', yLabel: 'Yield (tonnes)'
  }
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  datasetSelect = createSelect();
  datasetSelect.position(80, drawHeight + 8);
  datasetSelect.option('Population Growth');
  datasetSelect.option('Falling Object');
  datasetSelect.option('Temperature Cooling');
  datasetSelect.option('Savings');
  datasetSelect.option('Crop Yield');
  datasetSelect.selected('Population Growth');

  showLinear = createCheckbox('Linear', true);
  showLinear.position(10, drawHeight + 36);

  showQuadratic = createCheckbox('Quadratic', false);
  showQuadratic.position(100, drawHeight + 36);

  showExponential = createCheckbox('Exponential', false);
  showExponential.position(210, drawHeight + 36);

  showResiduals = createCheckbox('Show residuals', false);
  showResiduals.position(10, drawHeight + 62);

  describe('Regression model fitter comparing linear, quadratic, and exponential fits to preset datasets', LABEL);
}

// Least-squares linear regression: y = mx + c
function linearFit(xs, ys) {
  let n = xs.length;
  let sx = 0, sy = 0, sxy = 0, sx2 = 0;
  for (let i = 0; i < n; i++) {
    sx += xs[i]; sy += ys[i];
    sxy += xs[i] * ys[i]; sx2 += xs[i] * xs[i];
  }
  let m = (n * sxy - sx * sy) / (n * sx2 - sx * sx);
  let c = (sy - m * sx) / n;
  return { m: m, c: c, fn: function(x) { return m * x + c; } };
}

// Least-squares quadratic: y = ax² + bx + c (normal equations)
function quadraticFit(xs, ys) {
  let n = xs.length;
  let sx = 0, sx2 = 0, sx3 = 0, sx4 = 0;
  let sy = 0, sxy = 0, sx2y = 0;
  for (let i = 0; i < n; i++) {
    let x = xs[i], y = ys[i];
    let x2 = x * x;
    sx += x; sx2 += x2; sx3 += x2 * x; sx4 += x2 * x2;
    sy += y; sxy += x * y; sx2y += x2 * y;
  }
  // Solve 3x3 system using Cramer's rule
  let A = [[n, sx, sx2], [sx, sx2, sx3], [sx2, sx3, sx4]];
  let B = [sy, sxy, sx2y];
  let det = det3(A);
  if (abs(det) < 1e-10) return { a: 0, b: 0, c: 0, fn: function(x) { return 0; } };
  let A0 = [[B[0], sx, sx2], [B[1], sx2, sx3], [B[2], sx3, sx4]];
  let A1 = [[n, B[0], sx2], [sx, B[1], sx3], [sx2, B[2], sx4]];
  let A2 = [[n, sx, B[0]], [sx, sx2, B[1]], [sx2, sx3, B[2]]];
  let cc = det3(A0) / det;
  let bb = det3(A1) / det;
  let aa = det3(A2) / det;
  return { a: aa, b: bb, c: cc, fn: function(x) { return aa * x * x + bb * x + cc; } };
}

function det3(m) {
  return m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1])
       - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0])
       + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
}

// Exponential fit: y = A * e^(kx), linearised as ln(y) = ln(A) + kx
function exponentialFit(xs, ys) {
  let lnys = [];
  let validXs = [];
  for (let i = 0; i < ys.length; i++) {
    if (ys[i] > 0) {
      lnys.push(Math.log(ys[i]));
      validXs.push(xs[i]);
    }
  }
  if (validXs.length < 2) return { A: 1, k: 0, fn: function(x) { return 1; } };
  let lin = linearFit(validXs, lnys);
  let A = Math.exp(lin.c);
  let k = lin.m;
  return { A: A, k: k, fn: function(x) { return A * Math.exp(k * x); } };
}

// R-squared
function rSquared(xs, ys, fn) {
  let n = xs.length;
  let meanY = 0;
  for (let i = 0; i < n; i++) meanY += ys[i];
  meanY /= n;
  let ssTot = 0, ssRes = 0;
  for (let i = 0; i < n; i++) {
    ssTot += (ys[i] - meanY) * (ys[i] - meanY);
    let pred = fn(xs[i]);
    ssRes += (ys[i] - pred) * (ys[i] - pred);
  }
  if (ssTot === 0) return 0;
  return 1 - ssRes / ssTot;
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

  let dsName = datasetSelect.value();
  let ds = datasets[dsName];
  let xs = ds.x;
  let ys = ds.y;

  // Determine axis ranges
  let xMin = min(xs) - 1;
  let xMax = max(xs) + 1;
  let yMin = min(ys);
  let yMax = max(ys);
  let yPad = (yMax - yMin) * 0.15;
  yMin = yMin - yPad;
  yMax = yMax + yPad;
  if (yMin > 0) yMin = 0;

  // Plot dimensions
  let plotL = margin + 10;
  let plotR = canvasWidth - 25;
  let plotT = 30;
  let plotB = drawHeight - 25;
  let plotW = plotR - plotL;
  let plotH = plotB - plotT;

  function toSX(x) { return plotL + ((x - xMin) / (xMax - xMin)) * plotW; }
  function toSY(y) { return plotB - ((y - yMin) / (yMax - yMin)) * plotH; }

  // Grid lines
  stroke(225);
  strokeWeight(0.5);
  let xStep = pow(10, floor(log(xMax - xMin) / log(10))) / 2;
  if (xStep < 1) xStep = 1;
  for (let x = ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
    line(toSX(x), plotT, toSX(x), plotB);
  }
  let yStep = pow(10, floor(log(yMax - yMin) / log(10))) / 2;
  if (yStep < 1) yStep = 1;
  for (let y = ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
    line(plotL, toSY(y), plotR, toSY(y));
  }

  // Axes
  stroke('black');
  strokeWeight(1.5);
  line(plotL, plotB, plotR, plotB);
  line(plotL, plotT, plotL, plotB);
  strokeWeight(1);

  // Axis labels
  noStroke();
  fill('black');
  textSize(9);
  textAlign(CENTER, TOP);
  for (let x = ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
    text(nf(x, 0, 0), toSX(x), plotB + 3);
  }
  textAlign(RIGHT, CENTER);
  for (let y = ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
    text(nf(y, 0, 0), plotL - 4, toSY(y));
  }

  // Axis titles
  textSize(11);
  textAlign(CENTER, TOP);
  noStroke();
  fill('black');
  text(ds.xLabel, (plotL + plotR) / 2, plotB + 14);
  push();
  translate(12, (plotT + plotB) / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, CENTER);
  text(ds.yLabel, 0, 0);
  pop();

  // Compute fits
  let linFit = linearFit(xs, ys);
  let quadFit = quadraticFit(xs, ys);
  let expFit = exponentialFit(xs, ys);

  // Draw regression curves
  let r2Texts = [];

  if (showLinear.checked()) {
    stroke('blue');
    strokeWeight(2);
    noFill();
    beginShape();
    for (let sx = plotL; sx <= plotR; sx += 2) {
      let x = xMin + ((sx - plotL) / plotW) * (xMax - xMin);
      let y = linFit.fn(x);
      let sy = toSY(y);
      if (sy >= plotT - 5 && sy <= plotB + 5) vertex(sx, sy);
    }
    endShape();
    let r2 = rSquared(xs, ys, linFit.fn);
    r2Texts.push({ label: 'Linear R²=' + nf(r2, 0, 4), color: 'blue' });
  }

  if (showQuadratic.checked()) {
    stroke('green');
    strokeWeight(2);
    noFill();
    beginShape();
    for (let sx = plotL; sx <= plotR; sx += 2) {
      let x = xMin + ((sx - plotL) / plotW) * (xMax - xMin);
      let y = quadFit.fn(x);
      let sy = toSY(y);
      if (sy >= plotT - 5 && sy <= plotB + 5) vertex(sx, sy);
    }
    endShape();
    let r2 = rSquared(xs, ys, quadFit.fn);
    r2Texts.push({ label: 'Quadratic R²=' + nf(r2, 0, 4), color: 'green' });
  }

  if (showExponential.checked()) {
    stroke('red');
    strokeWeight(2);
    noFill();
    beginShape();
    for (let sx = plotL; sx <= plotR; sx += 2) {
      let x = xMin + ((sx - plotL) / plotW) * (xMax - xMin);
      let y = expFit.fn(x);
      let sy = toSY(y);
      if (sy >= plotT - 5 && sy <= plotB + 5) vertex(sx, sy);
    }
    endShape();
    let r2 = rSquared(xs, ys, expFit.fn);
    r2Texts.push({ label: 'Exponential R²=' + nf(r2, 0, 4), color: 'red' });
  }

  // Show residuals
  if (showResiduals.checked()) {
    for (let i = 0; i < xs.length; i++) {
      let sx = toSX(xs[i]);
      let sy = toSY(ys[i]);
      if (showLinear.checked()) {
        let predY = toSY(linFit.fn(xs[i]));
        stroke('blue');
        strokeWeight(1);
        drawingContext.setLineDash([3, 3]);
        line(sx, sy, sx, predY);
        drawingContext.setLineDash([]);
      }
      if (showQuadratic.checked()) {
        let predY = toSY(quadFit.fn(xs[i]));
        stroke('green');
        strokeWeight(1);
        drawingContext.setLineDash([3, 3]);
        line(sx + 2, sy, sx + 2, predY);
        drawingContext.setLineDash([]);
      }
      if (showExponential.checked()) {
        let predY = toSY(expFit.fn(xs[i]));
        stroke('red');
        strokeWeight(1);
        drawingContext.setLineDash([3, 3]);
        line(sx + 4, sy, sx + 4, predY);
        drawingContext.setLineDash([]);
      }
    }
  }

  // Plot data points (on top)
  for (let i = 0; i < xs.length; i++) {
    fill('black');
    noStroke();
    ellipse(toSX(xs[i]), toSY(ys[i]), 10, 10);
  }

  // Title
  noStroke();
  fill('black');
  textSize(14);
  textAlign(CENTER, TOP);
  text(dsName, canvasWidth / 2, 5);

  // R² display
  noStroke();
  textSize(11);
  textAlign(RIGHT, TOP);
  for (let i = 0; i < r2Texts.length; i++) {
    fill(r2Texts[i].color);
    text(r2Texts[i].label, plotR, plotT + 3 + i * 15);
  }

  // Control labels
  noStroke();
  fill('black');
  textSize(12);
  textAlign(LEFT, CENTER);
  text('Dataset:', 10, drawHeight + 16);

  textSize(defaultTextSize);
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
