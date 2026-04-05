// Exponential Model Simulator MicroSim
// CANVAS_HEIGHT: 520
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 140;
let canvasHeight = drawHeight + controlHeight;
let margin = 50;
let defaultTextSize = 14;
let sliderLeftMargin = 140;
let sliderWidth = 200;

let modelSelect;
let slider1, slider2, slider3;
let timeSlider;
let showMarkersCheckbox;

// Model parameters
let models = {
  'Compound Interest': { label1: 'Principal', label2: 'Rate %', label3: 'Compounding' },
  'Population Growth': { label1: 'Initial Pop', label2: 'Growth %', label3: '' },
  'Half-Life Decay': { label1: 'Initial Amount', label2: 'Half-Life', label3: '' }
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  modelSelect = createSelect();
  modelSelect.position(10, drawHeight + 8);
  modelSelect.option('Compound Interest');
  modelSelect.option('Population Growth');
  modelSelect.option('Half-Life Decay');
  modelSelect.selected('Compound Interest');

  slider1 = createSlider(100, 10000, 1000, 100);
  slider1.position(sliderLeftMargin, drawHeight + 38);
  slider1.size(sliderWidth);

  slider2 = createSlider(1, 15, 5, 0.5);
  slider2.position(sliderLeftMargin, drawHeight + 62);
  slider2.size(sliderWidth);

  slider3 = createSlider(1, 365, 12, 1);
  slider3.position(sliderLeftMargin, drawHeight + 86);
  slider3.size(sliderWidth);

  timeSlider = createSlider(5, 50, 20, 1);
  timeSlider.position(sliderLeftMargin, drawHeight + 110);
  timeSlider.size(sliderWidth);

  showMarkersCheckbox = createCheckbox('Show doubling/halving', false);
  showMarkersCheckbox.position(sliderLeftMargin + 20, drawHeight + 10);

  describe('Exponential model simulator for compound interest, population growth, and half-life decay', LABEL);
}

// Draws a line of text with selected segments rendered as smaller, raised
// superscripts. `segments` is an array of { text, sup } objects. `hAlign`
// may be LEFT, CENTER, or RIGHT and controls horizontal anchoring at (x, y).
// y is treated as the top of the base text.
function drawSuperscriptLine(segments, x, y, baseSize, hAlign) {
  let supSize = baseSize * 0.65 + 2;
  let totalW = 0;
  for (let s of segments) {
    textSize(s.sup ? supSize : baseSize);
    totalW += textWidth(s.text);
  }
  let startX = x;
  if (hAlign === CENTER) startX = x - totalW / 2;
  else if (hAlign === RIGHT) startX = x - totalW;
  textAlign(LEFT, TOP);
  let curX = startX;
  for (let s of segments) {
    textSize(s.sup ? supSize : baseSize);
    let yOff = s.sup ? -baseSize * 0.3 : 0;
    text(s.text, curX, y + yOff);
    curX += textWidth(s.text);
  }
}

