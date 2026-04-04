// Function Feature Identifier MicroSim
// CANVAS_HEIGHT: 500
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 40;
let defaultTextSize = 16;

let funcSelect, featureSelect;
let checkBtn, nextBtn;
let score = 0;
let total = 0;
let markers = [];
let feedback = '';
let feedbackTimer = 0;
let feedbackColor;
let gridRange = 6;
let funcIndex = 0;

let functionNames = [
  'x² − 4',
  '2x + 1',
  '−x² + 2x + 3',
  'x³ − 3x',
  '|x − 2| − 1',
  '0.5(x−1)(x+3)'
];

// Correct answers for each function
let correctAnswers = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  canvas.mousePressed(canvasClicked);
  textSize(defaultTextSize);

  buildAnswers();

  // Function dropdown
  funcSelect = createSelect();
  funcSelect.position(10, drawHeight + 8);
  for (let fn of functionNames) {
    funcSelect.option(fn);
  }
  funcSelect.changed(() => { markers = []; feedback = ''; });

  // Feature type dropdown
  featureSelect = createSelect();
  featureSelect.position(200, drawHeight + 8);
  featureSelect.option('y-intercept');
  featureSelect.option('x-intercept');
  featureSelect.option('maximum');
  featureSelect.option('minimum');
  featureSelect.option('inflection');

  // Buttons
  checkBtn = createButton('Check Answers');
  checkBtn.position(10, drawHeight + 40);
  checkBtn.mousePressed(checkAnswers);

  nextBtn = createButton('Next Function');
  nextBtn.position(130, drawHeight + 40);
  nextBtn.mousePressed(nextFunction);

  describe('Interactive function graph where students click to identify key features', LABEL);
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
  text('Function Feature Identifier', canvasWidth / 2, 8);

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

  // Plot function
  let fname = funcSelect.value();
  stroke('black');
  strokeWeight(2);
  noFill();
  beginShape();
  for (let px = plotL; px <= plotR; px++) {
    let x = map(px, plotL, plotR, -gridRange, gridRange);
    let y = evalFunc(fname, x);
    if (y !== null && abs(y) < 50) {
      let py = map(y, -gridRange, gridRange, plotB, plotT);
      if (py >= plotT - 10 && py <= plotB + 10) {
        vertex(px, py);
      }
    }
  }
  endShape();

  // Draw student markers
  for (let m of markers) {
    let px = map(m.x, -gridRange, gridRange, plotL, plotR);
    let py = map(m.y, -gridRange, gridRange, plotB, plotT);

    // Color by feature type
    let c = getFeatureColor(m.type);
    if (m.status === 'correct') {
      fill(0, 200, 0);
    } else if (m.status === 'wrong') {
      fill(255, 0, 0);
    } else {
      fill(c);
    }
    noStroke();
    ellipse(px, py, 14, 14);

    // Label
    fill('black');
    textSize(10);
    textAlign(CENTER, BOTTOM);
    noStroke();
    text(m.type, px, py - 8);
  }

  // Instructions
  noStroke();
  fill(100);
  textSize(12);
  textAlign(LEFT, TOP);
  text('Select feature type, then click on graph to place marker', plotL, plotT - 14);

  // Score display
  noStroke();
  fill('black');
  textSize(14);
  textAlign(RIGHT, TOP);
  text('Score: ' + score + '/' + total, plotR, plotT - 14);

  // Current feature selection indicator
  let selFeature = featureSelect.value();
  let fc = getFeatureColor(selFeature);
  fill(fc);
  noStroke();
  ellipse(canvasWidth - 60, drawHeight + 16, 12, 12);
  fill('black');
  textSize(11);
  textAlign(LEFT, CENTER);
  noStroke();
  text('Placing: ' + selFeature, 200, drawHeight + 52);

  // Feedback
  if (feedback && feedbackTimer > 0) {
    feedbackTimer--;
    noStroke();
    fill(feedbackColor);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(feedback, canvasWidth / 2, drawHeight - 10);
  }

  // Score in control area
  noStroke();
  fill('black');
  textSize(13);
  textAlign(RIGHT, CENTER);
  text('Score: ' + score + '/' + total, canvasWidth - 15, drawHeight + 50);
}

