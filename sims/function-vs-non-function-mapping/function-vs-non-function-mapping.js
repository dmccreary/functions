// Function vs Non-Function Mapping MicroSim
// CANVAS_HEIGHT: 580
let canvasWidth = 400;
let drawHeight = 480;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

let randomiseBtn, modeBtn, clearBtn;
let mode = 'demo'; // 'demo' or 'build'
let buildSide = 'left'; // which side user is drawing on

// Mapping data
let leftInputs, leftOutputs, leftArrows;
let rightInputs, rightOutputs, rightArrows;

// Build mode state
let buildLeftArrows = [];
let buildRightArrows = [];
let dragging = false;
let dragSide = null;
let dragFromIdx = -1;
let dragMouseX = 0;
let dragMouseY = 0;

// Element labels
let inputLabels = ['a', 'b', 'c', 'd'];
let outputLabels = ['1', '2', '3', '4'];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  canvas.mousePressed(onMousePressed);
  canvas.mouseReleased(onMouseReleased);

  randomiseBtn = createButton('Randomise');
  randomiseBtn.position(10, drawHeight + 10);
  randomiseBtn.mousePressed(generateRandomMappings);

  modeBtn = createButton('Build Your Own');
  modeBtn.position(110, drawHeight + 10);
  modeBtn.mousePressed(toggleMode);

  clearBtn = createButton('Clear');
  clearBtn.position(240, drawHeight + 10);
  clearBtn.mousePressed(clearBuild);

  generateRandomMappings();
  describe('Two side-by-side mapping diagrams comparing functions and non-functions', LABEL);
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

  // Title
  fill('black');
  noStroke();
  textSize(18);
  textAlign(CENTER, TOP);
  if (mode === 'demo') {
    text('Function vs Non-Function Mapping', canvasWidth / 2, 8);
  } else {
    text('Build Your Own Mapping', canvasWidth / 2, 8);
  }

  let halfW = canvasWidth / 2;

  if (mode === 'demo') {
    drawMappingDiagram(margin, 40, halfW - margin * 2, drawHeight - 80,
      inputLabels, outputLabels, leftArrows, true, 'Function');
    drawMappingDiagram(halfW + margin, 40, halfW - margin * 2, drawHeight - 80,
      inputLabels, outputLabels, rightArrows, false, 'NOT a Function');
  } else {
    drawBuildDiagram(margin, 40, halfW - margin * 2, drawHeight - 80,
      inputLabels, outputLabels, buildLeftArrows, 'left', 'Left Mapping');
    drawBuildDiagram(halfW + margin, 40, halfW - margin * 2, drawHeight - 80,
      inputLabels, outputLabels, buildRightArrows, 'right', 'Right Mapping');
  }

  // Divider line
  stroke(200);
  strokeWeight(1);
  line(halfW, 40, halfW, drawHeight - 30);

  // Control area labels
  noStroke();
  fill('black');
  textSize(14);
  textAlign(LEFT, CENTER);
  if (mode === 'demo') {
    text('Click Randomise for new examples', 10, drawHeight + 50);
  } else {
    text('Drag from input to output to draw arrows', 10, drawHeight + 50);
    // Show classification
    let leftIsFunc = isFunction(buildLeftArrows, 4);
    let rightIsFunc = isFunction(buildRightArrows, 4);
    textSize(13);
    if (buildLeftArrows.length > 0) {
      fill(leftIsFunc ? 'green' : 'red');
      text('Left: ' + (leftIsFunc ? 'Function' : 'Not a function'), 10, drawHeight + 75);
    }
    if (buildRightArrows.length > 0) {
      fill(rightIsFunc ? 'green' : 'red');
      text('Right: ' + (rightIsFunc ? 'Function' : 'Not a function'), halfW + 10, drawHeight + 75);
    }
  }
}

