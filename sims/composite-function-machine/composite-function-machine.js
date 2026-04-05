// Composite Function Machine MicroSim
// CANVAS_HEIGHT: 450
let canvasWidth = 400;
let drawHeight = 350;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let defaultTextSize = 14;
let sliderLeftMargin = 150;

let fSelect, gSelect;
let inputSlider;
let swapCheckbox;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Controls
  fSelect = createSelect();
  fSelect.position(40, drawHeight + 8);
  fSelect.option('x²');
  fSelect.option('2x+1');
  fSelect.option('√x');
  fSelect.option('1/x');
  fSelect.option('x-3');
  fSelect.selected('x²');

  gSelect = createSelect();
  gSelect.position(160, drawHeight + 8);
  gSelect.option('x+4');
  gSelect.option('3x');
  gSelect.option('x²');
  gSelect.option('x-1');
  gSelect.option('2x+5');
  gSelect.selected('x+4');

  inputSlider = createSlider(-5, 5, 2, 0.5);
  inputSlider.position(sliderLeftMargin, drawHeight + 42);
  inputSlider.size(200);

  swapCheckbox = createCheckbox('Swap Order (g∘f)', false);
  swapCheckbox.position(10, drawHeight + 68);

  describe('Two function machines connected in series showing composite function evaluation', LABEL);
}

function evalFunc(name, x) {
  if (name === 'x²') return x * x;
  if (name === '2x+1') return 2 * x + 1;
  if (name === '√x') return x >= 0 ? sqrt(x) : NaN;
  if (name === '1/x') return x !== 0 ? 1 / x : NaN;
  if (name === 'x-3') return x - 3;
  if (name === 'x+4') return x + 4;
  if (name === '3x') return 3 * x;
  if (name === 'x-1') return x - 1;
  if (name === '2x+5') return 2 * x + 5;
  return NaN;
}

