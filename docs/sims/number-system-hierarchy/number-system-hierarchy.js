// Number System Hierarchy MicroSim
// CANVAS_HEIGHT: 440
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 40;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

let filterSelect;
let hoverNumber = null;

// Sample numbers with classifications
let numbers = [
  { val: -3, label: '-3', type: 'integer', x: 0, y: 0 },
  { val: 0, label: '0', type: 'integer', x: 0, y: 0 },
  { val: 2, label: '2', type: 'integer', x: 0, y: 0 },
  { val: 0.5, label: '1/2', type: 'rational', x: 0, y: 0 },
  { val: -0.75, label: '-3/4', type: 'rational', x: 0, y: 0 },
  { val: 1.333, label: '1.3̄', type: 'rational', x: 0, y: 0 },
  { val: 1.414, label: '√2', type: 'irrational', x: 0, y: 0 },
  { val: 3.14159, label: 'π', type: 'irrational', x: 0, y: 0 },
  { val: -2.236, label: '-√5', type: 'irrational', x: 0, y: 0 }
];

let currentFilter = 'All';

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  filterSelect = createSelect();
  filterSelect.position(80, drawHeight + 8);
  filterSelect.option('All');
  filterSelect.option('Integers');
  filterSelect.option('Rationals');
  filterSelect.option('Irrationals');
  filterSelect.changed(() => currentFilter = filterSelect.value());

  describe('Nested number system hierarchy showing integers, rationals, irrationals within the reals', LABEL);
}

