// Key Graph Features Explorer MicroSim
// CANVAS_HEIGHT: 550
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 40;
let defaultTextSize = 16;

let funcSelect;
let cbXIntercepts, cbYIntercept, cbTurningPts, cbIncreasing, cbDecreasing;
let revealBtn;
let gridRange = 6;

// Precomputed features for each function
let functionBank = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Function dropdown
  funcSelect = createSelect();
  funcSelect.position(10, drawHeight + 8);
  funcSelect.option('x² − 4');
  funcSelect.option('−x² + 2x + 3');
  funcSelect.option('x³ − 3x');
  funcSelect.option('0.5(x−1)(x+3)');
  funcSelect.option('|x−2| − 1');
  funcSelect.changed(resetToggles);

  // Checkboxes
  cbXIntercepts = createCheckbox('x-int', false);
  cbXIntercepts.position(10, drawHeight + 38);
  cbXIntercepts.style('font-size', '13px');

  cbYIntercept = createCheckbox('y-int', false);
  cbYIntercept.position(75, drawHeight + 38);
  cbYIntercept.style('font-size', '13px');

  cbTurningPts = createCheckbox('Turning', false);
  cbTurningPts.position(140, drawHeight + 38);
  cbTurningPts.style('font-size', '13px');

  cbIncreasing = createCheckbox('Increasing', false);
  cbIncreasing.position(215, drawHeight + 38);
  cbIncreasing.style('font-size', '13px');

  cbDecreasing = createCheckbox('Decreasing', false);
  cbDecreasing.position(310, drawHeight + 38);
  cbDecreasing.style('font-size', '13px');

  revealBtn = createButton('Reveal All');
  revealBtn.position(10, drawHeight + 68);
  revealBtn.mousePressed(revealAll);

  buildFunctionBank();
  describe('Interactive graph showing key features of functions with toggleable overlays', LABEL);
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

  // Title
  fill('black');
  noStroke();
  textSize(20);
  textAlign(CENTER, TOP);
  text('Key Graph Features Explorer', canvasWidth / 2, 8);

  let plotL = margin;
  let plotR = canvasWidth - margin;
  let plotT = margin + 20;
  let plotB = drawHeight - 20;
  let plotW = plotR - plotL;
  let plotH = plotB - plotT;
  let cx = (plotL + plotR) / 2;
  let cy = (plotT + plotB) / 2;

  // Grid
  stroke(220);
  strokeWeight(0.5);
  for (let i = -gridRange; i <= gridRange; i++) {
    let px = map(i, -gridRange, gridRange, plotL, plotR);
    let py = map(i, -gridRange, gridRange, plotB, plotT);
    line(px, plotT, px, plotB);
    line(plotL, py, plotR, py);
  }

  // Axes
  stroke('black');
  strokeWeight(2);
  line(plotL, cy, plotR, cy);
  line(cx, plotT, cx, plotB);
  strokeWeight(1);

  // Axis tick labels
  noStroke();
  fill('black');
  textSize(11);
  textAlign(CENTER, TOP);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0) continue;
    let px = map(i, -gridRange, gridRange, plotL, plotR);
    text(i, px, cy + 3);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0) continue;
    let py = map(i, -gridRange, gridRange, plotB, plotT);
    text(i, cx - 4, py);
  }

  let fname = funcSelect.value();
  let feat = functionBank[fname];
  if (!feat) return;

  // Draw interval shading first (behind curve)
  if (cbIncreasing.checked()) {
    drawIntervalShading(feat.increasing, color(0, 180, 0, 40), plotL, plotR, plotT, plotB);
  }
  if (cbDecreasing.checked()) {
    drawIntervalShading(feat.decreasing, color(220, 0, 0, 40), plotL, plotR, plotT, plotB);
  }

  // Plot the function curve
  stroke('black');
  strokeWeight(2);
  noFill();
  beginShape();
  for (let px = plotL; px <= plotR; px++) {
    let x = map(px, plotL, plotR, -gridRange, gridRange);
    let y = evalFunc(fname, x);
    if (y !== null && abs(y) < 100) {
      let py = map(y, -gridRange, gridRange, plotB, plotT);
      vertex(px, py);
    }
  }
  endShape();

  // X-intercepts
  if (cbXIntercepts.checked()) {
    for (let pt of feat.xIntercepts) {
      let px = map(pt, -gridRange, gridRange, plotL, plotR);
      let py = cy;
      fill(0, 100, 255);
      noStroke();
      ellipse(px, py, 12, 12);
      fill('black');
      textSize(12);
      textAlign(CENTER, TOP);
      noStroke();
      text('(' + nf(pt, 0, 1) + ', 0)', px, py + 8);
    }
  }

  // Y-intercept
  if (cbYIntercept.checked()) {
    let yVal = evalFunc(fname, 0);
    if (yVal !== null) {
      let px = cx;
      let py = map(yVal, -gridRange, gridRange, plotB, plotT);
      fill(150, 0, 200);
      noStroke();
      ellipse(px, py, 12, 12);
      fill('black');
      textSize(12);
      textAlign(LEFT, CENTER);
      noStroke();
      text('(0, ' + nf(yVal, 0, 1) + ')', px + 8, py);
    }
  }

  // Turning points
  if (cbTurningPts.checked()) {
    for (let pt of feat.turningPoints) {
      let px = map(pt.x, -gridRange, gridRange, plotL, plotR);
      let py = map(pt.y, -gridRange, gridRange, plotB, plotT);
      fill(255, 140, 0);
      noStroke();
      ellipse(px, py, 12, 12);
      fill('black');
      textSize(12);
      textAlign(CENTER, BOTTOM);
      noStroke();
      text('(' + nf(pt.x, 0, 1) + ', ' + nf(pt.y, 0, 1) + ')', px, py - 8);
    }
  }

  // Legend
  noStroke();
  textSize(12);
  textAlign(LEFT, CENTER);
  let legendY = plotT + 5;
  let legendX = plotL + 5;
  if (cbIncreasing.checked()) {
    fill(0, 180, 0, 100);
    rect(legendX, legendY, 12, 12);
    fill('black');
    noStroke();
    text('Increasing', legendX + 16, legendY + 6);
    legendY += 18;
  }
  if (cbDecreasing.checked()) {
    fill(220, 0, 0, 100);
    noStroke();
    rect(legendX, legendY, 12, 12);
    fill('black');
    noStroke();
    text('Decreasing', legendX + 16, legendY + 6);
  }
}

