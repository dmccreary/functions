// Modulus Transformation Explorer MicroSim
// CANVAS_HEIGHT: 480
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 8;
let defaultTextSize = 14;

let funcSelect;
let overlayCheckbox;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  funcSelect = createSelect();
  funcSelect.position(110, drawHeight + 8);
  funcSelect.option('x² − 4');
  funcSelect.option('x³ − 3x');
  funcSelect.option('x − 2');
  funcSelect.option('x² − 2x − 3');
  funcSelect.selected('x² − 4');

  overlayCheckbox = createCheckbox('Overlay original', false);
  overlayCheckbox.position(110, drawHeight + 34);

  describe('Four-panel display showing modulus and squaring transformations of a base function', LABEL);
}

function baseFunction(x, name) {
  switch (name) {
    case 'x² − 4': return x * x - 4;
    case 'x³ − 3x': return x * x * x - 3 * x;
    case 'x − 2': return x - 2;
    case 'x² − 2x − 3': return x * x - 2 * x - 3;
    default: return x * x - 4;
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
  let showOverlay = overlayCheckbox.checked();

  // 2x2 grid layout
  let gap = 10;
  let panelW = (canvasWidth - gap * 3) / 2;
  let panelH = (drawHeight - gap * 3 - 10) / 2;
  let topY = gap + 5;

  let panels = [
    { title: 'f(x)', tx: gap, ty: topY, fn: function(x) { return baseFunction(x, fname); } },
    { title: '|f(x)|', tx: gap * 2 + panelW, ty: topY, fn: function(x) { return abs(baseFunction(x, fname)); } },
    { title: 'f(|x|)', tx: gap, ty: topY + panelH + gap, fn: function(x) { return baseFunction(abs(x), fname); } },
    { title: '[f(x)]²', tx: gap * 2 + panelW, ty: topY + panelH + gap, fn: function(x) { let v = baseFunction(x, fname); return v * v; } }
  ];

  let range = 5;

  for (let p = 0; p < panels.length; p++) {
    let panel = panels[p];
    let px0 = panel.tx;
    let py0 = panel.ty;

    // Panel background
    fill('white');
    stroke('silver');
    rect(px0, py0, panelW, panelH, 4);

    let innerMargin = 25;
    let plotL = px0 + innerMargin;
    let plotR = px0 + panelW - 10;
    let plotT = py0 + 20;
    let plotB = py0 + panelH - 10;
    let pw = plotR - plotL;
    let ph = plotB - plotT;
    let pcx = (plotL + plotR) / 2;
    let pcy = (plotT + plotB) / 2;

    function toSX(x) { return pcx + (x / range) * (pw / 2); }
    function toSY(y) {
      // Auto-scale for squared panel
      let yrange = range;
      if (p === 3) yrange = range * range;
      return pcy - (y / yrange) * (ph / 2);
    }

    // Determine y-range for auto-scale
    let yrange = range;
    if (p === 3) yrange = range * range;

    // Grid
    stroke(230);
    strokeWeight(0.5);
    for (let i = -range; i <= range; i++) {
      line(toSX(i), plotT, toSX(i), plotB);
    }
    let yStep = p === 3 ? 5 : 1;
    for (let i = -yrange; i <= yrange; i += yStep) {
      let sy = pcy - (i / yrange) * (ph / 2);
      line(plotL, sy, plotR, sy);
    }

    // Axes
    stroke('black');
    strokeWeight(1);
    line(plotL, pcy, plotR, pcy);
    line(pcx, plotT, pcx, plotB);

    // Axis ticks
    noStroke();
    fill('gray');
    textSize(8);
    textAlign(CENTER, TOP);
    for (let i = -range; i <= range; i++) {
      if (i === 0) continue;
      if (range > 5 && i % 2 !== 0) continue;
      text(i, toSX(i), pcy + 2);
    }
    textAlign(RIGHT, CENTER);
    for (let i = -yrange; i <= yrange; i += yStep) {
      if (i === 0) continue;
      let sy = pcy - (i / yrange) * (ph / 2);
      text(i, pcx - 3, sy);
    }

    // Overlay original in gray
    if (showOverlay && p > 0) {
      stroke('lightgray');
      strokeWeight(1.5);
      noFill();
      beginShape();
      for (let sx = plotL; sx <= plotR; sx += 1) {
        let x = ((sx - pcx) / (pw / 2)) * range;
        let y = baseFunction(x, fname);
        let sy = pcy - (y / yrange) * (ph / 2);
        if (sy < plotT - 5 || sy > plotB + 5) { endShape(); beginShape(); continue; }
        vertex(sx, sy);
      }
      endShape();
    }

    // Draw transformed function
    let curveColor = p === 0 ? 'blue' : 'red';
    stroke(curveColor);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let sx = plotL; sx <= plotR; sx += 1) {
      let x = ((sx - pcx) / (pw / 2)) * range;
      let y = panel.fn(x);
      let sy = pcy - (y / yrange) * (ph / 2);
      if (!isFinite(y) || sy < plotT - 10 || sy > plotB + 10) { endShape(); beginShape(); continue; }
      vertex(sx, sy);
    }
    endShape();

    // Panel title
    noStroke();
    fill('black');
    textSize(12);
    textAlign(LEFT, TOP);
    text(panel.title, px0 + 5, py0 + 3);
  }

  // Control labels
  noStroke();
  fill('black');
  textSize(12);
  textAlign(LEFT, CENTER);
  text('Base f(x):', 10, drawHeight + 18);

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
