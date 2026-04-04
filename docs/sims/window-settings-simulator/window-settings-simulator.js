// Window Settings Simulator MicroSim
// CANVAS_HEIGHT: 500
let canvasWidth = 400;
let drawHeight = 350;
let controlHeight = 150;
let canvasHeight = drawHeight + controlHeight;
let margin = 40;
let defaultTextSize = 16;

let sliderXMin, sliderXMax, sliderYMin, sliderYMax;
let funcSelect;
let autoFitBtn, resetBtn;
let sliderLeftMargin = 90;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Function dropdown
  funcSelect = createSelect();
  funcSelect.position(10, drawHeight + 8);
  funcSelect.option('x² − 100');
  funcSelect.option('0.01x³ − x');
  funcSelect.option('2^x');
  funcSelect.option('1/(x − 3)');
  funcSelect.option('(x−8)(x+8)');

  // Sliders
  sliderXMin = createSlider(-50, 0, -10, 1);
  sliderXMin.position(sliderLeftMargin, drawHeight + 38);
  sliderXMin.style('width', '120px');

  sliderXMax = createSlider(0, 50, 10, 1);
  sliderXMax.position(sliderLeftMargin, drawHeight + 60);
  sliderXMax.style('width', '120px');

  sliderYMin = createSlider(-50, 0, -10, 1);
  sliderYMin.position(sliderLeftMargin + 190, drawHeight + 38);
  sliderYMin.style('width', '120px');

  sliderYMax = createSlider(0, 50, 10, 1);
  sliderYMax.position(sliderLeftMargin + 190, drawHeight + 60);
  sliderYMax.style('width', '120px');

  // Buttons
  autoFitBtn = createButton('Auto Fit');
  autoFitBtn.position(10, drawHeight + 90);
  autoFitBtn.mousePressed(autoFit);

  resetBtn = createButton('Reset to Default');
  resetBtn.position(85, drawHeight + 90);
  resetBtn.mousePressed(resetDefaults);

  describe('Simulated calculator screen with adjustable window settings for viewing functions', LABEL);
}