function canvasClicked() {
  if (mouseY > drawHeight || mouseY < margin + 20) return;

  let plotL = margin;
  let plotR = canvasWidth - margin;
  let plotT = margin + 20;
  let plotB = drawHeight - 20;

  let gx = map(mouseX, plotL, plotR, -gridRange, gridRange);
  let gy = map(mouseY, plotB, plotT, -gridRange, gridRange);

  // Snap to nearest 0.25
  gx = round(gx * 4) / 4;
  gy = round(gy * 4) / 4;

  if (abs(gx) > gridRange || abs(gy) > gridRange) return;

  let featureType = featureSelect.value();

  markers.push({
    x: gx,
    y: gy,
    type: featureType,
    status: 'pending'
  });
}

function checkAnswers() {
  let fname = funcSelect.value();
  let answers = correctAnswers[fname];
  if (!answers) return;

  let correct = 0;
  let checked = 0;

  for (let m of markers) {
    if (m.status !== 'pending') continue;
    checked++;
    let matched = false;

    if (answers[m.type]) {
      for (let ans of answers[m.type]) {
        let dx = abs(m.x - ans.x);
        let dy = abs(m.y - ans.y);
        if (dx < 0.6 && dy < 0.6) {
          matched = true;
          break;
        }
      }
    }

    if (matched) {
      m.status = 'correct';
      correct++;
    } else {
      m.status = 'wrong';
    }
  }

  total += checked;
  score += correct;

  if (checked === 0) {
    feedback = 'Place some markers first!';
    feedbackColor = color(150);
  } else if (correct === checked) {
    feedback = 'All correct!';
    feedbackColor = color(0, 160, 0);
  } else {
    feedback = correct + '/' + checked + ' correct';
    feedbackColor = color(200, 100, 0);
  }
  feedbackTimer = 120;
}

function nextFunction() {
  funcIndex = (funcIndex + 1) % functionNames.length;
  funcSelect.selected(functionNames[funcIndex]);
  markers = [];
  feedback = '';
}

function getFeatureColor(type) {
  switch (type) {
    case 'y-intercept': return color(150, 0, 200);
    case 'x-intercept': return color(0, 100, 255);
    case 'maximum': return color(255, 140, 0);
    case 'minimum': return color(0, 180, 180);
    case 'inflection': return color(200, 0, 100);
    default: return color(100);
  }
}

function evalFunc(name, x) {
  switch (name) {
    case 'x² − 4':
      return x * x - 4;
    case '2x + 1':
      return 2 * x + 1;
    case '−x² + 2x + 3':
      return -x * x + 2 * x + 3;
    case 'x³ − 3x':
      return x * x * x - 3 * x;
    case '|x − 2| − 1':
      return abs(x - 2) - 1;
    case '0.5(x−1)(x+3)':
      return 0.5 * (x - 1) * (x + 3);
    default:
      return null;
  }
}

function buildAnswers() {
  correctAnswers = {
    'x² − 4': {
      'y-intercept': [{ x: 0, y: -4 }],
      'x-intercept': [{ x: -2, y: 0 }, { x: 2, y: 0 }],
      'minimum': [{ x: 0, y: -4 }],
      'maximum': [],
      'inflection': []
    },
    '2x + 1': {
      'y-intercept': [{ x: 0, y: 1 }],
      'x-intercept': [{ x: -0.5, y: 0 }],
      'minimum': [],
      'maximum': [],
      'inflection': []
    },
    '−x² + 2x + 3': {
      'y-intercept': [{ x: 0, y: 3 }],
      'x-intercept': [{ x: -1, y: 0 }, { x: 3, y: 0 }],
      'maximum': [{ x: 1, y: 4 }],
      'minimum': [],
      'inflection': []
    },
    'x³ − 3x': {
      'y-intercept': [{ x: 0, y: 0 }],
      'x-intercept': [{ x: -1.73, y: 0 }, { x: 0, y: 0 }, { x: 1.73, y: 0 }],
      'maximum': [{ x: -1, y: 2 }],
      'minimum': [{ x: 1, y: -2 }],
      'inflection': [{ x: 0, y: 0 }]
    },
    '|x − 2| − 1': {
      'y-intercept': [{ x: 0, y: 1 }],
      'x-intercept': [{ x: 1, y: 0 }, { x: 3, y: 0 }],
      'minimum': [{ x: 2, y: -1 }],
      'maximum': [],
      'inflection': []
    },
    '0.5(x−1)(x+3)': {
      'y-intercept': [{ x: 0, y: -1.5 }],
      'x-intercept': [{ x: 1, y: 0 }, { x: -3, y: 0 }],
      'minimum': [{ x: -1, y: -2 }],
      'maximum': [],
      'inflection': []
    }
  };
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
