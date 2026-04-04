// Quadratic Equation Solver MicroSim
// CANVAS_HEIGHT: 520
let canvasWidth = 800;
let drawHeight = 400;
let controlHeight = 120;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 40;
let defaultTextSize = 14;

let aSlider, bSlider, cSlider;
let showStepsCheckbox;
let randomBtn;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Slider a: -5 to 5, step 0.5, default 1 (exclude 0 handled in draw)
  aSlider = createSlider(-5, 5, 1, 0.5);
  aSlider.position(sliderLeftMargin, drawHeight + 10);
  aSlider.size(140);

  bSlider = createSlider(-10, 10, -2, 1);
  bSlider.position(sliderLeftMargin, drawHeight + 40);
  bSlider.size(140);

  cSlider = createSlider(-10, 10, -3, 1);
  cSlider.position(sliderLeftMargin, drawHeight + 70);
  cSlider.size(140);

  showStepsCheckbox = createCheckbox('Show Step-by-Step', false);
  showStepsCheckbox.position(sliderLeftMargin + 160, drawHeight + 10);

  randomBtn = createButton('Random Equation');
  randomBtn.position(sliderLeftMargin + 160, drawHeight + 45);
  randomBtn.mousePressed(randomize);

  describe('Quadratic equation solver showing parabola graph, discriminant, and three solution methods', LABEL);
}

function randomize() {
  let newA = 0;
  while (newA === 0) {
    newA = (floor(random(-4, 5)) * 2) / 2; // step 0.5
  }
  aSlider.value(newA);
  bSlider.value(floor(random(-8, 9)));
  cSlider.value(floor(random(-8, 9)));
}

function draw() {
  updateCanvasSize();

  let a = aSlider.value();
  if (a === 0) a = 0.5; // prevent a=0

  let b = bSlider.value();
  let c = cSlider.value();
  let disc = b * b - 4 * a * c;

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Layout: left half = graph, right half = solutions
  let graphW = canvasWidth * 0.45;
  let solnX = canvasWidth * 0.48;

  // --- LEFT: Graph ---
  drawGraph(a, b, c, disc, graphW);

  // --- RIGHT: Solution methods ---
  drawSolutions(a, b, c, disc, solnX);

  // --- CONTROLS labels ---
  fill('black');
  noStroke();
  textSize(13);
  textAlign(LEFT, CENTER);
  text('a = ' + nf(a, 1, 1), sliderLeftMargin + 145, drawHeight + 18);
  text('b = ' + b, sliderLeftMargin + 145, drawHeight + 48);
  text('c = ' + c, sliderLeftMargin + 145, drawHeight + 78);

  textSize(12);
  textAlign(LEFT, CENTER);
  text('a:', sliderLeftMargin - 15, drawHeight + 18);
  text('b:', sliderLeftMargin - 15, drawHeight + 48);
  text('c:', sliderLeftMargin - 15, drawHeight + 78);
}

