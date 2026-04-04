// Transformation Explorer MicroSim
// CANVAS_HEIGHT: 520
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 140;
let canvasHeight = drawHeight + controlHeight;
let margin = 40;
let defaultTextSize = 14;

let gridRange = 6;
let funcSelect;
let shiftHSlider, shiftVSlider, stretchVSlider, stretchHSlider;
let showOriginal, showMapping;
let resetBtn;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Base function dropdown
  funcSelect = createSelect();
  funcSelect.position(70, drawHeight + 6);
  funcSelect.option('x²');
  funcSelect.option('x³');
  funcSelect.option('|x|');
  funcSelect.option('√x');
  funcSelect.option('1/x');
  funcSelect.option('2ˣ');
  funcSelect.selected('x²');

  // Horizontal shift a
  shiftHSlider = createSlider(-5, 5, 0, 0.5);
  shiftHSlider.position(70, drawHeight + 32);
  shiftHSlider.size(110);

  // Vertical shift b
  shiftVSlider = createSlider(-5, 5, 0, 0.5);
  shiftVSlider.position(70, drawHeight + 56);
  shiftVSlider.size(110);

  // Vertical stretch p
  stretchVSlider = createSlider(-3, 3, 1, 0.25);
  stretchVSlider.position(300, drawHeight + 32);
  stretchVSlider.size(110);

  // Horizontal stretch q
  stretchHSlider = createSlider(-3, 3, 1, 0.25);
  stretchHSlider.position(300, drawHeight + 56);
  stretchHSlider.size(110);

  // Checkboxes
  showOriginal = createCheckbox('Show original', true);
  showOriginal.position(200, drawHeight + 6);

  showMapping = createCheckbox('Show point mapping', false);
  showMapping.position(200, drawHeight + 80);

  // Reset button
  resetBtn = createButton('Reset All');
  resetBtn.position(70, drawHeight + 108);
  resetBtn.mousePressed(resetAll);

  describe('Function transformation explorer with shift, stretch, and point mapping', LABEL);
}

function resetAll() {
  shiftHSlider.value(0);
  shiftVSlider.value(0);
  stretchVSlider.value(1);
  stretchHSlider.value(1);
  funcSelect.selected('x²');
}

