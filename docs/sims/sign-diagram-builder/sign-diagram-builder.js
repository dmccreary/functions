// Sign Diagram Builder MicroSim
// CANVAS_HEIGHT: 500
let canvasWidth = 700;
let drawHeight = 400;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 55;
let defaultTextSize = 14;

let aSlider, root1Slider, root2Slider;
let inequalitySelect;
let showStepsBtn;
let showingSteps = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  aSlider = createSlider(-3, 3, 1, 0.5);
  aSlider.position(sliderLeftMargin, drawHeight + 10);
  aSlider.size(120);

  root1Slider = createSlider(-8, 8, 2, 0.5);
  root1Slider.position(sliderLeftMargin, drawHeight + 38);
  root1Slider.size(120);

  root2Slider = createSlider(-8, 8, 5, 0.5);
  root2Slider.position(sliderLeftMargin, drawHeight + 66);
  root2Slider.size(120);

  inequalitySelect = createSelect();
  inequalitySelect.position(sliderLeftMargin + 260, drawHeight + 10);
  inequalitySelect.option('> 0');
  inequalitySelect.option('\u2265 0');
  inequalitySelect.option('< 0');
  inequalitySelect.option('\u2264 0');
  inequalitySelect.selected('> 0');

  showStepsBtn = createButton('Show Step-by-Step');
  showStepsBtn.position(sliderLeftMargin + 260, drawHeight + 45);
  showStepsBtn.mousePressed(() => { showingSteps = !showingSteps; });

  describe('Sign diagram builder showing parabola with shaded regions and number line sign diagram', LABEL);
}

function draw() {
  updateCanvasSize();

  let a = aSlider.value();
  if (a === 0) a = 0.5;
  let r1 = root1Slider.value();
  let r2 = root2Slider.value();

  // Ensure r1 <= r2
  let rMin = min(r1, r2);
  let rMax = max(r1, r2);

  let ineq = inequalitySelect.value();

  // Compute b, c from roots: a(x - r1)(x - r2) = ax^2 - a(r1+r2)x + a*r1*r2
  let b = -a * (rMin + rMax);
  let c = a * rMin * rMax;

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // --- Title ---
  fill('black');
  noStroke();
  textSize(16);
  textAlign(CENTER, TOP);
  let eqStr = formatEquation(a, rMin, rMax);
  text('Sign Diagram: ' + eqStr + ' ' + ineq, canvasWidth / 2, 5);

  // Layout: top = graph (60%), bottom = number line (40%)
  let graphTop = 28;
  let graphBottom = drawHeight * 0.55;
  let numLineTop = drawHeight * 0.58;
  let numLineBottom = drawHeight - 10;

  // --- GRAPH ---
  drawParabolaGraph(a, rMin, rMax, ineq, graphTop, graphBottom);

  // --- NUMBER LINE / SIGN DIAGRAM ---
  drawSignDiagram(a, rMin, rMax, ineq, numLineTop, numLineBottom);

  // --- Step-by-step panel ---
  if (showingSteps) {
    drawSteps(a, rMin, rMax, ineq);
  }

  // --- Control labels ---
  fill('black');
  noStroke();
  textSize(12);
  textAlign(LEFT, CENTER);
  text('a:', sliderLeftMargin - 15, drawHeight + 18);
  text('r\u2081:', sliderLeftMargin - 20, drawHeight + 46);
  text('r\u2082:', sliderLeftMargin - 20, drawHeight + 74);
  textAlign(LEFT, CENTER);
  text(nf(a, 1, 1), sliderLeftMargin + 125, drawHeight + 18);
  text(nf(r1, 1, 1), sliderLeftMargin + 125, drawHeight + 46);
  text(nf(r2, 1, 1), sliderLeftMargin + 125, drawHeight + 74);

  textAlign(LEFT, CENTER);
  text('Inequality:', sliderLeftMargin + 195, drawHeight + 18);
}