function draw() {
  updateCanvasSize();

  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill('black');
  noStroke();
  textSize(20);
  textAlign(CENTER, TOP);
  text('Number System Hierarchy', canvasWidth / 2, 8);

  let cx = canvasWidth / 2;
  let cy = 155;
  let maxW = canvasWidth - 60;

  // Draw nested ellipses (Reals > Rationals > Integers)
  noStroke();

  push();
  translate(0, 20); // Move down to create space for title
  // Reals (outermost) - orange
  fill(255, 200, 150, 100);
  stroke(200, 120, 50);
  strokeWeight(2);
  ellipse(cx, cy, maxW, 250);

  // Rationals - green (left-center)
  fill(150, 220, 150, 100);
  stroke(50, 150, 50);
  ellipse(cx - maxW * 0.12, cy, maxW * 0.55, 200);

  // Integers (innermost) - blue
  fill(150, 180, 255, 100);
  stroke(50, 80, 200);
  ellipse(cx - maxW * 0.18, cy, maxW * 0.28, 150);

  // Labels for sets
  noStroke();
  textSize(14);
  textAlign(CENTER, CENTER);

  fill(50, 80, 200);
  text('ℤ Integers', cx - maxW * 0.18, cy - 85);

  fill(50, 150, 50);
  text('ℚ Rationals', cx + maxW * 0.05, cy - 110);

  fill(200, 120, 50);
  text('ℝ Reals', cx + maxW * 0.32, cy - 130);

  // Irrational region label
  fill(180, 100, 30);
  textSize(12);
  text('Irrationals', cx + maxW * 0.28, cy + 30);

  // Position and draw numbers
  hoverNumber = null;
  textSize(15);
  let positions = getPositions(cx, cy, maxW);

  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    n.x = positions[i].x;
    n.y = positions[i].y;

    let show = currentFilter === 'All' ||
      (currentFilter === 'Integers' && n.type === 'integer') ||
      (currentFilter === 'Rationals' && (n.type === 'rational' || n.type === 'integer')) ||
      (currentFilter === 'Irrationals' && n.type === 'irrational');

    if (!show) continue;

    let d = dist(mouseX, mouseY, n.x, n.y);
    let isHover = d < 28;
    if (isHover) hoverNumber = n;

    // Dot
    noStroke();
    if (n.type === 'integer') fill(50, 80, 200);
    else if (n.type === 'rational') fill(50, 150, 50);
    else fill(200, 120, 50);

    ellipse(n.x, n.y, isHover ? 18 : 12);

    // Label
    fill('black');
    textAlign(CENTER, BOTTOM);
    noStroke();
    text(n.label, n.x, n.y - 10);
  }
  pop();

  // Hover tooltip
  if (hoverNumber) {
    let info = hoverNumber.label + ' ≈ ' + nf(hoverNumber.val, 0, 4);
    let classification = hoverNumber.type === 'integer' ? 'Integer (also Rational, Real)' :
      hoverNumber.type === 'rational' ? 'Rational (also Real)' : 'Irrational (Real)';

    let tw = max(textWidth(info), textWidth(classification)) + 20;
    let tx = constrain(mouseX, tw / 2 + 5, canvasWidth - tw / 2 - 5);
    let ty = mouseY - 50;

    fill(255, 255, 255, 230);
    stroke(150);
    strokeWeight(1);
    rectMode(CENTER);
    rect(tx, ty, tw, 44, 8);
    rectMode(CORNER);
    noStroke();
    fill('black');
    textSize(13);
    textAlign(CENTER, CENTER);
    text(info, tx, ty - 10);
    text(classification, tx, ty + 10);
  }

  // Number line and legend
  push();
  // use this to move the number line and legend down a bit to create more space from the nested ellipses
  translate(0, 20);
  let nlY = drawHeight - 70;
  let nlLeft = margin + 30;
  let nlRight = canvasWidth - margin - 30;

  stroke('black');
  strokeWeight(2);
  line(nlLeft, nlY, nlRight, nlY);
  // Arrowheads
  line(nlLeft, nlY, nlLeft + 8, nlY - 4);
  line(nlLeft, nlY, nlLeft + 8, nlY + 4);
  line(nlRight, nlY, nlRight - 8, nlY - 4);
  line(nlRight, nlY, nlRight - 8, nlY + 4);
  strokeWeight(1);

  // Tick marks
  noStroke();
  fill('black');
  textSize(12);
  textAlign(CENTER, TOP);
  for (let i = -5; i <= 5; i++) {
    let px = map(i, -5, 5, nlLeft + 10, nlRight - 10);
    stroke('black');
    line(px, nlY - 4, px, nlY + 4);
    noStroke();
    text(i, px, nlY + 6);
  }

  // Plot numbers on number line
  for (let n of numbers) {
    let show = currentFilter === 'All' ||
      (currentFilter === 'Integers' && n.type === 'integer') ||
      (currentFilter === 'Rationals' && (n.type === 'rational' || n.type === 'integer')) ||
      (currentFilter === 'Irrationals' && n.type === 'irrational');
    if (!show) continue;
    if (n.val < -5 || n.val > 5) continue;

    let px = map(n.val, -5, 5, nlLeft + 10, nlRight - 10);
    noStroke();
    if (n.type === 'integer') fill(50, 80, 200);
    else if (n.type === 'rational') fill(50, 150, 50);
    else fill(200, 120, 50);
    ellipse(px, nlY, 8);
  }

  // Legend
  noStroke();
  textSize(13);
  textAlign(LEFT, CENTER);
  let legY = drawHeight - 40;
  fill(50, 80, 200); ellipse(margin + 10, legY, 10); fill('black'); text('Integer', margin + 20, legY);
  fill(50, 150, 50); ellipse(margin + 90, legY, 10); fill('black'); text('Rational', margin + 100, legY);
  fill(200, 120, 50); ellipse(margin + 180, legY, 10); fill('black'); text('Irrational', margin + 190, legY);
  pop();

  // Control labels
  noStroke();
  fill('black');
  textSize(defaultTextSize);
  textAlign(LEFT, CENTER);
  text('Filter:', 10, drawHeight + 20);
  textSize(14);
  fill('gray');
  text('Hover over the points to see their properties', 200, drawHeight + 20);
}

function getPositions(cx, cy, maxW) {
  return [
    { x: cx - maxW * 0.22, y: cy - 30 },   // -3
    { x: cx - maxW * 0.18, y: cy + 10 },    // 0
    { x: cx - maxW * 0.12, y: cy + 40 },    // 2
    { x: cx + maxW * 0.02, y: cy - 20 },    // 1/2
    { x: cx - maxW * 0.02, y: cy + 50 },    // -3/4
    { x: cx + maxW * 0.08, y: cy + 20 },    // 1.3̄
    { x: cx + maxW * 0.28, y: cy - 30 },    // √2
    { x: cx + maxW * 0.32, y: cy + 10 },    // π
    { x: cx + maxW * 0.22, y: cy + 50 }     // -√5
  ];
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
