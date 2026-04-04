// Linear Model Builder MicroSim
// CANVAS_HEIGHT: 520
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 120;
let canvasHeight = drawHeight + controlHeight;
let margin = 30;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

let gridRange = 10;
let scenarioSelect;
let mSlider, cSlider, xPredictSlider;
let checkBtn;
let score = 0;
let attempts = 0;
let feedback = '';
let feedbackTimer = 0;
let feedbackColor = 'black';

// Scenarios: { label, description, units, m, c, xLabel, yLabel, xMax }
let scenarios = {
  'Taxi Fare': {
    description: 'A taxi charges a flat fee plus a rate per km.',
    units: '$/km',
    m: 2.5,
    c: 3,
    xLabel: 'Distance (km)',
    yLabel: 'Cost ($)',
    xMax: 10
  },
  'Phone Plan': {
    description: 'A phone plan has a monthly fee plus a cost per GB.',
    units: '$/GB',
    m: 5,
    c: 20,
    xLabel: 'Data (GB)',
    yLabel: 'Cost ($)',
    xMax: 10
  },
  "Plumber's Bill": {
    description: 'A plumber charges a call-out fee plus an hourly rate.',
    units: '$/hr',
    m: 40,
    c: 60,
    xLabel: 'Hours',
    yLabel: 'Cost ($)',
    xMax: 8
  },
  'Savings': {
    description: 'You save a fixed amount each week on top of initial savings.',
    units: '$/week',
    m: 15,
    c: 50,
    xLabel: 'Weeks',
    yLabel: 'Savings ($)',
    xMax: 10
  }
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Scenario dropdown
  scenarioSelect = createSelect();
  scenarioSelect.position(sliderLeftMargin, drawHeight + 6);
  scenarioSelect.option('Taxi Fare');
  scenarioSelect.option('Phone Plan');
  scenarioSelect.option("Plumber's Bill");
  scenarioSelect.option('Savings');
  scenarioSelect.selected('Taxi Fare');
  scenarioSelect.changed(() => { feedback = ''; feedbackTimer = 0; });

  // Gradient slider
  mSlider = createSlider(0, 50, 1, 0.5);
  mSlider.position(sliderLeftMargin, drawHeight + 30);
  mSlider.size(canvasWidth - sliderLeftMargin - 20);

  // y-intercept slider
  cSlider = createSlider(0, 100, 0, 1);
  cSlider.position(sliderLeftMargin, drawHeight + 54);
  cSlider.size(canvasWidth - sliderLeftMargin - 20);

  // Predict x slider
  xPredictSlider = createSlider(0, 10, 5, 0.5);
  xPredictSlider.position(sliderLeftMargin, drawHeight + 78);
  xPredictSlider.size(canvasWidth - sliderLeftMargin - 20);

  // Check Answer button
  checkBtn = createButton('Check Answer');
  checkBtn.position(10, drawHeight + 100);
  checkBtn.mousePressed(checkAnswer);

  describe('Linear model builder where students match real-world scenarios to y=mx+c equations', LABEL);
}