function getAlgebraic(outerName, innerName) {
  // Returns simplified composite expression string
  return outerName + '(' + innerName + ')';
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

  let xVal = inputSlider.value();
  let fName = fSelect.value();
  let gName = gSelect.value();

  let swapped = swapCheckbox.checked();
  let firstName, secondName;
  if (!swapped) {
    // (f ∘ g)(x) = f(g(x)) -> g first, then f
    firstName = gName;
    secondName = fName;
  } else {
    // (g ∘ f)(x) = g(f(x)) -> f first, then g
    firstName = fName;
    secondName = gName;
  }

  let intermediate = evalFunc(firstName, xVal);
  let output = evalFunc(secondName, intermediate);
  let domainError = isNaN(intermediate);
  let rangeError = !domainError && isNaN(output);

  // Title
  noStroke();
  fill('black');
  textSize(20);
  textAlign(CENTER, TOP);
  text('Composite Function Machine', canvasWidth / 2, 10);

  // Subtitle
  textSize(18);
  if (!swapped) {
    text('(f ∘ g)(x) = f(g(x))', canvasWidth / 2, 35);
  } else {
    text('(g ∘ f)(x) = g(f(x))', canvasWidth / 2, 35);
  }

  // Layout
  let boxW = canvasWidth * 0.22;
  let boxH = 80;
  let yCenter = 130;
  let gap = canvasWidth * 0.08;
  let totalW = boxW * 2 + gap;
  let startX = (canvasWidth - totalW) / 2;

  // Input arrow and value
  let inputX = startX - 50;
  stroke('black');
  strokeWeight(2);
  line(inputX, yCenter, startX - 5, yCenter);
  // Arrowhead
  fill('black');
  noStroke();
  triangle(startX - 5, yCenter - 5, startX - 5, yCenter + 5, startX + 2, yCenter);

  noStroke();
  fill('black');
  textSize(16);
  textAlign(CENTER, CENTER);
  text('x = ' + nf(xVal, 0, 1), inputX - 5, yCenter - 22);

  // First machine box
  let box1X = startX;
  fill('lightyellow');
  stroke('goldenrod');
  strokeWeight(2);
  rect(box1X, yCenter - boxH / 2, boxW, boxH, 8);
  noStroke();
  fill('black');
  textSize(13);
  textAlign(CENTER, CENTER);
  text(firstName === fName ? 'f' : 'g', box1X + boxW / 2, yCenter - 20);
  textSize(15);
  fill('darkblue');
  text(firstName, box1X + boxW / 2, yCenter + 5);

  // Intermediate arrow and value
  let midX = box1X + boxW;
  let midEndX = midX + gap;
  stroke('black');
  strokeWeight(2);
  line(midX, yCenter, midEndX - 5, yCenter);
  fill('black');
  noStroke();
  triangle(midEndX - 5, yCenter - 5, midEndX - 5, yCenter + 5, midEndX + 2, yCenter);

  noStroke();
  textSize(14);
  textAlign(CENTER, CENTER);
  if (domainError) {
    fill('red');
    text('undefined', midX + gap / 2, yCenter - 20);
  } else {
    fill('darkgreen');
    text(nf(intermediate, 0, 2), midX + gap / 2, yCenter - 20);
  }

  // Second machine box
  let box2X = midEndX;
  fill('lavender');
  stroke('mediumpurple');
  strokeWeight(2);
  rect(box2X, yCenter - boxH / 2, boxW, boxH, 8);
  noStroke();
  fill('black');
  textSize(13);
  textAlign(CENTER, CENTER);
  text(secondName === fName ? 'f' : 'g', box2X + boxW / 2, yCenter - 20);
  textSize(15);
  fill('darkblue');
  text(secondName, box2X + boxW / 2, yCenter + 5);

  // Output arrow and value
  let outStartX = box2X + boxW;
  let outEndX = outStartX + 50;
  stroke('black');
  strokeWeight(2);
  line(outStartX, yCenter, outEndX - 5, yCenter);
  fill('black');
  noStroke();
  triangle(outEndX - 5, yCenter - 5, outEndX - 5, yCenter + 5, outEndX + 2, yCenter);

  noStroke();
  textSize(16);
  textAlign(CENTER, CENTER);
  if (domainError || rangeError) {
    fill('red');
    text('undefined', outEndX + 5, yCenter - 22);
  } else {
    fill('darkred');
    text(nf(output, 0, 2), outEndX + 5, yCenter - 22);
  }

  // Domain error warning
  if (domainError) {
    fill('red');
    noStroke();
    textSize(14);
    textAlign(CENTER, CENTER);
    text('⚠ Input ' + nf(xVal, 0, 1) + ' is outside the domain of ' + firstName, canvasWidth / 2, yCenter + 65);
  } else if (rangeError) {
    fill('red');
    noStroke();
    textSize(14);
    textAlign(CENTER, CENTER);
    text('⚠ Intermediate value ' + nf(intermediate, 0, 2) + ' is outside the domain of ' + secondName, canvasWidth / 2, yCenter + 65);
  }

  // Algebraic expression
  noStroke();
  fill('black');
  textSize(15);
  textAlign(CENTER, CENTER);
  let compLabel = !swapped ? '(f ∘ g)' : '(g ∘ f)';
  let exprStr = compLabel + '(' + nf(xVal, 0, 1) + ') = ' + secondName + '(' + firstName.replace('x', nf(xVal, 0, 1)) + ')';
  text(exprStr, canvasWidth / 2, yCenter + 90);

  if (!domainError && !rangeError) {
    fill('darkblue');
    textSize(15);
    text('= ' + secondName.replace('x', nf(intermediate, 0, 2)) + ' = ' + nf(output, 0, 2), canvasWidth / 2, yCenter + 112);
  }

  // Summary at bottom of draw area
  noStroke();
  fill('black');
  textSize(14);
  textAlign(CENTER, CENTER);
  let summaryY = drawHeight - 30;
  if (!domainError && !rangeError) {
    text(compLabel + '(x): apply ' + firstName + ' first, then ' + secondName, canvasWidth / 2, summaryY);
  }

  // Control labels
  noStroke();
  fill('black');
  textSize(16);
  textAlign(LEFT, CENTER);
  text('f(x):', 10, drawHeight + 18);
  text('g(x):', 130, drawHeight + 18);
  text('Input x: ' + nf(xVal, 0, 1), sliderLeftMargin - 90, drawHeight + 52);
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
