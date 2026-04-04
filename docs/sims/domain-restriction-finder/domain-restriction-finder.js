// Domain Restriction Finder MicroSim
// CANVAS_HEIGHT: 560
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 140;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

let funcSelect;
let showIntervalBtn, showSetBuilderBtn;
let showInterval = false;
let showSetBuilder = false;
let hoverPoint = null;

let functions = [
  {
    label: '1/x',
    excluded: [0],
    reasons: { 0: 'Division by zero: x = 0 makes the denominator zero' },
    interval: '(-∞, 0) ∪ (0, ∞)',
    setBuilder: '{x ∈ ℝ | x ≠ 0}',
    evalDomain: function(x) { return x !== 0; }
  },
  {
    label: '3/(x − 2)',
    excluded: [2],
    reasons: { 2: 'Division by zero: x = 2 makes (x − 2) = 0' },
    interval: '(-∞, 2) ∪ (2, ∞)',
    setBuilder: '{x ∈ ℝ | x ≠ 2}',
    evalDomain: function(x) { return x !== 2; }
  },
  {
    label: '√x',
    excluded: [],
    boundary: 0,
    leftExcluded: true,
    reasons: {},
    interval: '[0, ∞)',
    setBuilder: '{x ∈ ℝ | x ≥ 0}',
    evalDomain: function(x) { return x >= 0; }
  },
  {
    label: '√(x − 4)',
    excluded: [],
    boundary: 4,
    leftExcluded: true,
    reasons: {},
    interval: '[4, ∞)',
    setBuilder: '{x ∈ ℝ | x ≥ 4}',
    evalDomain: function(x) { return x >= 4; }
  },
  {
    label: '1/√(x − 1)',
    excluded: [1],
    boundary: 1,
    leftExcluded: true,
    strictBoundary: true,
    reasons: { 1: 'x = 1 gives √0 = 0 in the denominator (division by zero)' },
    interval: '(1, ∞)',
    setBuilder: '{x ∈ ℝ | x > 1}',
    evalDomain: function(x) { return x > 1; }
  },
  {
    label: '(x + 1)/(x² − 9)',
    excluded: [-3, 3],
    reasons: {
      '-3': 'x = −3 makes x² − 9 = 0 (factor: x + 3)',
      '3': 'x = 3 makes x² − 9 = 0 (factor: x − 3)'
    },
    interval: '(-∞, −3) ∪ (−3, 3) ∪ (3, ∞)',
    setBuilder: '{x ∈ ℝ | x ≠ −3, x ≠ 3}',
    evalDomain: function(x) { return x !== -3 && x !== 3; }
  }
];