function draw() {
  updateCanvasSize();

  let xMin = sliderXMin.value();
  let xMax = sliderXMax.value();
  let yMin = sliderYMin.value();
  let yMax = sliderYMax.value();

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
  text('Window Settings Simulator', canvasWidth / 2, 8);

  // Main graph area
  let plotL = margin;
  let plotR = canvasWidth - 130;
  let plotT = margin + 20;
  let plotB = drawHeight - 15;
  let plotW = plotR - plotL;
  let plotH = plotB - plotT;

  // Calculator-style border
  stroke(80);
  strokeWeight(2);
  noFill();
  rect(plotL - 2, plotT - 2, plotW + 4, plotH + 4, 4);
  strokeWeight(1);

  // Clip area fill
  fill(240, 245, 255);
  noStroke();
  rect(plotL, plotT, plotW, plotH);

  // Grid lines
  stroke(210);
  strokeWeight(0.5);
  let xStep = niceStep(xMax - xMin);
  let yStep = niceStep(yMax - yMin);
  for (let gx = ceil(xMin / xStep) * xStep; gx <= xMax; gx += xStep) {
    let px = map(gx, xMin, xMax, plotL, plotR);
    line(px, plotT, px, plotB);
  }
  for (let gy = ceil(yMin / yStep) * yStep; gy <= yMax; gy += yStep) {
    let py = map(gy, yMin, yMax, plotB, plotT);
    line(plotL, py, plotR, py);
  }

  // Axes if in view
  stroke(80);
  strokeWeight(1.5);
  if (xMin <= 0 && xMax >= 0) {
    let ax = map(0, xMin, xMax, plotL, plotR);
    line(ax, plotT, ax, plotB);
  }
  if (yMin <= 0 && yMax >= 0) {
    let ay = map(0, yMin, yMax, plotB, plotT);
    line(plotL, ay, plotR, ay);
  }

  // Axis tick labels
  noStroke();
  fill(80);
  textSize(9);
  textAlign(CENTER, TOP);
  for (let gx = ceil(xMin / xStep) * xStep; gx <= xMax; gx += xStep) {
    if (abs(gx) < 0.001) continue;
    let px = map(gx, xMin, xMax, plotL, plotR);
    let ay = yMin <= 0 && yMax >= 0 ? map(0, yMin, yMax, plotB, plotT) : plotB;
    text(nf(gx, 0, 0), px, ay + 2);
  }
  textAlign(RIGHT, CENTER);
  for (let gy = ceil(yMin / yStep) * yStep; gy <= yMax; gy += yStep) {
    if (abs(gy) < 0.001) continue;
    let py = map(gy, yMin, yMax, plotB, plotT);
    let ax = xMin <= 0 && xMax >= 0 ? map(0, xMin, xMax, plotL, plotR) : plotL;
    text(nf(gy, 0, 0), ax - 3, py);
  }

  // Plot function (clipped)
  let fname = funcSelect.value();
  stroke('blue');
  strokeWeight(2);
  noFill();
  let prevY = null;
  let prevPx = null;
  let prevPy = null;
  for (let px = plotL; px <= plotR; px++) {
    let x = map(px, plotL, plotR, xMin, xMax);
    let y = evalFunc(fname, x);
    if (y === null || !isFinite(y)) {
      prevY = null;
      continue;
    }
    let py = map(y, yMin, yMax, plotB, plotT);
    if (prevY !== null && abs(y - prevY) < (yMax - yMin) * 2) {
      // Only draw if segment is within plot bounds
      if ((prevPy >= plotT - 50 && prevPy <= plotB + 50) || (py >= plotT - 50 && py <= plotB + 50)) {
        let clippedLine = clipToRect(prevPx, prevPy, px, py, plotL, plotT, plotR, plotB);
        if (clippedLine) {
          line(clippedLine.x1, clippedLine.y1, clippedLine.x2, clippedLine.y2);
        }
      }
    }
    prevY = y;
    prevPx = px;
    prevPy = py;
  }

  // Reference mini-graph in corner
  let refL = canvasWidth - 120;
  let refT = plotT;
  let refW = 110;
  let refH = 100;
  fill(255);
  stroke(120);
  strokeWeight(1);
  rect(refL, refT, refW, refH, 4);

  // Reference full-range view
  let refXMin = -15, refXMax = 15, refYMin = -15, refYMax = 15;
  // Adjust range for each function
  if (fname === 'x² − 100') { refXMin = -15; refXMax = 15; refYMin = -110; refYMax = 20; }
  else if (fname === '0.01x³ − x') { refXMin = -15; refXMax = 15; refYMin = -10; refYMax = 10; }
  else if (fname === '2^x') { refXMin = -5; refXMax = 10; refYMin = -5; refYMax = 50; }
  else if (fname === '1/(x − 3)') { refXMin = -10; refXMax = 15; refYMin = -10; refYMax = 10; }
  else if (fname === '(x−8)(x+8)') { refXMin = -12; refXMax = 12; refYMin = -70; refYMax = 20; }

  // Mini axes
  stroke(180);
  strokeWeight(0.5);
  if (refXMin <= 0 && refXMax >= 0) {
    let ax = map(0, refXMin, refXMax, refL + 2, refL + refW - 2);
    line(ax, refT + 2, ax, refT + refH - 2);
  }
  if (refYMin <= 0 && refYMax >= 0) {
    let ay = map(0, refYMin, refYMax, refT + refH - 2, refT + 2);
    line(refL + 2, ay, refL + refW - 2, ay);
  }

  // Mini curve
  stroke(0, 0, 200);
  strokeWeight(1);
  noFill();
  let pvy = null;
  for (let i = 0; i <= refW - 4; i++) {
    let x = map(i, 0, refW - 4, refXMin, refXMax);
    let y = evalFunc(fname, x);
    if (y === null || !isFinite(y)) { pvy = null; continue; }
    let rpx = refL + 2 + i;
    let rpy = map(y, refYMin, refYMax, refT + refH - 2, refT + 2);
    if (pvy !== null && abs(y - pvy) < (refYMax - refYMin) * 2) {
      if (rpy >= refT && rpy <= refT + refH) {
        point(rpx, rpy);
      }
    }
    pvy = y;
  }

  // Window indicator box on mini graph
  noFill();
  stroke(255, 0, 0);
  strokeWeight(1.5);
  let wl = map(xMin, refXMin, refXMax, refL + 2, refL + refW - 2);
  let wr = map(xMax, refXMin, refXMax, refL + 2, refL + refW - 2);
  let wt = map(yMax, refYMin, refYMax, refT + refH - 2, refT + 2);
  let wb = map(yMin, refYMin, refYMax, refT + refH - 2, refT + 2);
  wl = constrain(wl, refL + 1, refL + refW - 1);
  wr = constrain(wr, refL + 1, refL + refW - 1);
  wt = constrain(wt, refT + 1, refT + refH - 1);
  wb = constrain(wb, refT + 1, refT + refH - 1);
  rect(wl, wt, wr - wl, wb - wt);

  // Mini label
  noStroke();
  fill(100);
  textSize(10);
  textAlign(CENTER, TOP);
  text('Full View', refL + refW / 2, refT + refH + 3);

  // Visible features checklist
  let features = getVisibleFeatures(fname, xMin, xMax, yMin, yMax);
  noStroke();
  textSize(11);
  textAlign(LEFT, TOP);
  let fy = refT + refH + 20;
  fill(80);
  text('Visible features:', refL - 10, fy);
  fy += 16;
  for (let f of features) {
    fill(f.visible ? color(0, 140, 0) : color(180, 0, 0));
    noStroke();
    text((f.visible ? '✓ ' : '✗ ') + f.name, refL - 10, fy);
    fy += 14;
  }

  // Slider labels
  noStroke();
  fill('black');
  textSize(13);
  textAlign(LEFT, CENTER);
  text('xMin: ' + xMin, 10, drawHeight + 48);
  text('xMax: ' + xMax, 10, drawHeight + 70);
  text('yMin: ' + yMin, sliderLeftMargin + 145, drawHeight + 48);
  text('yMax: ' + yMax, sliderLeftMargin + 145, drawHeight + 70);
}

