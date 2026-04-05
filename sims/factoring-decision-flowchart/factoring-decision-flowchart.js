// Factoring Decision Flowchart MicroSim
// CANVAS_HEIGHT: 530
let canvasWidth = 400;
let drawHeight = 490;
let controlHeight = 40;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

let hoverNode = null;
let nodes = [];
let edges = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);
  buildFlowchart();
  describe('Flowchart guiding students through choosing the correct factoring technique', LABEL);
}

function buildFlowchart() {
  nodes = [];
  edges = [];
  let cx = canvasWidth / 2;

  // Node structure: {id, x, y, w, h, text, type, example, color}
  nodes.push({ id: 0, x: cx, y: 55, w: 200, h: 36, text: 'Expression to Factor', type: 'start', example: '', color: color(100, 150, 230) });
  nodes.push({ id: 1, x: cx, y: 115, w: 200, h: 36, text: 'Common factor?', type: 'decision', example: 'e.g. 6x² + 9x → 3x(2x+3)', color: color(255, 210, 100) });
  nodes.push({ id: 2, x: cx + 190, y: 115, w: 110, h: 30, text: 'Factor it out', type: 'action', example: 'GCF first, then continue', color: color(150, 220, 150) });
  nodes.push({ id: 3, x: cx, y: 185, w: 200, h: 36, text: 'How many terms?', type: 'decision', example: '', color: color(255, 210, 100) });
  nodes.push({ id: 4, x: cx - 130, y: 260, w: 100, h: 30, text: '2 terms', type: 'decision', example: '', color: color(255, 230, 150) });
  nodes.push({ id: 5, x: cx, y: 260, w: 100, h: 30, text: '3 terms', type: 'decision', example: '', color: color(255, 230, 150) });
  nodes.push({ id: 6, x: cx + 130, y: 260, w: 100, h: 30, text: '4+ terms', type: 'action', example: 'Try grouping', color: color(200, 200, 200) });
  nodes.push({ id: 7, x: cx - 130, y: 330, w: 140, h: 30, text: 'a² - b²?', type: 'decision', example: 'x² - 25 = (x+5)(x-5)', color: color(255, 210, 100) });
  nodes.push({ id: 8, x: cx - 130, y: 400, w: 140, h: 30, text: 'a³ ± b³?', type: 'decision', example: 'x³-8 = (x-2)(x²+2x+4)', color: color(255, 210, 100) });
  nodes.push({ id: 9, x: cx - 130, y: 460, w: 160, h: 28, text: 'Cannot factor here', type: 'end', example: '', color: color(220, 150, 150) });
  nodes.push({ id: 10, x: cx, y: 330, w: 160, h: 30, text: 'Perfect square?', type: 'decision', example: 'x²+10x+25 = (x+5)²', color: color(255, 210, 100) });
  nodes.push({ id: 11, x: cx, y: 400, w: 170, h: 28, text: 'Standard methods', type: 'action', example: 'See Chapter 5', color: color(150, 220, 150) });

  // Technique result nodes
  nodes.push({ id: 12, x: cx - 20, y: 460, w: 140, h: 28, text: 'Diff. of Squares', type: 'result', example: '(a+b)(a-b)', color: color(100, 200, 100) });
  nodes.push({ id: 13, x: cx + 120, y: 460, w: 140, h: 28, text: 'Sum/Diff Cubes', type: 'result', example: 'SOAP method', color: color(100, 200, 100) });
  nodes.push({ id: 14, x: cx + 120, y: 330, w: 120, h: 28, text: '(a ± b)²', type: 'result', example: 'Perfect square', color: color(100, 200, 100) });

  edges = [
    [0, 1], [1, 2, 'Yes'], [1, 3, 'No'], [3, 4], [3, 5], [3, 6],
    [4, 7], [7, 8, 'No'], [8, 9, 'No'],
    [5, 10], [10, 11, 'No'],
    [7, 12, 'Yes'], [8, 13, 'Yes'], [10, 14, 'Yes']
  ];
}

function draw() {
  updateCanvasSize();
  buildFlowchart(); // Rebuild positions for responsive

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
  text('Factoring Decision Flowchart', canvasWidth / 2, 8);

  // Draw edges
  for (let e of edges) {
    let from = nodes[e[0]];
    let to = nodes[e[1]];
    let x1 = from.x;
    let y1 = from.y + from.h / 2;
    let x2 = to.x;
    let y2 = to.y - to.h / 2;
    stroke(80);
    strokeWeight(1.5);
    line(x1, y1, x2, y2);
    // Arrowhead
    let angle = atan2(y2 - y1, x2 - x1);
    let arrowSize = 7;
    fill(80);
    noStroke();
    push();
    translate(x2, y2);
    rotate(angle);
    triangle(0, 0, -arrowSize, -arrowSize / 2, -arrowSize, arrowSize / 2);
    pop();
    // Label
    if (e[2]) {
      noStroke();
      fill('blue');
      textSize(11);
      textAlign(CENTER, CENTER);
      let mx = (x1 + x2) / 2;
      let my = (y1 + y2) / 2;
      text(e[2], mx + 15, my);
    }
  }

  // Draw nodes
  hoverNode = null;
  for (let n of nodes) {
    let isHover = mouseX > n.x - n.w / 2 && mouseX < n.x + n.w / 2 &&
                  mouseY > n.y - n.h / 2 && mouseY < n.y + n.h / 2;
    if (isHover) hoverNode = n;

    if (n.type === 'decision') {
      // Diamond shape
      fill(isHover ? color(255, 230, 130) : n.color);
      stroke(150);
      strokeWeight(1);
      beginShape();
      vertex(n.x, n.y - n.h / 2);
      vertex(n.x + n.w / 2, n.y);
      vertex(n.x, n.y + n.h / 2);
      vertex(n.x - n.w / 2, n.y);
      endShape(CLOSE);
    } else {
      fill(isHover ? color(200, 230, 255) : n.color);
      stroke(150);
      strokeWeight(1);
      if (n.type === 'start' || n.type === 'end') {
        rect(n.x - n.w / 2, n.y - n.h / 2, n.w, n.h, n.h / 2);
      } else {
        rect(n.x - n.w / 2, n.y - n.h / 2, n.w, n.h, 6);
      }
    }

    noStroke();
    fill('black');
    textSize(12);
    textAlign(CENTER, CENTER);
    text(n.text, n.x, n.y);
  }

  // Tooltip
  if (hoverNode && hoverNode.example) {
    let tw = textWidth(hoverNode.example) + 20;
    let tx = constrain(mouseX, tw / 2 + 5, canvasWidth - tw / 2 - 5);
    let ty = mouseY - 30;
    fill(255, 255, 230, 240);
    stroke(180);
    strokeWeight(1);
    rectMode(CENTER);
    rect(tx, ty, tw, 24, 6);
    rectMode(CORNER);
    noStroke();
    fill('black');
    textSize(12);
    textAlign(CENTER, CENTER);
    text(hoverNode.example, tx, ty);
  }

  // Control label
  noStroke();
  fill('gray');
  textSize(13);
  textAlign(CENTER, CENTER);
  text('Hover over nodes to see examples', canvasWidth / 2, drawHeight + 20);
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
