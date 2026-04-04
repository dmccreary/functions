// Expression Builder MicroSim
// CANVAS_HEIGHT: 530
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

let terms = [];
let simplified = '';
let simplifyBtn, clearBtn;
let coeffSlider;
let selectedVar = 'x';
let varSelect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  // Buttons
  clearBtn = createButton('Clear');
  clearBtn.position(10, drawHeight + 5);
  clearBtn.mousePressed(() => { terms = []; simplified = ''; });

  simplifyBtn = createButton('Simplify');
  simplifyBtn.position(70, drawHeight + 5);
  simplifyBtn.mousePressed(simplifyExpression);

  varSelect = createSelect();
  varSelect.position(160, drawHeight + 8);
  varSelect.option('x');
  varSelect.option('y');
  varSelect.option('x²');
  varSelect.option('y²');
  varSelect.option('const');
  varSelect.changed(() => selectedVar = varSelect.value());

  coeffSlider = createSlider(-5, 5, 1, 1);
  coeffSlider.position(140, drawHeight + 42);
  coeffSlider.size(canvasWidth - 140 - margin);

  describe('Build algebraic expressions by adding terms and simplifying them', LABEL);
}

function draw() {
  updateCanvasSize();

  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill('black');
  noStroke();
  textSize(20);
  textAlign(CENTER, TOP);
  text('Expression Builder', canvasWidth / 2, 8);

  // Instructions
  textSize(14);
  fill('gray');
  textAlign(CENTER, CENTER);
  text('Select a variable type, set the coefficient, then click "Add Term"', canvasWidth / 2, 45);

  // Current expression
  textSize(18);
  fill('black');
  textAlign(LEFT, CENTER);
  noStroke();
  let expr = buildExpressionString();
  if (expr === '') expr = '(empty)';

  // Expression box
  fill(255, 255, 240);
  stroke(200);
  rect(margin, 70, canvasWidth - 2 * margin, 50, 8);
  noStroke();
  fill('black');
  textSize(20);
  textAlign(CENTER, CENTER);
  text(expr, canvasWidth / 2, 95);

  // Term tiles
  textSize(14);
  textAlign(CENTER, CENTER);
  let tileY = 150;
  let tileX = margin;
  let tileW = 70;
  let tileH = 40;

  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(16);
  text('Terms:', margin, tileY - 25);

  for (let i = 0; i < terms.length; i++) {
    let col;
    if (terms[i].variable.includes('x')) col = color(100, 150, 255, 180);
    else if (terms[i].variable.includes('y')) col = color(100, 200, 100, 180);
    else col = color(200, 180, 100, 180);

    if (tileX + tileW > canvasWidth - margin) {
      tileX = margin;
      tileY += tileH + 10;
    }

    fill(col);
    stroke(150);
    rect(tileX, tileY, tileW, tileH, 8);
    noStroke();
    fill('black');
    textSize(16);
    textAlign(CENTER, CENTER);
    text(termToString(terms[i]), tileX + tileW / 2, tileY + tileH / 2);

    tileX += tileW + 8;
  }

  // Simplified result
  if (simplified !== '') {
    let resultY = 320;
    fill(220, 255, 220);
    stroke(100, 180, 100);
    rect(margin, resultY, canvasWidth - 2 * margin, 60, 8);
    noStroke();
    fill('darkgreen');
    textSize(14);
    textAlign(CENTER, TOP);
    text('Simplified:', canvasWidth / 2, resultY + 5);
    textSize(22);
    textAlign(CENTER, CENTER);
    text(simplified, canvasWidth / 2, resultY + 38);
  }

  // Add term button in drawing area
  fill(70, 130, 230);
  noStroke();
  rect(canvasWidth - margin - 90, 70, 80, 50, 8);
  fill('white');
  textSize(14);
  textAlign(CENTER, CENTER);
  text('Add Term', canvasWidth - margin - 50, 95);

  // Control labels
  noStroke();
  fill('black');
  textSize(defaultTextSize);
  textAlign(LEFT, CENTER);
  let coeff = coeffSlider.value();
  text('Coeff: ' + coeff, 10, drawHeight + 55);
}

function mousePressed() {
  // Check Add Term button
  if (mouseX > canvasWidth - margin - 90 && mouseX < canvasWidth - margin - 10 &&
      mouseY > 70 && mouseY < 120) {
    let c = coeffSlider.value();
    if (c !== 0) {
      terms.push({ coeff: c, variable: selectedVar });
      simplified = '';
    }
  }
}

function termToString(t) {
  let c = t.coeff;
  let v = t.variable;
  if (v === 'const') return '' + c;
  if (c === 1) return v;
  if (c === -1) return '-' + v;
  return c + v;
}

function buildExpressionString() {
  let parts = [];
  for (let i = 0; i < terms.length; i++) {
    let s = termToString(terms[i]);
    if (i > 0 && terms[i].coeff > 0) s = '+ ' + s;
    else if (i > 0 && terms[i].coeff < 0) s = '- ' + termToString({ coeff: -terms[i].coeff, variable: terms[i].variable });
    parts.push(s);
  }
  return parts.join(' ');
}

function simplifyExpression() {
  let groups = {};
  for (let t of terms) {
    let key = t.variable;
    if (!groups[key]) groups[key] = 0;
    groups[key] += t.coeff;
  }

  let order = ['x²', 'y²', 'x', 'y', 'const'];
  let parts = [];
  for (let v of order) {
    if (groups[v] && groups[v] !== 0) {
      parts.push(termToString({ coeff: groups[v], variable: v }));
    }
  }

  if (parts.length === 0) {
    simplified = '0';
  } else {
    let result = parts[0];
    for (let i = 1; i < parts.length; i++) {
      let p = parts[i];
      if (p.startsWith('-')) result += ' - ' + p.substring(1);
      else result += ' + ' + p;
    }
    simplified = result;
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  if (typeof coeffSlider !== 'undefined') {
    coeffSlider.size(canvasWidth - 140 - margin);
  }
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}