function drawGraph(a, b, c, disc, graphW) {
  let plotX = margin;
  let plotY = margin + 20;
  let plotW = graphW - 2 * margin;
  let plotH = drawHeight - 2 * margin - 30;

  // Title
  fill('black');
  noStroke();
  textSize(16);
  textAlign(CENTER, TOP);
  text('Graph of f(x) = ' + formatEquation(a, b, c), graphW / 2, 5);

  // Determine visible range
  let vx = -b / (2 * a);
  let vy = a * vx * vx + b * vx + c;
  let xMin = vx - 8;
  let xMax = vx + 8;
  let yMin = min(vy - 5, -2);
  let yMax = max(vy + 5, 2);

  // Adjust y range to show roots
  if (disc >= 0) {
    let r1 = (-b + sqrt(disc)) / (2 * a);
    let r2 = (-b - sqrt(disc)) / (2 * a);
    xMin = min(xMin, min(r1, r2) - 2);
    xMax = max(xMax, max(r1, r2) + 2);
  }

  // Ensure axis visible
  if (yMin > -1) yMin = -2;
  if (yMax < 1) yMax = 2;

  function toScreenX(x) { return plotX + (x - xMin) / (xMax - xMin) * plotW; }
  function toScreenY(y) { return plotY + plotH - (y - yMin) / (yMax - yMin) * plotH; }

  // Grid lines
  stroke(230);
  strokeWeight(0.5);
  for (let gx = ceil(xMin); gx <= floor(xMax); gx++) {
    let sx = toScreenX(gx);
    line(sx, plotY, sx, plotY + plotH);
  }
  for (let gy = ceil(yMin); gy <= floor(yMax); gy++) {
    let sy = toScreenY(gy);
    line(plotX, sy, plotX + plotW, sy);
  }

  // Axes
  stroke('gray');
  strokeWeight(1);
  if (xMin <= 0 && xMax >= 0) {
    let ax = toScreenX(0);
    line(ax, plotY, ax, plotY + plotH);
  }
  if (yMin <= 0 && yMax >= 0) {
    let ay = toScreenY(0);
    line(plotX, ay, plotX + plotW, ay);
  }

  // Axis labels
  fill('gray');
  noStroke();
  textSize(10);
  textAlign(CENTER, TOP);
  for (let gx = ceil(xMin); gx <= floor(xMax); gx += 2) {
    if (gx === 0) continue;
    text(gx, toScreenX(gx), toScreenY(0) + 2);
  }
  textAlign(RIGHT, CENTER);
  for (let gy = ceil(yMin); gy <= floor(yMax); gy += 2) {
    if (gy === 0) continue;
    let sy = toScreenY(gy);
    if (sy > plotY + 5 && sy < plotY + plotH - 5) {
      text(gy, toScreenX(0) - 4, sy);
    }
  }

  // Parabola
  stroke('blue');
  strokeWeight(2);
  noFill();
  beginShape();
  for (let px = plotX; px <= plotX + plotW; px += 1) {
    let x = xMin + (px - plotX) / plotW * (xMax - xMin);
    let y = a * x * x + b * x + c;
    let sy = toScreenY(y);
    if (sy >= plotY - 20 && sy <= plotY + plotH + 20) {
      vertex(px, sy);
    }
  }
  endShape();

  // Vertex
  let svx = toScreenX(vx);
  let svy = toScreenY(vy);
  if (svy >= plotY && svy <= plotY + plotH) {
    fill('purple');
    noStroke();
    ellipse(svx, svy, 8, 8);
    textSize(11);
    textAlign(LEFT, BOTTOM);
    text('V(' + nf(vx, 1, 1) + ', ' + nf(vy, 1, 1) + ')', svx + 6, svy - 4);
  }

  // X-intercepts (roots)
  if (disc >= 0) {
    let r1 = (-b + sqrt(disc)) / (2 * a);
    let r2 = (-b - sqrt(disc)) / (2 * a);
    fill('red');
    noStroke();
    let sr1x = toScreenX(r1);
    let sr1y = toScreenY(0);
    ellipse(sr1x, sr1y, 8, 8);
    textSize(11);
    textAlign(CENTER, TOP);
    text(nf(r1, 1, 2), sr1x, sr1y + 6);

    if (abs(r1 - r2) > 0.01) {
      let sr2x = toScreenX(r2);
      ellipse(sr2x, sr1y, 8, 8);
      text(nf(r2, 1, 2), sr2x, sr1y + 6);
    }
  }

  // Discriminant display
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);
  let discLabel = 'Discriminant: \u0394 = ' + nf(disc, 1, 1);
  if (disc > 0) {
    fill('green');
    text(discLabel + ' (Two real roots)', plotX, plotY + plotH + 5);
  } else if (abs(disc) < 0.001) {
    fill('goldenrod');
    text(discLabel + ' (One repeated root)', plotX, plotY + plotH + 5);
  } else {
    fill('red');
    text(discLabel + ' (No real roots)', plotX, plotY + plotH + 5);
  }
  strokeWeight(1);
}