function drawParabolaGraph(a, rMin, rMax, ineq, top, bottom) {
  let plotX = margin;
  let plotW = canvasWidth - 2 * margin;
  let plotH = bottom - top;

  // X range centered on roots
  let mid = (rMin + rMax) / 2;
  let spread = max(rMax - rMin, 4);
  let xMin = mid - spread * 1.2;
  let xMax = mid + spread * 1.2;

  // Y range
  let vx = (rMin + rMax) / 2;
  let vy = a * (vx - rMin) * (vx - rMax);
  let yPad = max(abs(vy) * 1.5, 5);
  let yMin = min(vy, 0) - yPad * 0.3;
  let yMax = max(vy, 0) + yPad * 0.3;
  if (yMin > -2) yMin = -2;
  if (yMax < 2) yMax = 2;

  function toSX(x) { return plotX + (x - xMin) / (xMax - xMin) * plotW; }
  function toSY(y) { return top + plotH - (y - yMin) / (yMax - yMin) * plotH; }

  // Shaded regions based on inequality
  let wantsPositive = ineq === '> 0' || ineq === '\u2265 0';
  let axisY = toSY(0);

  // Shade positive (above x-axis) or negative (below x-axis)
  noStroke();
  for (let px = plotX; px <= plotX + plotW; px += 1) {
    let x = xMin + (px - plotX) / plotW * (xMax - xMin);
    let y = a * (x - rMin) * (x - rMax);
    let sy = toSY(y);

    if (wantsPositive && y > 0) {
      fill(144, 238, 144, 60); // green shade
      rect(px, min(sy, axisY), 1, abs(sy - axisY));
    } else if (!wantsPositive && y < 0) {
      fill(255, 160, 160, 60); // red shade
      rect(px, min(sy, axisY), 1, abs(sy - axisY));
    }
  }

  // Grid
  stroke(230);
  strokeWeight(0.5);
  for (let gx = ceil(xMin); gx <= floor(xMax); gx++) {
    line(toSX(gx), top, toSX(gx), bottom);
  }
  for (let gy = ceil(yMin); gy <= floor(yMax); gy++) {
    line(plotX, toSY(gy), plotX + plotW, toSY(gy));
  }

  // Axes
  stroke('gray');
  strokeWeight(1);
  if (xMin <= 0 && xMax >= 0) line(toSX(0), top, toSX(0), bottom);
  if (yMin <= 0 && yMax >= 0) line(plotX, toSY(0), plotX + plotW, toSY(0));

  // Axis tick labels
  fill('gray');
  noStroke();
  textSize(9);
  textAlign(CENTER, TOP);
  for (let gx = ceil(xMin); gx <= floor(xMax); gx++) {
    if (gx === 0) continue;
    text(gx, toSX(gx), toSY(0) + 2);
  }

  // Parabola curve
  stroke('blue');
  strokeWeight(2);
  noFill();
  beginShape();
  for (let px = plotX; px <= plotX + plotW; px += 1) {
    let x = xMin + (px - plotX) / plotW * (xMax - xMin);
    let y = a * (x - rMin) * (x - rMax);
    let sy = toSY(y);
    if (sy >= top - 10 && sy <= bottom + 10) {
      vertex(px, sy);
    }
  }
  endShape();

  // Roots marked
  fill('red');
  noStroke();
  ellipse(toSX(rMin), toSY(0), 10, 10);
  if (abs(rMin - rMax) > 0.01) {
    ellipse(toSX(rMax), toSY(0), 10, 10);
  }
  textSize(11);
  textAlign(CENTER, TOP);
  text(nf(rMin, 1, 1), toSX(rMin), toSY(0) + 8);
  if (abs(rMin - rMax) > 0.01) {
    text(nf(rMax, 1, 1), toSX(rMax), toSY(0) + 8);
  }

  strokeWeight(1);
}

