// Function Property Classifier MicroSim
// CANVAS_HEIGHT: 650
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 270;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

let checkBtn, nextBtn;
let contCheckbox, discCheckbox;
let boundedCheckbox, unboundedCheckbox;
let constCheckbox, identCheckbox, otherCheckbox;
let feedback = '';
let feedbackColor = 'black';
let feedbackTimer = 0;
let currentIndex = 0;
let score = 0;
let attempted = 0;

let functionBank = [
  {
    name: 'f(x) = 3',
    answers: { type: 'continuous', bounded: 'bounded', category: 'constant' },
    drawFn: function(plotLeft, plotRight, plotTop, plotBottom, range) {
      stroke(30, 60, 180);
      strokeWeight(2.5);
      let y = map(3, -range, range, plotBottom, plotTop);
      if (y >= plotTop && y <= plotBottom) {
        line(plotLeft, y, plotRight, y);
      }
      // Label
      noStroke();
      fill(30, 60, 180);
      textSize(14);
      textAlign(LEFT, BOTTOM);
      text('f(x) = 3', plotLeft + 10, y - 5);
    }
  },
  {
    name: 'f(x) = x',
    answers: { type: 'continuous', bounded: 'unbounded', category: 'identity' },
    drawFn: function(plotLeft, plotRight, plotTop, plotBottom, range) {
      stroke(30, 60, 180);
      strokeWeight(2.5);
      let x1 = map(-range, -range, range, plotLeft, plotRight);
      let y1 = map(-range, -range, range, plotBottom, plotTop);
      let x2 = map(range, -range, range, plotLeft, plotRight);
      let y2 = map(range, -range, range, plotBottom, plotTop);
      line(x1, y1, x2, y2);
      noStroke();
      fill(30, 60, 180);
      textSize(14);
      textAlign(LEFT, BOTTOM);
      text('f(x) = x', plotRight - 70, plotTop + 20);
    }
  },
  {
    name: 'f(x) = x²',
    answers: { type: 'continuous', bounded: 'unbounded', category: 'other' },
    drawFn: function(plotLeft, plotRight, plotTop, plotBottom, range) {
      stroke(30, 60, 180);
      strokeWeight(2.5);
      noFill();
      beginShape();
      for (let px = plotLeft; px <= plotRight; px += 2) {
        let xv = map(px, plotLeft, plotRight, -range, range);
        let yv = xv * xv;
        let py = map(yv, -range, range, plotBottom, plotTop);
        py = constrain(py, plotTop - 5, plotBottom + 5);
        vertex(px, py);
      }
      endShape();
      noStroke();
      fill(30, 60, 180);
      textSize(14);
      textAlign(CENTER, TOP);
      let labelY = map(0, -range, range, plotBottom, plotTop);
      text('f(x) = x²', plotLeft + plotRight >> 1, labelY - 20);
    }
  },
  {
    name: 'Discrete Points',
    answers: { type: 'discrete', bounded: 'bounded', category: 'other' },
    points: [
      { x: -3, y: 1 }, { x: -1, y: 4 }, { x: 0, y: 2 },
      { x: 2, y: -1 }, { x: 4, y: 3 }, { x: 5, y: 0 }
    ],
    drawFn: function(plotLeft, plotRight, plotTop, plotBottom, range) {
      let pts = functionBank[3].points;
      for (let p of pts) {
        let px = map(p.x, -range, range, plotLeft, plotRight);
        let py = map(p.y, -range, range, plotBottom, plotTop);
        fill(30, 60, 180);
        noStroke();
        ellipse(px, py, 12, 12);
        fill(255);
        textSize(9);
        textAlign(CENTER, CENTER);
        text('(' + p.x + ',' + p.y + ')', px, py - 12);
      }
      noStroke();
      fill(30, 60, 180);
      textSize(14);
      textAlign(LEFT, TOP);
      text('Discrete Points', plotLeft + 10, plotTop + 10);
    }
  },
  {
    name: 'f(x) = −2',
    answers: { type: 'continuous', bounded: 'bounded', category: 'constant' },
    drawFn: function(plotLeft, plotRight, plotTop, plotBottom, range) {
      stroke(30, 60, 180);
      strokeWeight(2.5);
      let y = map(-2, -range, range, plotBottom, plotTop);
      if (y >= plotTop && y <= plotBottom) {
        line(plotLeft, y, plotRight, y);
      }
      noStroke();
      fill(30, 60, 180);
      textSize(14);
      textAlign(LEFT, TOP);
      text('f(x) = −2', plotLeft + 10, y + 5);
    }
  },
  {
    name: 'Step Function',
    answers: { type: 'discrete', bounded: 'bounded', category: 'other' },
    drawFn: function(plotLeft, plotRight, plotTop, plotBottom, range) {
      stroke(30, 60, 180);
      strokeWeight(2.5);
      // floor function style steps
      let steps = [
        { xMin: -6, xMax: -4, y: -2 },
        { xMin: -4, xMax: -2, y: -1 },
        { xMin: -2, xMax: 0, y: 0 },
        { xMin: 0, xMax: 2, y: 1 },
        { xMin: 2, xMax: 4, y: 2 },
        { xMin: 4, xMax: 6, y: 3 }
      ];
      for (let s of steps) {
        let px1 = map(s.xMin, -range, range, plotLeft, plotRight);
        let px2 = map(s.xMax, -range, range, plotLeft, plotRight);
        let py = map(s.y, -range, range, plotBottom, plotTop);
        line(px1, py, px2, py);
        // Open circle at right
        fill('aliceblue');
        stroke(30, 60, 180);
        strokeWeight(2);
        ellipse(px2, py, 8, 8);
        // Closed circle at left
        fill(30, 60, 180);
        noStroke();
        ellipse(px1, py, 8, 8);
        stroke(30, 60, 180);
        strokeWeight(2.5);
      }
      noStroke();
      fill(30, 60, 180);
      textSize(14);
      textAlign(LEFT, TOP);
      text('Step Function', plotLeft + 10, plotTop + 10);
    }
  }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  let rowY = drawHeight + 15;
  let col1 = 10;
  let col2 = canvasWidth * 0.35;
  let col3 = canvasWidth * 0.65;

  // Type checkboxes (radio-like)
  contCheckbox = createCheckbox('Continuous', false);
  contCheckbox.position(col1, rowY);
  contCheckbox.changed(() => { if (contCheckbox.checked()) discCheckbox.checked(false); });

  discCheckbox = createCheckbox('Discrete', false);
  discCheckbox.position(col1 + 120, rowY);
  discCheckbox.changed(() => { if (discCheckbox.checked()) contCheckbox.checked(false); });

  rowY += 32;

  // Bounded checkboxes (radio-like)
  boundedCheckbox = createCheckbox('Bounded', false);
  boundedCheckbox.position(col1, rowY);
  boundedCheckbox.changed(() => { if (boundedCheckbox.checked()) unboundedCheckbox.checked(false); });

  unboundedCheckbox = createCheckbox('Unbounded', false);
  unboundedCheckbox.position(col1 + 120, rowY);
  unboundedCheckbox.changed(() => { if (unboundedCheckbox.checked()) boundedCheckbox.checked(false); });

  rowY += 32;

  // Category checkboxes (radio-like)
  constCheckbox = createCheckbox('Constant', false);
  constCheckbox.position(col1, rowY);
  constCheckbox.changed(() => {
    if (constCheckbox.checked()) { identCheckbox.checked(false); otherCheckbox.checked(false); }
  });

  identCheckbox = createCheckbox('Identity', false);
  identCheckbox.position(col1 + 110, rowY);
  identCheckbox.changed(() => {
    if (identCheckbox.checked()) { constCheckbox.checked(false); otherCheckbox.checked(false); }
  });

  otherCheckbox = createCheckbox('Other', false);
  otherCheckbox.position(col1 + 210, rowY);
  otherCheckbox.changed(() => {
    if (otherCheckbox.checked()) { constCheckbox.checked(false); identCheckbox.checked(false); }
  });

  rowY += 38;

  checkBtn = createButton('Check Answer');
  checkBtn.position(col1, rowY);
  checkBtn.mousePressed(checkAnswer);

  nextBtn = createButton('Next Function');
  nextBtn.position(130, rowY);
  nextBtn.mousePressed(nextFunction);

  describe('Function property classifier quiz with graph display and checkboxes for classification', LABEL);
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

  let f = functionBank[currentIndex];

  // Title
  fill('black');
  noStroke();
  textSize(18);
  textAlign(CENTER, TOP);
  text('Function Property Classifier', canvasWidth / 2, 8);

  // Function name
  textSize(16);
  fill(30, 60, 160);
  textAlign(CENTER, TOP);
  text('Classify: ' + f.name, canvasWidth / 2, 32);

  // Plot area
  let plotLeft = margin + 35;
  let plotRight = canvasWidth - margin - 10;
  let plotTop = 55;
  let plotBottom = drawHeight - 20;
  let plotW = plotRight - plotLeft;
  let plotH = plotBottom - plotTop;
  let range = 8;
  let pcx = plotLeft + plotW / 2;
  let pcy = plotTop + plotH / 2;

  // Grid
  stroke(220);
  strokeWeight(0.5);
  for (let v = -range; v <= range; v++) {
    let px = map(v, -range, range, plotLeft, plotRight);
    let py = map(v, -range, range, plotBottom, plotTop);
    line(px, plotTop, px, plotBottom);
    line(plotLeft, py, plotRight, py);
  }

  // Axes
  stroke(80);
  strokeWeight(1.5);
  line(plotLeft, pcy, plotRight, pcy);
  line(pcx, plotTop, pcx, plotBottom);

  // Axis tick labels
  noStroke();
  fill(100);
  textSize(10);
  textAlign(CENTER, TOP);
  for (let v = -range; v <= range; v += 2) {
    if (v === 0) continue;
    let px = map(v, -range, range, plotLeft, plotRight);
    text(v, px, pcy + 3);
  }
  textAlign(RIGHT, CENTER);
  for (let v = -range; v <= range; v += 2) {
    if (v === 0) continue;
    let py = map(v, -range, range, plotBottom, plotTop);
    text(v, pcx - 4, py);
  }

  // Draw function
  f.drawFn(plotLeft, plotRight, plotTop, plotBottom, range);

  // Score display
  noStroke();
  fill(60);
  textSize(14);
  textAlign(RIGHT, TOP);
  text('Score: ' + score + '/' + attempted, canvasWidth - margin, 8);

  // Progress
  textSize(12);
  fill(120);
  text('Function ' + (currentIndex + 1) + ' of ' + functionBank.length, canvasWidth - margin, 28);

  // Control area labels
  noStroke();
  textSize(13);
  textStyle(BOLD);
  fill(60);
  textAlign(LEFT, CENTER);

  let labelY = drawHeight + 10;
  text('Type:', canvasWidth - 90, labelY + 5);
  text('Bounds:', canvasWidth - 90, labelY + 37);
  text('Class:', canvasWidth - 90, labelY + 69);
  textStyle(NORMAL);

  // Feedback
  if (feedbackTimer > 0) {
    feedbackTimer--;
    fill(feedbackColor);
    textSize(15);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(feedback, canvasWidth / 2, drawHeight + controlHeight - 38);
    textStyle(NORMAL);
  }

  // Question number at bottom
  noStroke();
  fill(150);
  textSize(11);
  textAlign(CENTER, BOTTOM);
  text('Select one option from each row, then click Check Answer',
    canvasWidth / 2, drawHeight + controlHeight - 8);
}