function drawSolutions(a, b, c, disc, startX) {
  let x = startX + 10;
  let y = 15;
  let showSteps = showStepsCheckbox.checked();

  fill('black');
  noStroke();
  textSize(15);
  textAlign(LEFT, TOP);
  text('Solution Methods', x, y);
  y += 22;

  textSize(12);

  // --- Method 1: Quadratic Formula ---
  fill('darkblue');
  textSize(13);
  text('1. Quadratic Formula', x, y);
  y += 18;
  fill('black');
  textSize(12);

  if (showSteps) {
    text('x = (-b \u00B1 \u221A(b\u00B2-4ac)) / 2a', x + 10, y);
    y += 16;
    text('x = (' + nf(-b, 1, 0) + ' \u00B1 \u221A(' + nf(b * b, 1, 0) + ' - ' + nf(4 * a * c, 1, 0) + ')) / ' + nf(2 * a, 1, 0), x + 10, y);
    y += 16;
    text('\u0394 = ' + nf(disc, 1, 2), x + 10, y);
    y += 16;
  }

  if (disc > 0) {
    let r1 = (-b + sqrt(disc)) / (2 * a);
    let r2 = (-b - sqrt(disc)) / (2 * a);
    fill('green');
    text('x\u2081 = ' + nf(r1, 1, 3) + ',  x\u2082 = ' + nf(r2, 1, 3), x + 10, y);
  } else if (abs(disc) < 0.001) {
    let r = -b / (2 * a);
    fill('goldenrod');
    text('x = ' + nf(r, 1, 3) + ' (repeated)', x + 10, y);
  } else {
    fill('red');
    text('No real solutions', x + 10, y);
  }
  y += 22;

  // --- Method 2: Completing the Square ---
  fill('darkblue');
  textSize(13);
  text('2. Completing the Square', x, y);
  y += 18;
  fill('black');
  textSize(12);

  let h = -b / (2 * a);
  let k = c - b * b / (4 * a);

  if (showSteps) {
    text('f(x) = ' + nf(a, 1, 1) + '(x - (' + nf(h, 1, 2) + '))\u00B2 + (' + nf(k, 1, 2) + ')', x + 10, y);
    y += 16;
    text('Vertex form: a(x - h)\u00B2 + k', x + 10, y);
    y += 16;
    text('h = ' + nf(h, 1, 2) + ', k = ' + nf(k, 1, 2), x + 10, y);
    y += 16;
  }

  if (disc >= 0) {
    fill('green');
    if (abs(disc) < 0.001) {
      text('x = ' + nf(h, 1, 3), x + 10, y);
    } else {
      let offset = sqrt(-k / a);
      text('x = ' + nf(h, 1, 3) + ' \u00B1 ' + nf(offset, 1, 3), x + 10, y);
    }
  } else {
    fill('red');
    text('No real solutions (k/a > 0)', x + 10, y);
  }
  y += 22;

  // --- Method 3: Factoring ---
  fill('darkblue');
  textSize(13);
  text('3. Factoring', x, y);
  y += 18;
  fill('black');
  textSize(12);

  if (disc >= 0) {
    let r1 = (-b + sqrt(disc)) / (2 * a);
    let r2 = (-b - sqrt(disc)) / (2 * a);
    // Check if roots are "nice" (within 0.01 of an integer or half-integer)
    let nice1 = abs(r1 * 2 - round(r1 * 2)) < 0.02;
    let nice2 = abs(r2 * 2 - round(r2 * 2)) < 0.02;

    if (nice1 && nice2) {
      if (showSteps) {
        text('Find factors of ac = ' + nf(a * c, 1, 1) + ' that sum to b = ' + b, x + 10, y);
        y += 16;
      }
      let aStr = (a === 1) ? '' : ((a === -1) ? '-' : nf(a, 1, 1));
      let r1Sign = r1 >= 0 ? ' - ' + nf(r1, 1, 1) : ' + ' + nf(-r1, 1, 1);
      let r2Sign = r2 >= 0 ? ' - ' + nf(r2, 1, 1) : ' + ' + nf(-r2, 1, 1);
      fill('green');
      text(aStr + '(x' + r1Sign + ')(x' + r2Sign + ') = 0', x + 10, y);
    } else {
      fill('orange');
      text('Roots are irrational \u2014 factoring not practical', x + 10, y);
    }
  } else {
    fill('red');
    text('Cannot factor (no real roots)', x + 10, y);
  }
}

function formatEquation(a, b, c) {
  let s = '';
  if (a === 1) s = 'x\u00B2';
  else if (a === -1) s = '-x\u00B2';
  else s = nf(a, 1, 1) + 'x\u00B2';

  if (b > 0) s += ' + ' + (b === 1 ? '' : b) + 'x';
  else if (b < 0) s += ' - ' + (b === -1 ? '' : abs(b)) + 'x';

  if (c > 0) s += ' + ' + c;
  else if (c < 0) s += ' - ' + abs(c);

  return s;
}

function updateCanvasSize() {
  let container = document.querySelector('main');
  if (container) {
    canvasWidth = max(600, container.offsetWidth);
  }
  canvasHeight = drawHeight + controlHeight;
  if (width !== canvasWidth || height !== canvasHeight) {
    resizeCanvas(canvasWidth, canvasHeight);
  }
}

function windowResized() {
  updateCanvasSize();
}
