// Inverse Function Reflector MicroSim
// CANVAS_HEIGHT: 480
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 40;
let defaultTextSize = 14;

let funcSelect;
let traceSlider;
let showLineCheckbox;
let showConnectCheckbox;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Controls
  funcSelect = createSelect();
  funcSelect.position(10, drawHeight + 8);
  funcSelect.option('f(x) = 2x + 1');
  funcSelect.option('f(x) = x² (x≥0)');
  funcSelect.option('f(x) = x³');
  funcSelect.option('f(x) = 1/x');
  funcSelect.selected('f(x) = 2x + 1');

  traceSlider = createSlider(-4, 4, 1, 0.1);
  traceSlider.position(160, drawHeight + 50);
  traceSlider.size(150);

  showLineCheckbox = createCheckbox('Show y=x line', true);
  showLineCheckbox.position(10, drawHeight + 40);

  showConnectCheckbox = createCheckbox('Show connecting lines', true);
  showConnectCheckbox.position(10, drawHeight + 58);

  describe('Interactive graph showing a function and its inverse reflected over y=x', LABEL);
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

  let plotW = canvasWidth - 2 * margin;
  let plotH = drawHeight - 2 * margin;
  let cx = canvasWidth / 2;
  let cy = drawHeight / 2;
  let range = 6;

  // Grid lines
  stroke(230);
  strokeWeight(0.5);
  for (let i = -range; i <= range; i++) {
    let px = cx + (i / range) * (plotW / 2);
    let py = cy - (i / range) * (plotH / 2);
    line(px, cy - plotH / 2, px, cy + plotH / 2);
    line(cx - plotW / 2, py, cx + plotW / 2, py);
  }

  // Axes
  stroke('black');
  strokeWeight(2);
  line(cx - plotW / 2, cy, cx + plotW / 2, cy);
  line(cx, cy - plotH / 2, cx, cy + plotH / 2);
  strokeWeight(1);

  // Axis labels
  noStroke();
  fill('black');
  textSize(12);
  textAlign(CENTER, TOP);
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    if (i % 2 !== 0) continue;
    let px = cx + (i / range) * (plotW / 2);
    text(i, px, cy + 4);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    if (i % 2 !== 0) continue;
    let py = cy - (i / range) * (plotH / 2);
    text(i, cx - 6, py);
  }

  // y=x dashed line
  if (showLineCheckbox.checked()) {
    stroke('gray');
    strokeWeight(1);
    drawingContext.setLineDash([6, 4]);
    let x1 = -range, y1 = -range;
    let x2 = range, y2 = range;
    let px1 = cx + (x1 / range) * (plotW / 2);
    let py1 = cy - (y1 / range) * (plotH / 2);
    let px2 = cx + (x2 / range) * (plotW / 2);
    let py2 = cy - (y2 / range) * (plotH / 2);
    line(px1, py1, px2, py2);
    drawingContext.setLineDash([]);
    noStroke();
    fill('gray');
    textSize(12);
    textAlign(LEFT, BOTTOM);
    text('y = x', px2 - 30, py2 + 14);
  }

  // Get selected function
  let sel = funcSelect.value();
  let f, fInv, fLabel, fInvLabel;
  let tMin = -4, tMax = 4;

  if (sel === 'f(x) = 2x + 1') {
    f = (x) => 2 * x + 1;
    fInv = (x) => (x - 1) / 2;
    fLabel = 'f(x) = 2x + 1';
    fInvLabel = 'f⁻¹(x) = (x-1)/2';
  } else if (sel === 'f(x) = x² (x≥0)') {
    f = (x) => x * x;
    fInv = (x) => sqrt(x);
    fLabel = 'f(x) = x² (x≥0)';
    fInvLabel = 'f⁻¹(x) = √x';
    tMin = 0;
    tMax = 4;
  } else if (sel === 'f(x) = x³') {
    f = (x) => x * x * x;
    fInv = (x) => (x >= 0 ? pow(x, 1 / 3) : -pow(-x, 1 / 3));
    fLabel = 'f(x) = x³';
    fInvLabel = 'f⁻¹(x) = ³√x';
  } else if (sel === 'f(x) = 1/x') {
    f = (x) => 1 / x;
    fInv = (x) => 1 / x;
    fLabel = 'f(x) = 1/x';
    fInvLabel = 'f⁻¹(x) = 1/x';
    tMin = 0.2;
    tMax = 4;
  }

  // Draw f(x) in blue
  stroke('blue');
  strokeWeight(2);
  noFill();
  beginShape();
  for (let t = tMin; t <= tMax; t += 0.05) {
    if (sel === 'f(x) = 1/x' && abs(t) < 0.05) continue;
    let yVal = f(t);
    if (abs(yVal) > range) continue;
    let px = cx + (t / range) * (plotW / 2);
    let py = cy - (yVal / range) * (plotH / 2);
    vertex(px, py);
  }
  endShape();

  // Draw negative branch for 1/x
  if (sel === 'f(x) = 1/x') {
    beginShape();
    for (let t = -4; t <= -0.2; t += 0.05) {
      let yVal = f(t);
      if (abs(yVal) > range) continue;
      let px = cx + (t / range) * (plotW / 2);
      let py = cy - (yVal / range) * (plotH / 2);
      vertex(px, py);
    }
    endShape();
  }

  // Draw f⁻¹(x) in red
  stroke('red');
  strokeWeight(2);
  noFill();
  let invMin, invMax;
  if (sel === 'f(x) = x² (x≥0)') {
    invMin = 0; invMax = range;
  } else if (sel === 'f(x) = 1/x') {
    invMin = 0.2; invMax = 4;
  } else {
    invMin = -range; invMax = range;
  }
  beginShape();
  for (let t = invMin; t <= invMax; t += 0.05) {
    let yVal = fInv(t);
    if (isNaN(yVal) || abs(yVal) > range) continue;
    let px = cx + (t / range) * (plotW / 2);
    let py = cy - (yVal / range) * (plotH / 2);
    vertex(px, py);
  }
  endShape();

  // Negative branch for inverse of 1/x
  if (sel === 'f(x) = 1/x') {
    beginShape();
    for (let t = -4; t <= -0.2; t += 0.05) {
      let yVal = fInv(t);
      if (abs(yVal) > range) continue;
      let px = cx + (t / range) * (plotW / 2);
      let py = cy - (yVal / range) * (plotH / 2);
      vertex(px, py);
    }
    endShape();
  }

  // Trace point
  let tVal = traceSlider.value();
  if (sel === 'f(x) = x² (x≥0)') tVal = max(0, tVal);
  if (sel === 'f(x) = 1/x' && abs(tVal) < 0.2) tVal = 0.2;

  let fVal = f(tVal);

  if (abs(fVal) <= range && abs(tVal) <= range) {
    // Point on f(x)
    let px1 = cx + (tVal / range) * (plotW / 2);
    let py1 = cy - (fVal / range) * (plotH / 2);
    fill('blue');
    noStroke();
    ellipse(px1, py1, 10, 10);
    textSize(11);
    textAlign(LEFT, BOTTOM);
    text('(' + nf(tVal, 0, 1) + ', ' + nf(fVal, 0, 1) + ')', px1 + 8, py1 - 4);

    // Corresponding point on f⁻¹(x): swap coordinates
    let px2 = cx + (fVal / range) * (plotW / 2);
    let py2 = cy - (tVal / range) * (plotH / 2);
    fill('red');
    noStroke();
    ellipse(px2, py2, 10, 10);
    textAlign(LEFT, BOTTOM);
    text('(' + nf(fVal, 0, 1) + ', ' + nf(tVal, 0, 1) + ')', px2 + 8, py2 - 4);

    // Connecting line
    if (showConnectCheckbox.checked()) {
      stroke('purple');
      strokeWeight(1);
      drawingContext.setLineDash([4, 4]);
      line(px1, py1, px2, py2);
      drawingContext.setLineDash([]);
    }
  }

  // Legend
  noStroke();
  textSize(13);
  textAlign(LEFT, TOP);
  fill('blue');
  text(fLabel, 10, 10);
  fill('red');
  text(fInvLabel, 10, 26);

  // Control labels
  noStroke();
  fill('black');
  textSize(12);
  textAlign(LEFT, CENTER);
  text('Trace x: ' + nf(traceSlider.value(), 0, 1), 160, drawHeight + 45);
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