function drawMappingDiagram(x, y, w, h, inputs, outputs, arrows, isFunc, title) {
  let inputX = x + 40;
  let outputX = x + w - 40;
  let topPad = 50;
  let spacing = (h - topPad - 20) / (inputs.length - 1);

  // Title
  noStroke();
  fill(isFunc ? 'green' : 'red');
  textSize(15);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text(title, x + w / 2, y);
  textStyle(NORMAL);

  // Input set oval
  noFill();
  stroke(100);
  strokeWeight(1.5);
  ellipse(inputX, y + topPad + spacing * 1.5, 65, h - topPad);

  // Output set oval
  ellipse(outputX, y + topPad + spacing * 1.5, 65, h - topPad);

  // Set labels
  noStroke();
  fill(80);
  textSize(13);
  textAlign(CENTER, BOTTOM);
  text('Domain', inputX, y + topPad - 10);
  text('Range', outputX, y + topPad - 10);

  // Draw elements
  for (let i = 0; i < inputs.length; i++) {
    let iy = y + topPad + i * spacing;

    // Input dot and label
    fill(50, 100, 200);
    noStroke();
    ellipse(inputX, iy, 12, 12);
    fill('white');
    textSize(12);
    textAlign(CENTER, CENTER);
    text(inputs[i], inputX, iy - 1);
  }

  for (let i = 0; i < outputs.length; i++) {
    let oy = y + topPad + i * spacing;

    // Output dot and label
    fill(200, 100, 50);
    noStroke();
    ellipse(outputX, oy, 12, 12);
    fill('white');
    textSize(12);
    textAlign(CENTER, CENTER);
    text(outputs[i], outputX, oy - 1);
  }

  // Draw arrows
  for (let arr of arrows) {
    let fromY = y + topPad + arr.from * spacing;
    let toY = y + topPad + arr.to * spacing;

    if (!isFunc && arr.highlight) {
      stroke(220, 50, 50);
      strokeWeight(2.5);
    } else {
      stroke(80, 80, 80);
      strokeWeight(1.5);
    }
    drawArrow(inputX + 8, fromY, outputX - 8, toY);
  }

  // Explanation text
  noStroke();
  textSize(11);
  textAlign(CENTER, BOTTOM);
  if (isFunc) {
    fill(0, 120, 0);
    text('Each input maps to', x + w / 2, y + h - 18);
    text('exactly one output', x + w / 2, y + h - 4);
  } else {
    fill(200, 0, 0);
    text('An input maps to', x + w / 2, y + h - 18);
    text('more than one output', x + w / 2, y + h - 4);
  }
}

function drawBuildDiagram(x, y, w, h, inputs, outputs, arrows, side, title) {
  let inputX = x + 40;
  let outputX = x + w - 40;
  let topPad = 50;
  let spacing = (h - topPad - 20) / (inputs.length - 1);

  // Title
  noStroke();
  fill(60);
  textSize(15);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text(title, x + w / 2, y);
  textStyle(NORMAL);

  // Ovals
  noFill();
  stroke(100);
  strokeWeight(1.5);
  ellipse(inputX, y + topPad + spacing * 1.5, 65, h - topPad);
  ellipse(outputX, y + topPad + spacing * 1.5, 65, h - topPad);

  // Set labels
  noStroke();
  fill(80);
  textSize(13);
  textAlign(CENTER, BOTTOM);
  text('Domain', inputX, y + topPad - 10);
  text('Range', outputX, y + topPad - 10);

  // Draw elements
  for (let i = 0; i < inputs.length; i++) {
    let iy = y + topPad + i * spacing;
    fill(50, 100, 200);
    noStroke();
    ellipse(inputX, iy, 12, 12);
    fill('white');
    textSize(12);
    textAlign(CENTER, CENTER);
    text(inputs[i], inputX, iy - 1);
  }

  for (let i = 0; i < outputs.length; i++) {
    let oy = y + topPad + i * spacing;
    fill(200, 100, 50);
    noStroke();
    ellipse(outputX, oy, 12, 12);
    fill('white');
    textSize(12);
    textAlign(CENTER, CENTER);
    text(outputs[i], outputX, oy - 1);
  }

  // Draw existing arrows
  for (let arr of arrows) {
    let fromY = y + topPad + arr.from * spacing;
    let toY = y + topPad + arr.to * spacing;
    stroke(80);
    strokeWeight(1.5);
    drawArrow(inputX + 8, fromY, outputX - 8, toY);
  }

  // Draw dragging arrow
  if (dragging && dragSide === side) {
    stroke(100, 100, 255);
    strokeWeight(2);
    let fromY = y + topPad + dragFromIdx * spacing;
    line(inputX + 8, fromY, mouseX, mouseY);
  }

  // Store positions for hit testing
  if (side === 'left') {
    leftInputs = [];
    leftOutputs = [];
    for (let i = 0; i < inputs.length; i++) {
      leftInputs.push({ x: inputX, y: y + topPad + i * spacing });
      leftOutputs.push({ x: outputX, y: y + topPad + i * spacing });
    }
  } else {
    rightInputs = [];
    rightOutputs = [];
    for (let i = 0; i < inputs.length; i++) {
      rightInputs.push({ x: inputX, y: y + topPad + i * spacing });
      rightOutputs.push({ x: outputX, y: y + topPad + i * spacing });
    }
  }
}