function checkAnswer() {
  let f = functionBank[currentIndex];
  let correct = true;
  let userType = contCheckbox.checked() ? 'continuous' : (discCheckbox.checked() ? 'discrete' : null);
  let userBounded = boundedCheckbox.checked() ? 'bounded' : (unboundedCheckbox.checked() ? 'unbounded' : null);
  let userCategory = constCheckbox.checked() ? 'constant' :
    (identCheckbox.checked() ? 'identity' : (otherCheckbox.checked() ? 'other' : null));

  if (!userType || !userBounded || !userCategory) {
    feedback = 'Please select one option from each row!';
    feedbackColor = 'orange';
    feedbackTimer = 120;
    return;
  }

  let wrong = [];
  if (userType !== f.answers.type) {
    correct = false;
    wrong.push('Type should be ' + f.answers.type);
  }
  if (userBounded !== f.answers.bounded) {
    correct = false;
    wrong.push('Bounds should be ' + f.answers.bounded);
  }
  if (userCategory !== f.answers.category) {
    correct = false;
    wrong.push('Class should be ' + f.answers.category);
  }

  attempted++;
  if (correct) {
    score++;
    feedback = 'Correct! Well done!';
    feedbackColor = 'green';
  } else {
    feedback = 'Not quite: ' + wrong.join(', ');
    feedbackColor = 'red';
  }
  feedbackTimer = 180;
}

function nextFunction() {
  currentIndex = (currentIndex + 1) % functionBank.length;
  resetCheckboxes();
  feedback = '';
  feedbackTimer = 0;
}

function resetCheckboxes() {
  contCheckbox.checked(false);
  discCheckbox.checked(false);
  boundedCheckbox.checked(false);
  unboundedCheckbox.checked(false);
  constCheckbox.checked(false);
  identCheckbox.checked(false);
  otherCheckbox.checked(false);
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
