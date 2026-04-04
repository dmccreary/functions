// Rational Function Grapher MicroSim
// CANVAS_HEIGHT: 500
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 120;
let canvasHeight = drawHeight + controlHeight;
let margin = 40;
let defaultTextSize = 14;

let gridRange = 10;
let sliderA, sliderB, sliderC, sliderD;
let showAsymptotes, showIntercepts, showReference;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  let sliderW = 120;
  let col1 = 50;
  let col2 = canvasWidth > 500 ? 300 : 250;

  sliderA = createSlider(-5, 5, 3, 0.5);
  sliderA.position(col1, drawHeight + 8);
  sliderA.size(sliderW);

  sliderB = createSlider(-10, 10, 1, 1);
  sliderB.position(col1, drawHeight + 32);
  sliderB.size(sliderW);

  sliderC = createSlider(-5, 5, 1, 0.5);
  sliderC.position(col1, drawHeight + 56);
  sliderC.size(sliderW);

  sliderD = createSlider(-10, 10, -2, 1);
  sliderD.position(col1, drawHeight + 80);
  sliderD.size(sliderW);

  showAsymptotes = createCheckbox('Show asymptotes', true);
  showAsymptotes.position(200, drawHeight + 8);

  showIntercepts = createCheckbox('Show intercepts', true);
  showIntercepts.position(200, drawHeight + 32);

  showReference = createCheckbox('Show 1/x reference', false);
  showReference.position(200, drawHeight + 56);

  describe('Rational function grapher with adjustable parameters and asymptote display', LABEL);
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

  let a = sliderA.value();
  let b = sliderB.value();
  let c = sliderC.value();
  let d = sliderD.value();

  // Prevent c = 0
  if (c === 0) c = 0.5;

  // Plot dimensions
  let plotL = margin;
  let plotR = canvasWidth - margin;
  let plotT = margin + 10;
  let plotB = drawHeight - 15;
  let plotW = plotR - plotL;
  let plotH = plotB - plotT;
  let cx = (plotL + plotR) / 2;
  let cy = (plotT + plotB) / 2;

  function toScreenX(x) { return cx + (x / gridRange) * (plotW / 2); }
  function toScreenY(y) { return cy - (y / gridRange) * (plotH / 2); }

  // Grid
  stroke(220);
  strokeWeight(0.5);
  for (let i = -gridRange; i <= gridRange; i++) {
    let px = toScreenX(i);
    let py = toScreenY(i);
    line(px, plotT, px, plotB);
    line(plotL, py, plotR, py);
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
  for (let i = -gridRange; i <= gridRange; i += 2) {
    if (i === 0) continue;
    text(i, toScreenX(i), cy + 3);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -gridRange; i <= gridRange; i += 2) {
    if (i === 0) continue;
    text(i, cx - 4, toScreenY(i));
  }

  // Vertical asymptote: x = -d/c
  let va = -d / c;
  // Horizontal asymptote: y = a/c
  let ha = a / c;

  if (showAsymptotes.checked()) {
    // Vertical asymptote
    if (abs(va) <= gridRange) {
      stroke('red');
      strokeWeight(1.5);
      drawingContext.setLineDash([6, 4]);
      let vx = toScreenX(va);
      line(vx, plotT, vx, plotB);
      drawingContext.setLineDash([]);
      noStroke();
      fill('red');
      textSize(10);
      textAlign(LEFT, TOP);
      text('x=' + nf(va, 0, 1), vx + 3, plotT + 3);
    }
    // Horizontal asymptote
    if (abs(ha) <= gridRange) {
      stroke('blue');
      strokeWeight(1.5);
      drawingContext.setLineDash([6, 4]);
      let hy = toScreenY(ha);
      line(plotL, hy, plotR, hy);
      drawingContext.setLineDash([]);
      noStroke();
      fill('blue');
      textSize(10);
      textAlign(LEFT, BOTTOM);
      text('y=' + nf(ha, 0, 2), plotL + 3, hy - 3);
    }
  }

  // Reference 1/x
  if (showReference.checked()) {
    stroke('lightgray');
    strokeWeight(1.5);
    noFill();
    for (let branch = 0; branch < 2; branch++) {
      beginShape();
      for (let px = plotL; px <= plotR; px += 1) {
        let x = ((px - cx) / (plotW / 2)) * gridRange;
        if (abs(x) < 0.05) { endShape(); beginShape(); continue; }
        let y = 1 / x;
        let py = toScreenY(y);
        if (py < plotT - 5 || py > plotB + 5) { endShape(); beginShape(); continue; }
        vertex(px, py);
      }
      endShape();
    }
  }

  // Draw rational function f(x) = (ax+b)/(cx+d)
  stroke('darkgreen');
  strokeWeight(2.5);
  noFill();
  let prevPy = null;
  beginShape();
  for (let px = plotL; px <= plotR; px += 1) {
    let x = ((px - cx) / (plotW / 2)) * gridRange;
    let denom = c * x + d;
    if (abs(denom) < 0.03) {
      endShape();
      beginShape();
      prevPy = null;
      continue;
    }
    let y = (a * x + b) / denom;
    let py = toScreenY(y);
    if (py < plotT - 30 || py > plotB + 30) {
      endShape();
      beginShape();
      prevPy = null;
      continue;
    }
    vertex(px, py);
    prevPy = py;
  }
  endShape();

  // Intercepts
  if (showIntercepts.checked()) {
    // y-intercept: x=0 => y = b/d (if d != 0)
    if (abs(d) > 0.01) {
      let yi = b / d;
      if (abs(yi) <= gridRange) {
        fill('orange');
        noStroke();
        ellipse(toScreenX(0), toScreenY(yi), 10, 10);
        fill('black');
        textSize(10);
        textAlign(LEFT, BOTTOM);
        noStroke();
        text('(0, ' + nf(yi, 0, 2) + ')', toScreenX(0) + 7, toScreenY(yi) - 2);
      }
    }
    // x-intercept: y=0 => x = -b/a (if a != 0)
    if (abs(a) > 0.01) {
      let xi = -b / a;
      if (abs(xi) <= gridRange) {
        fill('purple');
        noStroke();
        ellipse(toScreenX(xi), toScreenY(0), 10, 10);
        fill('black');
        textSize(10);
        textAlign(LEFT, TOP);
        noStroke();
        text('(' + nf(xi, 0, 2) + ', 0)', toScreenX(xi) + 5, toScreenY(0) + 5);
      }
    }
  }

  // Display equation
  noStroke();
  fill('black');
  textSize(14);
  textAlign(CENTER, TOP);
  let numStr = nf(a, 0, 1) + 'x';
  if (b >= 0) numStr += ' + ' + nf(b, 0, 0);
  else numStr += ' - ' + nf(-b, 0, 0);
  let denStr = nf(c, 0, 1) + 'x';
  if (d >= 0) denStr += ' + ' + nf(d, 0, 0);
  else denStr += ' - ' + nf(-d, 0, 0);
  text('f(x) = (' + numStr + ') / (' + denStr + ')', canvasWidth / 2, 4);

  // Control labels
  noStroke();
  fill('black');
  textSize(12);
  textAlign(LEFT, CENTER);
  text('a=' + nf(a, 0, 1), 5, drawHeight + 16);
  text('b=' + nf(b, 0, 0), 5, drawHeight + 40);
  text('c=' + nf(c, 0, 1), 5, drawHeight + 64);
  text('d=' + nf(d, 0, 0), 5, drawHeight + 88);

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
