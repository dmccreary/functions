// Coordinate Plane Explorer MicroSim
// CANVAS_HEIGHT: 530
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

let points = [];
let gridRange = 10;
let showGrid = true;
let quizMode = false;
let targetPoint = null;
let feedback = '';
let feedbackTimer = 0;

let clearBtn, quizBtn;
let gridCheckbox;
let rangeSelect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  canvas.mousePressed(canvasClicked);

  clearBtn = createButton('Clear All');
  clearBtn.position(10, drawHeight + 5);
  clearBtn.mousePressed(() => { points = []; feedback = ''; targetPoint = null; });

  quizBtn = createButton('Quiz Mode');
  quizBtn.position(90, drawHeight + 5);
  quizBtn.mousePressed(toggleQuiz);

  gridCheckbox = createCheckbox('Show Grid', true);
  gridCheckbox.position(200, drawHeight + 8);
  gridCheckbox.changed(() => showGrid = gridCheckbox.checked());

  rangeSelect = createSelect();
  rangeSelect.position(10, drawHeight + 42);
  rangeSelect.option('±5', 5);
  rangeSelect.option('±10', 10);
  rangeSelect.option('±20', 20);
  rangeSelect.selected('±10');
  rangeSelect.changed(() => { gridRange = int(rangeSelect.value()); points = []; targetPoint = null; feedback = ''; });

  describe('Interactive coordinate plane where students click to place points and read coordinates', LABEL);
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
  text('Coordinate Plane Explorer', canvasWidth / 2, 8);

  let plotW = canvasWidth - 2 * margin;
  let plotH = drawHeight - 2 * margin - 20;
  let cx = canvasWidth / 2;
  let cy = margin + 20 + plotH / 2;

  // Grid
  if (showGrid) {
    stroke(220);
    strokeWeight(0.5);
    for (let i = -gridRange; i <= gridRange; i++) {
      let px = cx + (i / gridRange) * (plotW / 2);
      let py = cy - (i / gridRange) * (plotH / 2);
      line(px, cy - plotH / 2, px, cy + plotH / 2);
      line(cx - plotW / 2, py, cx + plotW / 2, py);
    }
  }

  // Axes
  stroke('black');
  strokeWeight(2);
  line(cx - plotW / 2, cy, cx + plotW / 2, cy); // x-axis
  line(cx, cy - plotH / 2, cx, cy + plotH / 2); // y-axis
  strokeWeight(1);

  // Axis labels
  noStroke();
  fill('black');
  textSize(14);
  textAlign(CENTER, TOP);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0) continue;
    let step = gridRange <= 5 ? 1 : (gridRange <= 10 ? 2 : 5);
    if (i % step !== 0) continue;
    let px = cx + (i / gridRange) * (plotW / 2);
    text(i, px, cy + 4);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0) continue;
    let step = gridRange <= 5 ? 1 : (gridRange <= 10 ? 2 : 5);
    if (i % step !== 0) continue;
    let py = cy - (i / gridRange) * (plotH / 2);
    text(i, cx - 6, py);
  }

  // Origin label
  textAlign(RIGHT, TOP);
  text('O', cx - 4, cy + 4);

  // Axis names
  textSize(14);
  textAlign(CENTER, CENTER);
  fill('darkblue');
  text('x', cx + plotW / 2 + 12, cy);
  text('y', cx, cy - plotH / 2 - 12);

  // Quadrant labels
  fill(200);
  textSize(24);
  textAlign(CENTER, CENTER);
  text('I', cx + plotW / 4, cy - plotH / 4);
  text('II', cx - plotW / 4, cy - plotH / 4);
  text('III', cx - plotW / 4, cy + plotH / 4);
  text('IV', cx + plotW / 4, cy + plotH / 4);

  // Plot placed points
  textSize(14);
  for (let pt of points) {
    let px = cx + (pt.x / gridRange) * (plotW / 2);
    let py = cy - (pt.y / gridRange) * (plotH / 2);
    fill('blue');
    noStroke();
    ellipse(px, py, 10, 10);
    fill('black');
    textAlign(LEFT, BOTTOM);
    noStroke();
    text('(' + nf(pt.x, 0, 1) + ', ' + nf(pt.y, 0, 1) + ')', px + 6, py - 4);
  }

  // Quiz target
  if (quizMode && targetPoint) {
    fill('red');
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    let targetLabel = 'Click: (' + targetPoint.x + ', ' + targetPoint.y + ')';
    fill(255, 240, 240, 220);
    stroke('red');
    strokeWeight(1);
    rectMode(CENTER);
    rect(canvasWidth / 2, margin + 16, textWidth(targetLabel) + 20, 26, 8);
    rectMode(CORNER);
    fill('red');
    noStroke();
    text(targetLabel, canvasWidth / 2, margin + 16);
  }

  // Feedback
  if (feedback && feedbackTimer > 0) {
    feedbackTimer--;
    fill(feedback.startsWith('Correct') ? 'green' : 'orangered');
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    text(feedback, canvasWidth / 2, drawHeight - 16);
  }

  // Control labels
  noStroke();
  fill('black');
  textSize(defaultTextSize);
  textAlign(LEFT, CENTER);
  text('Range:', 85, drawHeight + 55);
}

function canvasClicked() {
  if (mouseY > drawHeight || mouseY < margin + 20) return;
  let plotW = canvasWidth - 2 * margin;
  let plotH = drawHeight - 2 * margin - 20;
  let cx = canvasWidth / 2;
  let cy = margin + 20 + plotH / 2;

  let gx = ((mouseX - cx) / (plotW / 2)) * gridRange;
  let gy = -((mouseY - cy) / (plotH / 2)) * gridRange;

  // Snap to nearest 0.5
  gx = round(gx * 2) / 2;
  gy = round(gy * 2) / 2;

  if (abs(gx) > gridRange || abs(gy) > gridRange) return;

  points.push({ x: gx, y: gy });

  if (quizMode && targetPoint) {
    let dist = sqrt((gx - targetPoint.x) ** 2 + (gy - targetPoint.y) ** 2);
    if (dist < 1) {
      feedback = 'Correct!';
      feedbackTimer = 90;
      setTimeout(generateTarget, 1000);
    } else {
      feedback = 'Try again (distance: ' + nf(dist, 0, 1) + ')';
      feedbackTimer = 90;
    }
  }
}

function toggleQuiz() {
  quizMode = !quizMode;
  quizBtn.html(quizMode ? 'Free Mode' : 'Quiz Mode');
  if (quizMode) {
    generateTarget();
  } else {
    targetPoint = null;
    feedback = '';
  }
}

function generateTarget() {
  let step = gridRange <= 5 ? 1 : (gridRange <= 10 ? 1 : 2);
  targetPoint = {
    x: floor(random(-gridRange + 1, gridRange)) * step / step,
    y: floor(random(-gridRange + 1, gridRange)) * step / step
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