function drawSignDiagram(a, rMin, rMax, ineq, top, bottom) {
  let midY = (top + bottom) / 2;
  let nlLeft = margin + 20;
  let nlRight = canvasWidth - margin - 20;
  let nlW = nlRight - nlLeft;

  // Section label
  fill('black');
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);
  text('Number Line Sign Diagram', margin, top);

  // Number line
  stroke('black');
  strokeWeight(2);
  line(nlLeft, midY, nlRight, midY);

  // Arrows at ends
  line(nlLeft, midY, nlLeft + 8, midY - 5);
  line(nlLeft, midY, nlLeft + 8, midY + 5);
  line(nlRight, midY, nlRight - 8, midY - 5);
  line(nlRight, midY, nlRight - 8, midY + 5);

  // Map roots to number line positions
  let spread = max(rMax - rMin, 2);
  let xMin = rMin - spread * 0.6;
  let xMax = rMax + spread * 0.6;

  function toNL(x) { return nlLeft + (x - xMin) / (xMax - xMin) * nlW; }

  // Root markers
  let inclusive = ineq === '\u2265 0' || ineq === '\u2264 0';
  strokeWeight(2);

  // Root 1
  let rx1 = toNL(rMin);
  if (inclusive) {
    fill('red');
    stroke('red');
  } else {
    noFill();
    stroke('red');
  }
  ellipse(rx1, midY, 12, 12);

  // Root 2
  if (abs(rMin - rMax) > 0.01) {
    let rx2 = toNL(rMax);
    if (inclusive) {
      fill('red');
      stroke('red');
    } else {
      noFill();
      stroke('red');
    }
    ellipse(rx2, midY, 12, 12);
  }

  // Root labels
  fill('black');
  noStroke();
  textSize(12);
  textAlign(CENTER, TOP);
  text(nf(rMin, 1, 1), rx1, midY + 10);
  if (abs(rMin - rMax) > 0.01) {
    text(nf(rMax, 1, 1), toNL(rMax), midY + 10);
  }

  // Signs in regions
  textSize(20);
  textAlign(CENTER, BOTTOM);

  // Left region (x < rMin)
  let leftSign = (a > 0) ? '+' : '-';
  let midSign = (a > 0) ? '-' : '+';
  let rightSign = (a > 0) ? '+' : '-';

  if (abs(rMin - rMax) < 0.01) {
    // Repeated root: sign doesn't change
    midSign = leftSign;
    rightSign = leftSign;
  }

  let leftX = (nlLeft + rx1) / 2;
  fill(leftSign === '+' ? 'green' : 'red');
  text(leftSign, leftX, midY - 8);

  if (abs(rMin - rMax) > 0.01) {
    let midX = (rx1 + toNL(rMax)) / 2;
    fill(midSign === '+' ? 'green' : 'red');
    text(midSign, midX, midY - 8);

    let rightX = (toNL(rMax) + nlRight) / 2;
    fill(rightSign === '+' ? 'green' : 'red');
    text(rightSign, rightX, midY - 8);
  } else {
    let rightX = (rx1 + nlRight) / 2;
    fill(rightSign === '+' ? 'green' : 'red');
    text(rightSign, rightX, midY - 8);
  }

  // Solution interval highlight
  let wantsPositive = ineq === '> 0' || ineq === '\u2265 0';
  stroke('dodgerblue');
  strokeWeight(4);
  noFill();

  if (abs(rMin - rMax) < 0.01) {
    // Repeated root
    if (wantsPositive) {
      // Entire line except root (or including if >=)
      line(nlLeft, midY + 20, rx1 - 8, midY + 20);
      line(rx1 + 8, midY + 20, nlRight, midY + 20);
    } else {
      // Only the root if <=, nothing if <
      if (inclusive) {
        fill('dodgerblue');
        noStroke();
        ellipse(rx1, midY + 20, 6, 6);
      }
    }
  } else {
    let rx2 = toNL(rMax);
    if (a > 0 && wantsPositive) {
      // Positive outside roots
      line(nlLeft, midY + 20, rx1, midY + 20);
      line(rx2, midY + 20, nlRight, midY + 20);
    } else if (a > 0 && !wantsPositive) {
      // Negative between roots
      line(rx1, midY + 20, rx2, midY + 20);
    } else if (a < 0 && wantsPositive) {
      // Positive between roots
      line(rx1, midY + 20, rx2, midY + 20);
    } else {
      // Negative outside roots
      line(nlLeft, midY + 20, rx1, midY + 20);
      line(rx2, midY + 20, nlRight, midY + 20);
    }
  }

  // Solution interval text
  noStroke();
  fill('dodgerblue');
  textSize(13);
  textAlign(CENTER, TOP);
  let solText = getSolutionText(a, rMin, rMax, ineq);
  text('Solution: ' + solText, canvasWidth / 2, bottom - 18);

  strokeWeight(1);
}

