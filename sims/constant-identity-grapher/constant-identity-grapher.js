// Constant and Identity Function Grapher MicroSim
// CANVAS_HEIGHT: 600
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 150;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

let cSlider, traceSlider;
let showTableCb;
let gridRange = 10;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Slider for constant c
  cSlider = createSlider(-8, 8, 3, 0.5);
  cSlider.position(100, drawHeight + 10);
  cSlider.style('width', '180px');

  // Slider for trace x
  traceSlider = createSlider(-8, 8, 2, 0.5);
  traceSlider.position(100, drawHeight + 45);
  traceSlider.style('width', '180px');

  // Checkbox for table
  showTableCb = createCheckbox('Show Table of Values', false);
  showTableCb.position(10, drawHeight + 80);

  describe('Coordinate grid showing identity function and adjustable constant function with trace point', LABEL);
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

  let c = cSlider.value();
  let traceX = traceSlider.value();

  // Title
  fill('black');
  noStroke();
  textSize(18);
  textAlign(CENTER, TOP);
  text('Constant & Identity Functions', canvasWidth / 2, 8);

  // Plot area
  let plotLeft = margin + 35;
  let plotRight = canvasWidth - margin - 10;
  let plotTop = 35;
  let plotBottom = drawHeight - 20;
  let plotW = plotRight - plotLeft;
  let plotH = plotBottom - plotTop;
  let cx = plotLeft + plotW / 2;
  let cy = plotTop + plotH / 2;

  // Grid
  stroke(220);
  strokeWeight(0.5);
  for (let v = -gridRange; v <= gridRange; v++) {
    let px = map(v, -gridRange, gridRange, plotLeft, plotRight);
    let py = map(v, -gridRange, gridRange, plotBottom, plotTop);
    line(px, plotTop, px, plotBottom);
    line(plotLeft, py, plotRight, py);
  }

  // Axes
  stroke(80);
  strokeWeight(1.5);
  line(plotLeft, cy, plotRight, cy); // x-axis
  line(cx, plotTop, cx, plotBottom); // y-axis

  // Axis labels
  noStroke();
  fill(80);
  textSize(11);
  textAlign(CENTER, TOP);
  for (let v = -gridRange; v <= gridRange; v += 2) {
    if (v === 0) continue;
    let px = map(v, -gridRange, gridRange, plotLeft, plotRight);
    text(v, px, cy + 4);
  }
  textAlign(RIGHT, CENTER);
  for (let v = -gridRange; v <= gridRange; v += 2) {
    if (v === 0) continue;
    let py = map(v, -gridRange, gridRange, plotBottom, plotTop);
    text(v, cx - 5, py);
  }
  textAlign(CENTER, TOP);
  textSize(12);
  text('0', cx - 8, cy + 4);

  // Identity function f(x) = x (dashed blue)
  stroke(50, 100, 220);
  strokeWeight(2);
  drawingContext.setLineDash([8, 6]);
  let ix1 = map(-gridRange, -gridRange, gridRange, plotLeft, plotRight);
  let iy1 = map(-gridRange, -gridRange, gridRange, plotBottom, plotTop);
  let ix2 = map(gridRange, -gridRange, gridRange, plotLeft, plotRight);
  let iy2 = map(gridRange, -gridRange, gridRange, plotBottom, plotTop);
  line(ix1, iy1, ix2, iy2);
  drawingContext.setLineDash([]);

  // Constant function g(x) = c (solid red)
  stroke(220, 50, 50);
  strokeWeight(2.5);
  let constY = map(c, -gridRange, gridRange, plotBottom, plotTop);
  if (constY >= plotTop && constY <= plotBottom) {
    line(plotLeft, constY, plotRight, constY);
  }

  // Trace point on identity function
  let tracePxX = map(traceX, -gridRange, gridRange, plotLeft, plotRight);
  let traceIdentY = map(traceX, -gridRange, gridRange, plotBottom, plotTop);
  let traceConstY = constY;

  // Dashed vertical guide at trace x
  stroke(180);
  strokeWeight(1);
  drawingContext.setLineDash([4, 4]);
  line(tracePxX, plotTop, tracePxX, plotBottom);
  drawingContext.setLineDash([]);

  // Identity trace point
  if (traceIdentY >= plotTop && traceIdentY <= plotBottom) {
    fill(50, 100, 220);
    noStroke();
    ellipse(tracePxX, traceIdentY, 12, 12);

    // Label
    fill(50, 100, 220);
    textSize(12);
    textAlign(LEFT, BOTTOM);
    noStroke();
    text('(' + nf(traceX, 0, 1) + ', ' + nf(traceX, 0, 1) + ')',
      tracePxX + 8, traceIdentY - 4);
  }

  // Constant trace point
  if (traceConstY >= plotTop && traceConstY <= plotBottom) {
    fill(220, 50, 50);
    noStroke();
    ellipse(tracePxX, traceConstY, 12, 12);

    // Label
    fill(220, 50, 50);
    textSize(12);
    textAlign(LEFT, TOP);
    noStroke();
    text('(' + nf(traceX, 0, 1) + ', ' + nf(c, 0, 1) + ')',
      tracePxX + 8, traceConstY + 4);
  }

  // Legend
  let legX = plotLeft + 5;
  let legY = plotTop + 5;
  noStroke();
  fill(255, 255, 255, 200);
  rect(legX, legY, 165, 50, 5);

  stroke(50, 100, 220);
  strokeWeight(2);
  drawingContext.setLineDash([6, 4]);
  line(legX + 8, legY + 15, legX + 35, legY + 15);
  drawingContext.setLineDash([]);
  noStroke();
  fill(50, 100, 220);
  textSize(13);
  textAlign(LEFT, CENTER);
  text('f(x) = x (identity)', legX + 40, legY + 15);

  stroke(220, 50, 50);
  strokeWeight(2.5);
  line(legX + 8, legY + 35, legX + 35, legY + 35);
  noStroke();
  fill(220, 50, 50);
  text('g(x) = ' + nf(c, 0, 1) + ' (constant)', legX + 40, legY + 35);

  // Table of values
  if (showTableCb.checked()) {
    drawTable(c);
  }

  // Control labels
  noStroke();
  fill('black');
  textSize(14);
  textAlign(LEFT, CENTER);
  text('c = ' + nf(c, 0, 1), 10, drawHeight + 22);
  text('x = ' + nf(traceX, 0, 1), 10, drawHeight + 57);

  // Slider end labels
  textSize(11);
  fill(120);
  text('-8', 290, drawHeight + 22);
  text('8', 290, drawHeight + 57);
}