function drawArrow(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
  let angle = atan2(y2 - y1, x2 - x1);
  let arrowSize = 8;
  fill(red(drawingContext.strokeStyle), green(drawingContext.strokeStyle), blue(drawingContext.strokeStyle));
  triangle(
    x2, y2,
    x2 - arrowSize * cos(angle - PI / 6), y2 - arrowSize * sin(angle - PI / 6),
    x2 - arrowSize * cos(angle + PI / 6), y2 - arrowSize * sin(angle + PI / 6)
  );
}

function generateRandomMappings() {
  // Left: always a valid function (each input maps to exactly one output)
  leftArrows = [];
  for (let i = 0; i < 4; i++) {
    leftArrows.push({ from: i, to: floor(random(4)), highlight: false });
  }

  // Right: not a function (at least one input maps to two outputs)
  rightArrows = [];
  let doubleIdx = floor(random(4));
  for (let i = 0; i < 4; i++) {
    if (i === doubleIdx) {
      let t1 = floor(random(4));
      let t2 = floor(random(4));
      while (t2 === t1) t2 = floor(random(4));
      rightArrows.push({ from: i, to: t1, highlight: true });
      rightArrows.push({ from: i, to: t2, highlight: true });
    } else {
      rightArrows.push({ from: i, to: floor(random(4)), highlight: false });
    }
  }
}

function isFunction(arrows, inputCount) {
  // Check: every input has at most one output, and at least one arrow exists
  if (arrows.length === 0) return false;
  let counts = {};
  for (let arr of arrows) {
    if (counts[arr.from] !== undefined) return false;
    counts[arr.from] = true;
  }
  return true;
}

function toggleMode() {
  if (mode === 'demo') {
    mode = 'build';
    modeBtn.html('View Examples');
    buildLeftArrows = [];
    buildRightArrows = [];
  } else {
    mode = 'demo';
    modeBtn.html('Build Your Own');
    generateRandomMappings();
  }
}

function clearBuild() {
  buildLeftArrows = [];
  buildRightArrows = [];
}

function onMousePressed() {
  if (mode !== 'build') return;
  if (mouseY > drawHeight) return;

  // Check if clicking on an input dot
  let sides = [
    { inputs: leftInputs, side: 'left' },
    { inputs: rightInputs, side: 'right' }
  ];

  for (let s of sides) {
    if (!s.inputs) continue;
    for (let i = 0; i < s.inputs.length; i++) {
      if (dist(mouseX, mouseY, s.inputs[i].x, s.inputs[i].y) < 15) {
        dragging = true;
        dragSide = s.side;
        dragFromIdx = i;
        return;
      }
    }
  }
}

function onMouseReleased() {
  if (!dragging) return;

  let outputs = dragSide === 'left' ? leftOutputs : rightOutputs;
  let arrows = dragSide === 'left' ? buildLeftArrows : buildRightArrows;

  if (outputs) {
    for (let i = 0; i < outputs.length; i++) {
      if (dist(mouseX, mouseY, outputs[i].x, outputs[i].y) < 15) {
        arrows.push({ from: dragFromIdx, to: i });
        break;
      }
    }
  }

  dragging = false;
  dragSide = null;
  dragFromIdx = -1;
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