function getSolutionText(a, rMin, rMax, ineq) {
  let wantsPositive = ineq === '> 0' || ineq === '\u2265 0';
  let inclusive = ineq === '\u2265 0' || ineq === '\u2264 0';
  let lo = (inclusive) ? '[' : '(';
  let lc = (inclusive) ? ']' : ')';
  let r1s = nf(rMin, 1, 1);
  let r2s = nf(rMax, 1, 1);

  if (abs(rMin - rMax) < 0.01) {
    if (wantsPositive) {
      if (inclusive) return '(-\u221E, \u221E)  (all real numbers)';
      return '(-\u221E, ' + r1s + ') \u222A (' + r1s + ', \u221E)';
    } else {
      if (inclusive) return 'x = ' + r1s;
      return 'No solution';
    }
  }

  if ((a > 0 && wantsPositive) || (a < 0 && !wantsPositive)) {
    // Outside the roots
    return '(-\u221E, ' + r1s + lc + ' \u222A ' + lo + r2s + ', \u221E)';
  } else {
    // Between the roots
    return lo + r1s + ', ' + r2s + lc;
  }
}

function drawSteps(a, rMin, rMax, ineq) {
  // Semi-transparent overlay
  fill(255, 255, 255, 220);
  stroke('gray');
  strokeWeight(1);
  let boxX = canvasWidth * 0.55;
  let boxY = 30;
  let boxW = canvasWidth * 0.42;
  let boxH = 160;
  rect(boxX, boxY, boxW, boxH, 8);

  fill('black');
  noStroke();
  textSize(13);
  textAlign(LEFT, TOP);
  let x = boxX + 10;
  let y = boxY + 10;

  text('Step-by-Step:', x, y);
  y += 20;
  textSize(11);
  text('1. Find the roots: x = ' + nf(rMin, 1, 1) + ' and x = ' + nf(rMax, 1, 1), x, y);
  y += 16;
  text('2. Mark roots on number line', x, y);
  y += 16;
  text('3. a = ' + nf(a, 1, 1) + (a > 0 ? ' > 0 (opens up)' : ' < 0 (opens down)'), x, y);
  y += 16;
  text('4. Test sign in each interval:', x, y);
  y += 16;

  let testLeft = rMin - 1;
  let testMid = (rMin + rMax) / 2;
  let testRight = rMax + 1;
  let vLeft = a * (testLeft - rMin) * (testLeft - rMax);
  let vMid = a * (testMid - rMin) * (testMid - rMax);
  let vRight = a * (testRight - rMin) * (testRight - rMax);

  text('   f(' + nf(testLeft, 1, 1) + ') = ' + nf(vLeft, 1, 1) + (vLeft > 0 ? ' (+)' : ' (-)'), x, y);
  y += 14;
  if (abs(rMin - rMax) > 0.01) {
    text('   f(' + nf(testMid, 1, 1) + ') = ' + nf(vMid, 1, 1) + (vMid > 0 ? ' (+)' : ' (-)'), x, y);
    y += 14;
  }
  text('   f(' + nf(testRight, 1, 1) + ') = ' + nf(vRight, 1, 1) + (vRight > 0 ? ' (+)' : ' (-)'), x, y);
  y += 16;

  fill('dodgerblue');
  text('5. Solution: ' + getSolutionText(a, rMin, rMax, ineq), x, y);
}

function formatEquation(a, rMin, rMax) {
  let aStr = '';
  if (a === 1) aStr = '';
  else if (a === -1) aStr = '-';
  else aStr = nf(a, 1, 1);

  let r1Str = rMin >= 0 ? '(x - ' + nf(rMin, 1, 1) + ')' : '(x + ' + nf(-rMin, 1, 1) + ')';
  let r2Str = rMax >= 0 ? '(x - ' + nf(rMax, 1, 1) + ')' : '(x + ' + nf(-rMax, 1, 1) + ')';
  return aStr + r1Str + r2Str;
}

function updateCanvasSize() {
  let container = document.querySelector('main');
  if (container) {
    canvasWidth = max(550, container.offsetWidth);
  }
  canvasHeight = drawHeight + controlHeight;
  if (width !== canvasWidth || height !== canvasHeight) {
    resizeCanvas(canvasWidth, canvasHeight);
  }
}

function windowResized() {
  updateCanvasSize();
}