function drawTable(c) {
  let tableX = canvasWidth - 210;
  let tableY = 60;
  let colW = 60;
  let rowH = 22;
  let xVals = [-3, -2, -1, 0, 1, 2, 3];

  // Background
  fill(255, 255, 255, 230);
  stroke(180);
  strokeWeight(1);
  rect(tableX - 5, tableY - 5, colW * 3 + 15, rowH * (xVals.length + 1) + 15, 5);

  // Header
  fill(60);
  noStroke();
  textSize(12);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text('x', tableX + colW * 0.5, tableY + rowH / 2);
  fill(50, 100, 220);
  text('f(x)=x', tableX + colW * 1.5, tableY + rowH / 2);
  fill(220, 50, 50);
  text('g(x)=' + nf(c, 0, 0), tableX + colW * 2.5, tableY + rowH / 2);
  textStyle(NORMAL);

  // Header line
  stroke(180);
  line(tableX, tableY + rowH, tableX + colW * 3 + 5, tableY + rowH);

  // Rows
  for (let i = 0; i < xVals.length; i++) {
    let ry = tableY + rowH * (i + 1.5);
    noStroke();
    fill(60);
    textAlign(CENTER, CENTER);
    text(xVals[i], tableX + colW * 0.5, ry);
    fill(50, 100, 220);
    text(xVals[i], tableX + colW * 1.5, ry);
    fill(220, 50, 50);
    text(nf(c, 0, 1), tableX + colW * 2.5, ry);

    // Row separator
    stroke(230);
    line(tableX, tableY + rowH * (i + 1), tableX + colW * 3 + 5, tableY + rowH * (i + 1));
  }
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