function getModelValue(model, t) {
  let p = slider1.value();
  let r = slider2.value() / 100;

  if (model === 'Compound Interest') {
    let n = slider3.value();
    return p * pow(1 + r / n, n * t);
  } else if (model === 'Population Growth') {
    return p * pow(1 + r, t);
  } else if (model === 'Half-Life Decay') {
    let halfLife = slider2.value();
    return p * pow(0.5, t / halfLife);
  }
  return 0;
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

  let model = modelSelect.value();
  let tMax = timeSlider.value();

  // Update slider ranges based on model
  if (model === 'Compound Interest') {
    slider1.elt.min = 100; slider1.elt.max = 10000; slider1.elt.step = 100;
    slider2.elt.min = 1; slider2.elt.max = 15; slider2.elt.step = 0.5;
    slider3.elt.min = 1; slider3.elt.max = 365; slider3.elt.step = 1;
    slider3.show();
  } else if (model === 'Population Growth') {
    slider1.elt.min = 100; slider1.elt.max = 10000; slider1.elt.step = 100;
    slider2.elt.min = 1; slider2.elt.max = 30; slider2.elt.step = 1;
    slider3.hide();
  } else if (model === 'Half-Life Decay') {
    slider1.elt.min = 100; slider1.elt.max = 10000; slider1.elt.step = 100;
    slider2.elt.min = 1; slider2.elt.max = 20; slider2.elt.step = 0.5;
    slider3.hide();
  }

  // Compute data points
  let values = [];
  let yMax = 0;
  for (let t = 0; t <= tMax; t += 0.5) {
    let v = getModelValue(model, t);
    values.push({ t: t, v: v });
    if (v > yMax) yMax = v;
  }
  yMax = yMax * 1.1;

  let plotW = canvasWidth - 2 * margin;
  let plotH = drawHeight - 2 * margin - 10;
  let originX = margin;
  let originY = drawHeight - margin;

  let toPixelX = (t) => originX + (t / tMax) * plotW;
  let toPixelY = (v) => originY - (v / yMax) * plotH;

  // Grid
  stroke(230);
  strokeWeight(0.5);
  let tStep = tMax <= 10 ? 1 : (tMax <= 25 ? 5 : 10);
  for (let t = 0; t <= tMax; t += tStep) {
    let px = toPixelX(t);
    line(px, margin, px, originY);
  }
  let yStep = yMax <= 5000 ? 500 : (yMax <= 20000 ? 2000 : 5000);
  if (yMax <= 2000) yStep = 200;
  for (let v = 0; v <= yMax; v += yStep) {
    let py = toPixelY(v);
    line(originX, py, originX + plotW, py);
  }

  // Axes
  stroke('black');
  strokeWeight(2);
  line(originX, originY, originX + plotW, originY);
  line(originX, originY, originX, margin);
  strokeWeight(1);

  // Axis tick labels
  noStroke();
  fill('black');
  textSize(10);
  textAlign(CENTER, TOP);
  for (let t = 0; t <= tMax; t += tStep) {
    text(t, toPixelX(t), originY + 4);
  }
  textAlign(RIGHT, CENTER);
  for (let v = 0; v <= yMax; v += yStep) {
    let label = v >= 1000 ? nf(v / 1000, 0, 1) + 'k' : nf(v, 0, 0);
    text(label, originX - 5, toPixelY(v));
  }

  // Axis names
  noStroke();
  fill('black');
  textSize(12);
  textAlign(CENTER, TOP);
  text('Time (years)', originX + plotW / 2, originY + 18);
  push();
  translate(15, margin + plotH / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, BOTTOM);
  text('Quantity', 0, 0);
  pop();

  // Plot curve
  stroke('blue');
  strokeWeight(2.5);
  noFill();
  beginShape();
  for (let i = 0; i < values.length; i++) {
    let px = toPixelX(values[i].t);
    let py = toPixelY(values[i].v);
    if (py < margin - 20) continue;
    vertex(px, py);
  }
  endShape();

  // Initial point
  fill('blue');
  noStroke();
  ellipse(toPixelX(0), toPixelY(values[0].v), 7, 7);

  // Doubling/halving markers
  if (showMarkersCheckbox.checked()) {
    let p0 = values[0].v;
    if (model === 'Half-Life Decay') {
      // Halving markers
      let halvings = [p0 / 2, p0 / 4, p0 / 8];
      let halfLife = slider2.value();
      for (let h = 0; h < halvings.length; h++) {
        let tH = halfLife * (h + 1);
        if (tH > tMax) break;
        let py = toPixelY(halvings[h]);
        let px = toPixelX(tH);
        stroke('red');
        strokeWeight(1);
        drawingContext.setLineDash([4, 3]);
        line(originX, py, px, py);
        line(px, py, px, originY);
        drawingContext.setLineDash([]);
        fill('red');
        noStroke();
        ellipse(px, py, 7, 7);
        noStroke();
        drawSuperscriptLine(
          [{ text: '½', sup: false }, { text: String(h + 1), sup: true }],
          px + 4, py - 11, 9, LEFT
        );
      }
    } else {
      // Doubling markers
      let target = p0 * 2;
      for (let i = 1; i < values.length; i++) {
        if (values[i].v >= target) {
          let tD = values[i].t;
          let py = toPixelY(target);
          let px = toPixelX(tD);
          stroke('green');
          strokeWeight(1);
          drawingContext.setLineDash([4, 3]);
          line(originX, py, px, py);
          line(px, py, px, originY);
          drawingContext.setLineDash([]);
          fill('green');
          noStroke();
          ellipse(px, py, 7, 7);
          textSize(9);
          textAlign(LEFT, BOTTOM);
          noStroke();
          text('2x at t=' + nf(tD, 0, 1), px + 4, py - 2);
          break;
        }
      }
    }
  }

  // Main title
  noStroke();
  fill('black');
  textStyle(BOLD);
  textSize(22);
  textAlign(CENTER, TOP);
  text('Exponential Model Simulator', canvasWidth / 2, 6);

  // Model subtitle
  fill('blue');
  textSize(18);
  text(model, canvasWidth / 2, 36);
  textStyle(NORMAL);

  fill('darkblue');
  let p = slider1.value();
  let r = slider2.value();
  let eqSegments = [];
  if (model === 'Compound Interest') {
    let n = slider3.value();
    let nLabel = n === 1 ? 'Annual' : (n === 4 ? 'Quarterly' : (n === 12 ? 'Monthly' : (n === 365 ? 'Daily' : 'n=' + n)));
    eqSegments = [
      { text: 'A = ' + p + '(1 + ' + nf(r / 100, 0, 3) + '/' + n + ')', sup: false },
      { text: n + 't', sup: true },
      { text: '  [' + nLabel + ']', sup: false }
    ];
  } else if (model === 'Population Growth') {
    eqSegments = [
      { text: 'P = ' + p + ' × ' + nf(1 + r / 100, 0, 2), sup: false },
      { text: 't', sup: true }
    ];
  } else if (model === 'Half-Life Decay') {
    eqSegments = [
      { text: 'N = ' + p + ' × (½)', sup: false },
      { text: 't/' + nf(r, 0, 1), sup: true }
    ];
  }
  drawSuperscriptLine(eqSegments, canvasWidth / 2, 69, 13, CENTER);

  // Data table (compact, top right)
  let finalVal = values[values.length - 1].v;
  noStroke();
  fill('black');
  textSize(11);
  textAlign(RIGHT, TOP);
  text('Final: ' + nf(finalVal, 0, 0) + ' at t=' + tMax, canvasWidth - margin, 8);

  // Control labels
  noStroke();
  fill('black');
  textSize(16);
  textAlign(LEFT, CENTER);
  if (model === 'Compound Interest') {
    text('Principal: ' + slider1.value(), 10, drawHeight + 48);
    text('Rate: ' + nf(slider2.value(), 0, 1) + '%', 10, drawHeight + 72);
    text('n: ' + slider3.value(), 10, drawHeight + 96);
  } else if (model === 'Population Growth') {
    text('Pop₀: ' + slider1.value(), 10, drawHeight + 48);
    text('Growth: ' + nf(slider2.value(), 0, 0) + '%', 10, drawHeight + 72);
  } else if (model === 'Half-Life Decay') {
    text('Amount: ' + slider1.value(), 10, drawHeight + 48);
    text('Half-life: ' + nf(slider2.value(), 0, 1), 10, drawHeight + 72);
  }
  text('Time: ' + timeSlider.value(), 10, drawHeight + 120);
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