function draw() {
  updateCanvasSize();
  mSlider.size(canvasWidth - sliderLeftMargin - 20);
  cSlider.size(canvasWidth - sliderLeftMargin - 20);
  xPredictSlider.size(canvasWidth - sliderLeftMargin - 20);

  let scenarioName = scenarioSelect.value();
  let sc = scenarios[scenarioName];
  let m = mSlider.value();
  let c = cSlider.value();
  let xPred = xPredictSlider.value();

  // Compute y range based on scenario
  let yMax = sc.m * sc.xMax + sc.c;
  // Round up to a nice number
  yMax = ceil(yMax / 10) * 10;
  if (yMax < 10) yMax = 10;
  let xMax = sc.xMax;

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
  text('Linear Model Builder', canvasWidth / 2, 5);

  // Scenario description
  textSize(13);
  textAlign(CENTER, TOP);
  fill(60);
  noStroke();
  text(sc.description, canvasWidth / 2, 28);

  // Score
  textSize(13);
  textAlign(RIGHT, TOP);
  fill('darkgreen');
  noStroke();
  text('Score: ' + score + '/' + attempts, canvasWidth - 12, 5);

  // Plot area
  let plotLeft = margin + 40;
  let plotRight = canvasWidth - margin;
  let plotTop = 52;
  let plotBottom = drawHeight - margin;
  let plotW = plotRight - plotLeft;
  let plotH = plotBottom - plotTop;

  function toPixelX(gx) { return plotLeft + (gx / xMax) * plotW; }
  function toPixelY(gy) { return plotBottom - (gy / yMax) * plotH; }

  // Grid lines
  stroke(220);
  strokeWeight(0.5);
  let xStep = xMax <= 5 ? 1 : 2;
  for (let i = 0; i <= xMax; i += xStep) {
    let px = toPixelX(i);
    line(px, plotTop, px, plotBottom);
  }
  let yStep = yMax <= 50 ? 5 : (yMax <= 100 ? 10 : 20);
  for (let i = 0; i <= yMax; i += yStep) {
    let py = toPixelY(i);
    line(plotLeft, py, plotRight, py);
  }

  // Axes
  stroke('black');
  strokeWeight(2);
  line(plotLeft, plotBottom, plotRight, plotBottom);
  line(plotLeft, plotTop, plotLeft, plotBottom);
  strokeWeight(1);

  // Axis labels
  noStroke();
  fill('black');
  textSize(11);
  textAlign(CENTER, TOP);
  for (let i = 0; i <= xMax; i += xStep) {
    text(i, toPixelX(i), plotBottom + 4);
  }
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= yMax; i += yStep) {
    text(i, plotLeft - 5, toPixelY(i));
  }

  // Axis names
  textSize(13);
  fill('darkblue');
  noStroke();
  textAlign(CENTER, TOP);
  text(sc.xLabel, (plotLeft + plotRight) / 2, plotBottom + 18);
  push();
  translate(14, (plotTop + plotBottom) / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, BOTTOM);
  text(sc.yLabel, 0, 0);
  pop();

  // Draw student's line
  let sy1 = m * 0 + c;
  let sy2 = m * xMax + c;
  stroke('blue');
  strokeWeight(2.5);
  // Clip to plot area
  let py1 = toPixelY(sy1);
  let py2 = toPixelY(sy2);
  let px1 = toPixelX(0);
  let px2 = toPixelX(xMax);
  // Simple clip: just draw within bounds
  line(
    constrain(px1, plotLeft, plotRight),
    constrain(py1, plotTop, plotBottom),
    constrain(px2, plotLeft, plotRight),
    constrain(py2, plotTop, plotBottom)
  );
  strokeWeight(1);

  // Draw correct line faintly if feedback shows correct
  if (feedbackTimer > 0 && feedback.startsWith('Correct')) {
    stroke(0, 200, 0, 120);
    strokeWeight(2);
    let cy1 = sc.m * 0 + sc.c;
    let cy2 = sc.m * xMax + sc.c;
    line(toPixelX(0), toPixelY(cy1), toPixelX(xMax), toPixelY(cy2));
    strokeWeight(1);
  }

  // Prediction point
  let yPred = m * xPred + c;
  if (xPred <= xMax && yPred >= 0 && yPred <= yMax) {
    // Dashed lines to axes
    stroke(150, 0, 150);
    strokeWeight(1);
    drawingContext.setLineDash([4, 4]);
    line(toPixelX(xPred), toPixelY(yPred), toPixelX(xPred), plotBottom);
    line(toPixelX(xPred), toPixelY(yPred), plotLeft, toPixelY(yPred));
    drawingContext.setLineDash([]);

    fill(150, 0, 150);
    noStroke();
    ellipse(toPixelX(xPred), toPixelY(yPred), 10, 10);

    // Prediction label
    textSize(12);
    textAlign(LEFT, BOTTOM);
    noStroke();
    let predStr = 'Predict: y(' + nf(xPred, 0, 1) + ') = ' + nf(yPred, 0, 1);
    fill(255, 255, 255, 210);
    rect(toPixelX(xPred) + 8, toPixelY(yPred) - 18, textWidth(predStr) + 8, 18, 4);
    fill(150, 0, 150);
    noStroke();
    text(predStr, toPixelX(xPred) + 12, toPixelY(yPred) - 2);
  }

  // y-intercept point
  if (c >= 0 && c <= yMax) {
    fill('blue');
    noStroke();
    ellipse(toPixelX(0), toPixelY(c), 8, 8);
  }

  // Equation display
  noStroke();
  fill('black');
  textSize(14);
  textAlign(LEFT, TOP);
  let eqStr = 'y = ' + nf(m, 0, 1) + 'x + ' + nf(c, 0, 0);
  fill(255, 255, 255, 200);
  noStroke();
  rect(plotLeft + 6, plotTop + 4, textWidth(eqStr) + 10, 20, 4);
  fill('blue');
  noStroke();
  text(eqStr, plotLeft + 10, plotTop + 6);

  // Feedback
  if (feedbackTimer > 0) {
    feedbackTimer--;
    noStroke();
    fill(feedbackColor);
    textSize(15);
    textAlign(CENTER, BOTTOM);
    text(feedback, canvasWidth / 2, drawHeight - 4);
  }

  // Control labels
  noStroke();
  fill('black');
  textSize(13);
  textAlign(LEFT, CENTER);
  text('Scenario:', 10, drawHeight + 16);
  text('Gradient m: ' + nf(m, 0, 1), 10, drawHeight + 40);
  text('Intercept c: ' + nf(c, 0, 0), 10, drawHeight + 64);
  text('Predict x: ' + nf(xPred, 0, 1), 10, drawHeight + 88);
}

function checkAnswer() {
  let scenarioName = scenarioSelect.value();
  let sc = scenarios[scenarioName];
  let m = mSlider.value();
  let c = cSlider.value();

  attempts++;

  let mCorrect = abs(m - sc.m) < 0.6;
  let cCorrect = abs(c - sc.c) < 2;

  if (mCorrect && cCorrect) {
    feedback = 'Correct! y = ' + nf(sc.m, 0, 1) + 'x + ' + nf(sc.c, 0, 0);
    feedbackColor = 'green';
    score++;
  } else if (mCorrect) {
    feedback = 'Gradient is right! Check y-intercept (c = ' + nf(sc.c, 0, 0) + ')';
    feedbackColor = 'orange';
  } else if (cCorrect) {
    feedback = 'Intercept is right! Check gradient (m = ' + nf(sc.m, 0, 1) + ')';
    feedbackColor = 'orange';
  } else {
    feedback = 'Not quite. Answer: m = ' + nf(sc.m, 0, 1) + ', c = ' + nf(sc.c, 0, 0);
    feedbackColor = 'red';
  }
  feedbackTimer = 180;
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
