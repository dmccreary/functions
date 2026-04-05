// Exponential Growth & Decay Explorer MicroSim
// CANVAS_HEIGHT: 480
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 45;
let defaultTextSize = 16;
let sliderLeftMargin = 100;
let sliderWidth = 200;

let baseSlider;
let showRefCheckbox;
let showTableCheckbox;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  baseSlider = createSlider(0.1, 5, 2, 0.1);
  baseSlider.position(sliderLeftMargin, drawHeight + 8);
  baseSlider.size(sliderWidth);

  showRefCheckbox = createCheckbox('Show eˣ reference', false);
  showRefCheckbox.position(10, drawHeight + 38);

  showTableCheckbox = createCheckbox('Show table', false);
  showTableCheckbox.position(180, drawHeight + 38);

  describe('Interactive graph of f(x)=a^x exploring exponential growth and decay', LABEL);
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

  let a = baseSlider.value();
  let plotW = canvasWidth - 2 * margin;
  let plotH = drawHeight - 2 * margin;
  let cx = margin + plotW * 0.4; // shift origin left for better view of positive x
  let cy = drawHeight - margin - 30;
  let xRange = 5;
  let yMax = 10;

  // Helper: math to pixel
  let toPixelX = (x) => cx + (x / xRange) * (plotW * 0.6);
  let toPixelY = (y) => cy - (y / yMax) * (plotH - 20);

  // Grid
  stroke(230);
  strokeWeight(0.5);
  for (let i = -xRange; i <= xRange; i++) {
    let px = toPixelX(i);
    if (px >= margin && px <= canvasWidth - margin) {
      line(px, margin, px, cy + 20);
    }
  }
  for (let i = 0; i <= yMax; i += 2) {
    let py = toPixelY(i);
    if (py >= margin && py <= cy + 20) {
      line(margin, py, canvasWidth - margin, py);
    }
  }

  // Axes
  stroke('black');
  strokeWeight(2);
  line(margin, cy, canvasWidth - margin, cy); // x-axis
  line(cx, margin, cx, cy + 20); // y-axis
  strokeWeight(1);

  // Axis labels
  noStroke();
  fill('black');
  textSize(11);
  textAlign(CENTER, TOP);
  for (let i = -xRange; i <= xRange; i++) {
    if (i === 0) continue;
    let px = toPixelX(i);
    if (px >= margin && px <= canvasWidth - margin) {
      text(i, px, cy + 4);
    }
  }
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= yMax; i += 2) {
    if (i === 0) continue;
    let py = toPixelY(i);
    text(i, cx - 6, py);
  }

  // Horizontal asymptote y=0
  stroke('orange');
  strokeWeight(1);
  drawingContext.setLineDash([6, 4]);
  line(margin, cy, canvasWidth - margin, cy);
  drawingContext.setLineDash([]);
  noStroke();
  fill('orange');
  textSize(11);
  textAlign(LEFT, TOP);
  text('y = 0 (asymptote)', canvasWidth - margin - 100, cy + 4);

  // e^x reference
  if (showRefCheckbox.checked()) {
    stroke('gray');
    strokeWeight(1.5);
    noFill();
    beginShape();
    for (let px = margin; px <= canvasWidth - margin; px += 2) {
      let x = ((px - cx) / (plotW * 0.6)) * xRange;
      let y = exp(x);
      if (y > yMax * 1.5) continue;
      let py = toPixelY(y);
      if (py < margin - 10) continue;
      vertex(px, py);
    }
    endShape();
    noStroke();
    fill('gray');
    textSize(11);
    textAlign(LEFT, BOTTOM);
    text('eˣ', toPixelX(1.8), toPixelY(exp(1.8)) - 4);
  }

  // Draw f(x) = a^x
  stroke('blue');
  strokeWeight(2.5);
  noFill();
  beginShape();
  for (let px = margin; px <= canvasWidth - margin; px += 2) {
    let x = ((px - cx) / (plotW * 0.6)) * xRange;
    let y = pow(a, x);
    if (y > yMax * 1.5 || y < -0.5) continue;
    let py = toPixelY(y);
    if (py < margin - 10) continue;
    vertex(px, py);
  }
  endShape();

  // Y-intercept (0,1) marker
  let intPx = toPixelX(0);
  let intPy = toPixelY(1);
  fill('blue');
  noStroke();
  ellipse(intPx, intPy, 8, 8);
  fill('black');
  textSize(11);
  textAlign(LEFT, BOTTOM);
  noStroke();
  text('(0, 1)', intPx + 6, intPy - 2);

  // Title
  noStroke();
  fill('black');
  textStyle(BOLD);
  textSize(24);
  textAlign(CENTER, TOP);
  text('Exponential Growth and Decay Explorer', canvasWidth / 2, 8);
  textStyle(NORMAL);

  // Growth / Decay label
  noStroke();
  textSize(14);
  textAlign(CENTER, TOP);
  if (a > 1) {
    fill('green');
    text('Growth (a > 1)', canvasWidth / 2, 40);
  } else if (a < 1) {
    fill('red');
    text('Decay (0 < a < 1)', canvasWidth / 2, 40);
  } else {
    fill('black');
    text('Constant (a = 1)', canvasWidth / 2, 40);
  }

  // Current equation
  noStroke();
  fill('darkblue');
  textSize(15);
  textAlign(RIGHT, TOP);
  let baseStr = 'f(x) = ' + nf(a, 0, 1);
  let baseW = textWidth(baseStr);
  let expSize = 30;
  let totalW = baseW + textWidth('ˣ') * (expSize / 15);
  let eqStartX = canvasWidth / 2 - totalW / 2;
  textAlign(LEFT, TOP);
  text(baseStr, eqStartX, 58);
  textSize(expSize);
  text('ˣ', eqStartX + baseW, 52);

  // Table
  if (showTableCheckbox.checked()) {
    let tableX = canvasWidth - margin - 120;
    let tableY = 50;
    let rowH = 20;
    let colW = 60;

    fill('white');
    stroke('black');
    strokeWeight(1);
    rect(tableX, tableY, colW * 2, rowH * 8, 4);

    noStroke();
    fill('black');
    textSize(12);
    textAlign(CENTER, CENTER);

    // Header
    fill('lightgray');
    noStroke();
    rect(tableX, tableY, colW * 2, rowH);
    fill('black');
    noStroke();
    text('x', tableX + colW / 2, tableY + rowH / 2);
    text('f(x)', tableX + colW + colW / 2, tableY + rowH / 2);

    // Separator
    stroke('black');
    strokeWeight(0.5);
    line(tableX + colW, tableY, tableX + colW, tableY + rowH * 8);

    let xVals = [-2, -1, 0, 1, 2, 3];
    for (let i = 0; i < xVals.length; i++) {
      let row = i + 1;
      let yVal = pow(a, xVals[i]);
      noStroke();
      fill('black');
      textSize(11);
      text(xVals[i], tableX + colW / 2, tableY + row * rowH + rowH / 2);
      text(nf(yVal, 0, 2), tableX + colW + colW / 2, tableY + row * rowH + rowH / 2);

      // Row separator
      stroke(220);
      strokeWeight(0.5);
      line(tableX, tableY + row * rowH, tableX + colW * 2, tableY + row * rowH);
    }
  }

  // Axis names
  noStroke();
  fill('black');
  textSize(13);
  textAlign(CENTER, CENTER);
  text('x', canvasWidth - margin + 12, cy);
  text('y', cx, margin - 10);

  // Control labels
  noStroke();
  fill('black');
  textSize(16);
  textAlign(LEFT, CENTER);
  text('Base a: ' + nf(a, 0, 1), 10, drawHeight + 18);
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