function evalFunc(name, x) {
  switch (name) {
    case 'x² − 100':
      return x * x - 100;
    case '0.01x³ − x':
      return 0.01 * x * x * x - x;
    case '2^x':
      return pow(2, x);
    case '1/(x − 3)':
      if (abs(x - 3) < 0.05) return null;
      return 1 / (x - 3);
    case '(x−8)(x+8)':
      return (x - 8) * (x + 8);
    default:
      return null;
  }
}

function niceStep(range) {
  let rough = range / 8;
  let mag = pow(10, floor(log(rough) / log(10)));
  let norm = rough / mag;
  if (norm < 1.5) return mag;
  if (norm < 3.5) return 2 * mag;
  if (norm < 7.5) return 5 * mag;
  return 10 * mag;
}

function clipToRect(x1, y1, x2, y2, l, t, r, b) {
  // Simple visibility check
  if ((y1 < t && y2 < t) || (y1 > b && y2 > b)) return null;
  let cy1 = constrain(y1, t, b);
  let cy2 = constrain(y2, t, b);
  return { x1: x1, y1: cy1, x2: x2, y2: cy2 };
}

function getVisibleFeatures(fname, xMin, xMax, yMin, yMax) {
  let features = [];
  let data = {
    'x² − 100': {
      xInts: [[-10, 0], [10, 0]],
      yInt: [0, -100],
      vertex: [0, -100]
    },
    '0.01x³ − x': {
      xInts: [[-10, 0], [0, 0], [10, 0]],
      yInt: [0, 0],
      turning: [[-5.77, 3.85], [5.77, -3.85]]
    },
    '2^x': {
      xInts: [],
      yInt: [0, 1],
      asymptote: 'y = 0'
    },
    '1/(x − 3)': {
      xInts: [],
      yInt: [0, -0.333],
      asymptoteV: 3
    },
    '(x−8)(x+8)': {
      xInts: [[-8, 0], [8, 0]],
      yInt: [0, -64],
      vertex: [0, -64]
    }
  };
  let d = data[fname];
  if (!d) return features;

  if (d.xInts) {
    for (let i = 0; i < d.xInts.length; i++) {
      let pt = d.xInts[i];
      let vis = pt[0] >= xMin && pt[0] <= xMax && pt[1] >= yMin && pt[1] <= yMax;
      features.push({ name: 'x-int (' + pt[0] + ',0)', visible: vis });
    }
  }
  if (d.yInt) {
    let vis = 0 >= xMin && 0 <= xMax && d.yInt[1] >= yMin && d.yInt[1] <= yMax;
    features.push({ name: 'y-int (0,' + nf(d.yInt[1], 0, 1) + ')', visible: vis });
  }
  if (d.vertex) {
    let vis = d.vertex[0] >= xMin && d.vertex[0] <= xMax && d.vertex[1] >= yMin && d.vertex[1] <= yMax;
    features.push({ name: 'Vertex', visible: vis });
  }
  if (d.turning) {
    for (let tp of d.turning) {
      let vis = tp[0] >= xMin && tp[0] <= xMax && tp[1] >= yMin && tp[1] <= yMax;
      features.push({ name: 'Turn pt', visible: vis });
    }
  }
  return features;
}

function autoFit() {
  let fname = funcSelect.value();
  switch (fname) {
    case 'x² − 100':
      sliderXMin.value(-15); sliderXMax.value(15); sliderYMin.value(-50); sliderYMax.value(20);
      break;
    case '0.01x³ − x':
      sliderXMin.value(-15); sliderXMax.value(15); sliderYMin.value(-10); sliderYMax.value(10);
      break;
    case '2^x':
      sliderXMin.value(-5); sliderXMax.value(10); sliderYMin.value(-5); sliderYMax.value(50);
      break;
    case '1/(x − 3)':
      sliderXMin.value(-10); sliderXMax.value(15); sliderYMin.value(-10); sliderYMax.value(10);
      break;
    case '(x−8)(x+8)':
      sliderXMin.value(-12); sliderXMax.value(12); sliderYMin.value(-50); sliderYMax.value(20);
      break;
    default:
      resetDefaults();
  }
}

function resetDefaults() {
  sliderXMin.value(-10);
  sliderXMax.value(10);
  sliderYMin.value(-10);
  sliderYMax.value(10);
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