function baseFunc(x, name) {
  switch (name) {
    case 'x²': return x * x;
    case 'x³': return x * x * x;
    case '|x|': return abs(x);
    case '√x': return x >= 0 ? sqrt(x) : undefined;
    case '1/x': return abs(x) > 0.05 ? 1 / x : undefined;
    case '2ˣ': return pow(2, x);
    default: return x * x;
  }
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

  let fname = funcSelect.value();
  let a = shiftHSlider.value();
  let b = shiftVSlider.value();
  let p = stretchVSlider.value();
  let q = stretchHSlider.value();
  if (q === 0) q = 0.25;

  // Plot dimensions
  let plotL = margin;
  let plotR = canvasWidth - margin;
  let plotT = margin + 10;
  let plotB = drawHeight - 15;
  let plotW = plotR - plotL;
  let plotH = plotB - plotT;
  let cx = (plotL + plotR) / 2;
  let cy = (plotT + plotB) / 2;

  function toSX(x) { return cx + (x / gridRange) * (plotW / 2); }
  function toSY(y) { return cy - (y / gridRange) * (plotH / 2); }

  // Grid
  stroke(220);
  strokeWeight(0.5);
  for (let i = -gridRange; i <= gridRange; i++) {
    line(toSX(i), plotT, toSX(i), plotB);
    line(plotL, toSY(i), plotR, toSY(i));
  }

  // Axes
  stroke('black');
  strokeWeight(2);
  line(plotL, cy, plotR, cy);
  line(cx, plotT, cx, plotB);
  strokeWeight(1);

  // Axis labels
  noStroke();
  fill('black');
  textSize(10);
  textAlign(CENTER, TOP);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0) continue;
    text(i, toSX(i), cy + 3);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -gridRange; i <= gridRange; i++) {
    if (i === 0) continue;
    text(i, cx - 4, toSY(i));
  }

  // Draw original function in gray
  if (showOriginal.checked()) {
    stroke('lightgray');
    strokeWeight(2);
    noFill();
    beginShape();
    for (let sx = plotL; sx <= plotR; sx += 1) {
      let x = ((sx - cx) / (plotW / 2)) * gridRange;
      let y = baseFunc(x, fname);
      if (y === undefined) { endShape(); beginShape(); continue; }
      let sy = toSY(y);
      if (sy < plotT - 10 || sy > plotB + 10) { endShape(); beginShape(); continue; }
      vertex(sx, sy);
    }
    endShape();
  }

  // Draw transformed function y = p * f(q*(x - a)) + b
  stroke('blue');
  strokeWeight(2.5);
  noFill();
  beginShape();
  for (let sx = plotL; sx <= plotR; sx += 1) {
    let x = ((sx - cx) / (plotW / 2)) * gridRange;
    let innerX = q * (x - a);
    let y = baseFunc(innerX, fname);
    if (y === undefined) { endShape(); beginShape(); continue; }
    y = p * y + b;
    let sy = toSY(y);
    if (sy < plotT - 10 || sy > plotB + 10) { endShape(); beginShape(); continue; }
    vertex(sx, sy);
  }
  endShape();

  // Show point mapping with dotted lines
  if (showMapping.checked()) {
    let samplePoints = [-2, -1, 0, 1, 2];
    for (let xo of samplePoints) {
      let yo = baseFunc(xo, fname);
      if (yo === undefined) continue;

      // Transformed point: x' = xo/q + a, y' = p*yo + b
      let xt = xo / q + a;
      let yt = p * yo + b;

      if (abs(xt) > gridRange || abs(yt) > gridRange) continue;
      if (abs(xo) > gridRange || abs(yo) > gridRange) continue;

      // Original point dot
      if (showOriginal.checked()) {
        fill('gray');
        noStroke();
        ellipse(toSX(xo), toSY(yo), 7, 7);
      }

      // Transformed point dot
      fill('blue');
      noStroke();
      ellipse(toSX(xt), toSY(yt), 7, 7);

      // Dotted line connecting them
      stroke('orange');
      strokeWeight(1);
      drawingContext.setLineDash([3, 3]);
      line(toSX(xo), toSY(yo), toSX(xt), toSY(yt));
      drawingContext.setLineDash([]);
    }
  }

  // Display equation
  noStroke();
  fill('black');
  textSize(13);
  textAlign(CENTER, TOP);
  let eqStr = 'y = ';
  if (p !== 1) eqStr += nf(p, 0, 2) + '·';
  eqStr += fname.replace('x²', 'f').replace('x³', 'f').replace('|x|', 'f').replace('√x', 'f').replace('1/x', 'f').replace('2ˣ', 'f');
  eqStr = 'y = ';
  if (p !== 1) eqStr += nf(p, 0, 2) + ' · ';
  eqStr += 'f(';
  if (q !== 1) eqStr += nf(q, 0, 2) + '·';
  if (a === 0) eqStr += 'x)';
  else if (a > 0) eqStr += '(x − ' + nf(a, 0, 1) + '))';
  else eqStr += '(x + ' + nf(-a, 0, 1) + '))';
  if (b > 0) eqStr += ' + ' + nf(b, 0, 1);
  else if (b < 0) eqStr += ' − ' + nf(-b, 0, 1);
  text(eqStr, canvasWidth / 2, 4);

  // Show base function name
  noStroke();
  fill('gray');
  textSize(11);
  textAlign(RIGHT, TOP);
  text('f(x) = ' + fname, canvasWidth - margin, 4);

  // Control labels
  noStroke();
  fill('black');
  textSize(12);
  textAlign(LEFT, CENTER);
  text('f(x):', 10, drawHeight + 14);
  text('a=' + nf(a, 0, 1), 10, drawHeight + 40);
  text('b=' + nf(b, 0, 1), 10, drawHeight + 64);
  text('p=' + nf(p, 0, 2), 245, drawHeight + 40);
  text('q=' + nf(q, 0, 2), 245, drawHeight + 64);

  textSize(defaultTextSize);
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