function drawIntervalShading(intervals, c, plotL, plotR, plotT, plotB) {
  fill(c);
  noStroke();
  for (let interval of intervals) {
    let x1 = max(interval[0], -gridRange);
    let x2 = min(interval[1], gridRange);
    let px1 = map(x1, -gridRange, gridRange, plotL, plotR);
    let px2 = map(x2, -gridRange, gridRange, plotL, plotR);
    rect(px1, plotT, px2 - px1, plotB - plotT);
  }
}

function evalFunc(name, x) {
  switch (name) {
    case 'x² − 4':
      return x * x - 4;
    case '−x² + 2x + 3':
      return -x * x + 2 * x + 3;
    case 'x³ − 3x':
      return x * x * x - 3 * x;
    case '0.5(x−1)(x+3)':
      return 0.5 * (x - 1) * (x + 3);
    case '|x−2| − 1':
      return abs(x - 2) - 1;
    default:
      return null;
  }
}

function buildFunctionBank() {
  functionBank = {
    'x² − 4': {
      xIntercepts: [-2, 2],
      turningPoints: [{ x: 0, y: -4 }],
      increasing: [[0, 6]],
      decreasing: [[-6, 0]]
    },
    '−x² + 2x + 3': {
      xIntercepts: [-1, 3],
      turningPoints: [{ x: 1, y: 4 }],
      increasing: [[-6, 1]],
      decreasing: [[1, 6]]
    },
    'x³ − 3x': {
      xIntercepts: [-1.732, 0, 1.732],
      turningPoints: [{ x: -1, y: 2 }, { x: 1, y: -2 }],
      increasing: [[-6, -1], [1, 6]],
      decreasing: [[-1, 1]]
    },
    '0.5(x−1)(x+3)': {
      xIntercepts: [1, -3],
      turningPoints: [{ x: -1, y: -2 }],
      increasing: [[-1, 6]],
      decreasing: [[-6, -1]]
    },
    '|x−2| − 1': {
      xIntercepts: [1, 3],
      turningPoints: [{ x: 2, y: -1 }],
      increasing: [[2, 6]],
      decreasing: [[-6, 2]]
    }
  };
}

function revealAll() {
  cbXIntercepts.checked(true);
  cbYIntercept.checked(true);
  cbTurningPts.checked(true);
  cbIncreasing.checked(true);
  cbDecreasing.checked(true);
}

function resetToggles() {
  cbXIntercepts.checked(false);
  cbYIntercept.checked(false);
  cbTurningPts.checked(false);
  cbIncreasing.checked(false);
  cbDecreasing.checked(false);
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