let currentFunc = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  funcSelect = createSelect();
  funcSelect.position(120, drawHeight + 10);
  for (let f of functions) {
    funcSelect.option('f(x) = ' + f.label);
  }
  funcSelect.changed(() => {
    currentFunc = funcSelect.elt.selectedIndex;
    showInterval = false;
    showSetBuilder = false;
    hoverPoint = null;
  });

  showIntervalBtn = createButton('Show Interval Notation');
  showIntervalBtn.position(10, drawHeight + 45);
  showIntervalBtn.mousePressed(() => showInterval = !showInterval);

  showSetBuilderBtn = createButton('Show Set-Builder Notation');
  showSetBuilderBtn.position(210, drawHeight + 45);
  showSetBuilderBtn.mousePressed(() => showSetBuilder = !showSetBuilder);

  describe('Number line showing valid and excluded domain values for selected functions', LABEL);
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

  let f = functions[currentFunc];

  // Title
  fill('black');
  noStroke();
  textSize(18);
  textAlign(CENTER, TOP);
  text('Domain Restriction Finder', canvasWidth / 2, 8);

  // Function display
  textSize(22);
  fill(30, 60, 160);
  text('f(x) = ' + f.label, canvasWidth / 2, 40);

  // Number line
  let nlY = 180;
  let nlLeft = margin + 30;
  let nlRight = canvasWidth - margin - 30;
  let nlWidth = nlRight - nlLeft;
  let rangeMin = -10;
  let rangeMax = 10;

  // Draw domain shading
  noStroke();
  fill(100, 150, 255, 60);
  for (let px = nlLeft; px <= nlRight; px++) {
    let val = map(px, nlLeft, nlRight, rangeMin, rangeMax);
    if (f.evalDomain(val)) {
      rect(px, nlY - 15, 1, 30);
    }
  }

  // Number line axis
  stroke(60);
  strokeWeight(2);
  line(nlLeft - 10, nlY, nlRight + 10, nlY);

  // Arrow heads
  fill(60);
  noStroke();
  triangle(nlLeft - 10, nlY, nlLeft - 2, nlY - 5, nlLeft - 2, nlY + 5);
  triangle(nlRight + 10, nlY, nlRight + 2, nlY - 5, nlRight + 2, nlY + 5);

  // Tick marks and labels
  strokeWeight(1);
  textSize(12);
  textAlign(CENTER, TOP);
  for (let v = rangeMin; v <= rangeMax; v++) {
    let px = map(v, rangeMin, rangeMax, nlLeft, nlRight);
    stroke(100);
    line(px, nlY - 6, px, nlY + 6);
    noStroke();
    fill(60);
    text(v, px, nlY + 10);
  }

  // Draw excluded points (open circles)
  hoverPoint = null;
  for (let ex of f.excluded) {
    let px = map(ex, rangeMin, rangeMax, nlLeft, nlRight);
    stroke(220, 50, 50);
    strokeWeight(3);
    fill('aliceblue');
    ellipse(px, nlY, 16, 16);

    // Check hover
    if (dist(mouseX, mouseY, px, nlY) < 15) {
      hoverPoint = ex;
    }
  }

  // Boundary point for sqrt functions
  if (f.boundary !== undefined) {
    let bpx = map(f.boundary, rangeMin, rangeMax, nlLeft, nlRight);
    if (f.strictBoundary) {
      // Open circle at boundary
      stroke(220, 50, 50);
      strokeWeight(3);
      fill('aliceblue');
      ellipse(bpx, nlY, 16, 16);
    } else {
      // Closed circle at boundary
      stroke(50, 100, 220);
      strokeWeight(2);
      fill(50, 100, 220);
      ellipse(bpx, nlY, 12, 12);
    }

    // Shading indicator arrow
    noStroke();
    fill(80);
    textSize(13);
    textAlign(CENTER, BOTTOM);
    if (f.leftExcluded) {
      text('x < ' + f.boundary + ' is excluded', canvasWidth / 2, nlY - 30);
    }
  }

  // Hover tooltip
  if (hoverPoint !== null) {
    let reason = f.reasons[String(hoverPoint)];
    if (reason) {
      let px = map(hoverPoint, rangeMin, rangeMax, nlLeft, nlRight);
      let tooltipW = textWidth(reason) + 20;
      let tooltipX = constrain(px - tooltipW / 2, 5, canvasWidth - tooltipW - 5);
      fill(255, 255, 220);
      stroke(200, 150, 50);
      strokeWeight(1);
      rect(tooltipX, nlY - 65, tooltipW, 28, 5);
      noStroke();
      fill(120, 40, 0);
      textSize(12);
      textAlign(LEFT, CENTER);
      text(reason, tooltipX + 10, nlY - 51);
    }
  }

  // Domain summary section
  let summaryY = 270;
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);

  // Domain type explanation
  fill(60);
  textStyle(BOLD);
  text('Domain Analysis:', margin, summaryY);
  textStyle(NORMAL);

  textSize(13);
  fill(80);
  if (f.excluded.length > 0 && f.boundary !== undefined) {
    text('Excluded values: x = ' + f.excluded.join(', ') +
      ' (denominator = 0)', margin, summaryY + 25);
    text('Also requires expression under √ to be positive', margin, summaryY + 45);
  } else if (f.excluded.length > 0) {
    text('Excluded values: x = ' + f.excluded.join(', '), margin, summaryY + 25);
    text('These values make the denominator equal to zero.', margin, summaryY + 45);
  } else if (f.boundary !== undefined) {
    text('The expression under the square root must be ≥ 0.', margin, summaryY + 25);
    text('This requires x ≥ ' + f.boundary, margin, summaryY + 45);
  }

  // Show notations if toggled
  let notY = summaryY + 80;
  if (showInterval) {
    fill(0, 100, 0);
    textStyle(BOLD);
    textSize(14);
    text('Interval notation:', margin, notY);
    textStyle(NORMAL);
    textSize(16);
    fill(30, 60, 160);
    text(f.interval, margin, notY + 22);
    notY += 55;
  }

  if (showSetBuilder) {
    fill(0, 100, 0);
    textStyle(BOLD);
    textSize(14);
    text('Set-builder notation:', margin, notY);
    textStyle(NORMAL);
    textSize(16);
    fill(30, 60, 160);
    text(f.setBuilder, margin, notY + 22);
  }

  // Control area labels
  noStroke();
  fill('black');
  textSize(14);
  textAlign(LEFT, CENTER);
  text('Function:', 10, drawHeight + 22);
  textSize(12);
  fill(100);
  text('Hover over red circles for explanations', 10, drawHeight + 85);
  text('Toggle notation buttons to reveal answers', 10, drawHeight + 105);
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
