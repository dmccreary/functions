// Projectile Motion Simulator MicroSim
// CANVAS_HEIGHT: 520
let canvasWidth = 800;
let drawHeight = 400;
let controlHeight = 120;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 50;
let defaultTextSize = 14;

let v0Slider, h0Slider, gSlider;
let launchBtn, resetBtn;
let showEqCheckbox, showFeaturesCheckbox;

// Animation state
let animating = false;
let currentTime = 0;
let trail = [];
let maxTime = 0;
let dt = 0.02;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  v0Slider = createSlider(5, 30, 20, 1);
  v0Slider.position(sliderLeftMargin, drawHeight + 10);
  v0Slider.size(130);

  h0Slider = createSlider(0, 10, 1.5, 0.5);
  h0Slider.position(sliderLeftMargin, drawHeight + 40);
  h0Slider.size(130);

  gSlider = createSlider(5, 15, 10, 0.5);
  gSlider.position(sliderLeftMargin, drawHeight + 70);
  gSlider.size(130);

  launchBtn = createButton('Launch');
  launchBtn.position(sliderLeftMargin + 240, drawHeight + 10);
  launchBtn.mousePressed(launch);

  resetBtn = createButton('Reset');
  resetBtn.position(sliderLeftMargin + 310, drawHeight + 10);
  resetBtn.mousePressed(resetSim);

  showEqCheckbox = createCheckbox('Show Equation', false);
  showEqCheckbox.position(sliderLeftMargin + 240, drawHeight + 45);

  showFeaturesCheckbox = createCheckbox('Show Key Features', true);
  showFeaturesCheckbox.position(sliderLeftMargin + 240, drawHeight + 72);

  describe('Projectile motion simulator showing ball trajectory and height vs time graph', LABEL);
}

function launch() {
  animating = true;
  currentTime = 0;
  trail = [];
}

function resetSim() {
  animating = false;
  currentTime = 0;
  trail = [];
}

function getHeight(t, v0, h0, g) {
  return h0 + v0 * t - 0.5 * g * t * t;
}

function getMaxTime(v0, h0, g) {
  // Solve h0 + v0*t - 0.5*g*t^2 = 0 for positive t
  let disc = v0 * v0 + 2 * g * h0;
  if (disc < 0) return 0;
  return (v0 + sqrt(disc)) / g;
}

function getMaxHeight(v0, h0, g) {
  let tPeak = v0 / g;
  return h0 + v0 * tPeak - 0.5 * g * tPeak * tPeak;
}

function draw() {
  updateCanvasSize();

  let v0 = v0Slider.value();
  let h0 = h0Slider.value();
  let g = gSlider.value();

  maxTime = getMaxTime(v0, h0, g);
  let tPeak = v0 / g;
  let hMax = getMaxHeight(v0, h0, g);

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Layout: left = scene view, right = height-time graph
  let sceneW = canvasWidth * 0.48;
  let graphX = canvasWidth * 0.52;
  let graphW = canvasWidth * 0.45;

  // --- LEFT: Scene View ---
  drawScene(v0, h0, g, sceneW, hMax, tPeak);

  // --- RIGHT: Height vs Time Graph ---
  drawHeightGraph(v0, h0, g, graphX, graphW, hMax, tPeak);

  // --- Animate ---
  if (animating) {
    currentTime += dt;
    let h = getHeight(currentTime, v0, h0, g);
    if (h <= 0) {
      currentTime = maxTime;
      animating = false;
    }
    trail.push(currentTime);
  }

  // --- Control labels ---
  fill('black');
  noStroke();
  textSize(12);
  textAlign(LEFT, CENTER);
  text('v\u2080:', sliderLeftMargin - 22, drawHeight + 18);
  text(v0 + ' m/s', sliderLeftMargin + 135, drawHeight + 18);

  text('h\u2080:', sliderLeftMargin - 22, drawHeight + 48);
  text(nf(h0, 1, 1) + ' m', sliderLeftMargin + 135, drawHeight + 48);

  text('g:', sliderLeftMargin - 15, drawHeight + 78);
  text(nf(g, 1, 1) + ' m/s\u00B2', sliderLeftMargin + 135, drawHeight + 78);
}

function drawScene(v0, h0, g, sceneW, hMax, tPeak) {
  let groundY = drawHeight - 40;
  let skyTop = 25;
  let sceneH = groundY - skyTop;

  // Title
  fill('black');
  noStroke();
  textSize(15);
  textAlign(CENTER, TOP);
  text('Side View', sceneW / 2, 5);

  // Ground
  fill('green');
  noStroke();
  rect(0, groundY, sceneW, drawHeight - groundY);

  // Ground line
  stroke('darkgreen');
  strokeWeight(2);
  line(0, groundY, sceneW, groundY);
  strokeWeight(1);

  // Sky gradient hint
  noStroke();
  fill('lightskyblue');
  rect(0, skyTop, sceneW, 20);

  // Launch platform
  let platX = 40;
  let platH = max(10, (h0 / max(hMax, 1)) * sceneH * 0.8);
  if (h0 === 0) platH = 0;
  let platY = groundY - platH;

  if (h0 > 0) {
    fill('sienna');
    noStroke();
    rect(platX - 10, platY, 30, platH);
    fill('saddlebrown');
    rect(platX - 15, platY, 40, 6);
  }

  // Scale: map height to screen
  let maxDispH = max(hMax * 1.1, h0 + 2);
  function heightToY(h) {
    return groundY - (h / maxDispH) * sceneH;
  }

  // Trajectory arc (full path as dotted reference)
  stroke('lightgray');
  strokeWeight(1);
  let prevDrawn = false;
  for (let t = 0; t <= maxTime; t += 0.05) {
    let h = getHeight(t, v0, h0, g);
    let x = platX + 10 + (t / maxTime) * (sceneW - platX - 50);
    let y = heightToY(h);
    if (t > 0 && prevDrawn) {
      let pt = t - 0.05;
      let ph = getHeight(pt, v0, h0, g);
      let px = platX + 10 + (pt / maxTime) * (sceneW - platX - 50);
      let py = heightToY(ph);
      if (int(t * 20) % 2 === 0) {
        line(px, py, x, y);
      }
    }
    prevDrawn = true;
  }

  // Animated trail
  if (trail.length > 1) {
    stroke('orangered');
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < trail.length; i++) {
      let t = trail[i];
      let h = getHeight(t, v0, h0, g);
      let x = platX + 10 + (t / maxTime) * (sceneW - platX - 50);
      let y = heightToY(max(h, 0));
      vertex(x, y);
    }
    endShape();
  }

  // Ball at current position
  let dispTime = currentTime;
  if (trail.length === 0 && !animating) dispTime = 0;
  let ballH = getHeight(dispTime, v0, h0, g);
  if (ballH < 0) ballH = 0;
  let ballX = platX + 10 + (dispTime / max(maxTime, 0.01)) * (sceneW - platX - 50);
  let ballY = heightToY(ballH);

  if (!animating && trail.length === 0) {
    ballX = platX + 10;
    ballY = heightToY(h0);
  }

  fill('red');
  noStroke();
  ellipse(ballX, ballY, 14, 14);

  // Show key features on scene
  if (showFeaturesCheckbox.checked()) {
    // Max height line
    let peakY = heightToY(hMax);
    stroke('purple');
    strokeWeight(1);
    let dashLen = 6;
    let peakX = platX + 10 + (tPeak / max(maxTime, 0.01)) * (sceneW - platX - 50);
    for (let dx = 20; dx < sceneW - 20; dx += dashLen * 2) {
      line(dx, peakY, min(dx + dashLen, sceneW - 20), peakY);
    }

    fill('purple');
    noStroke();
    textSize(11);
    textAlign(LEFT, BOTTOM);
    text('Max: ' + nf(hMax, 1, 1) + ' m', peakX + 10, peakY - 2);

    // Landing point
    let landX = platX + 10 + (sceneW - platX - 50);
    fill('orange');
    noStroke();
    triangle(landX - 5, groundY - 2, landX + 5, groundY - 2, landX, groundY - 10);
    textSize(10);
    textAlign(CENTER, BOTTOM);
    text('Land: ' + nf(maxTime, 1, 2) + ' s', landX, groundY - 12);
  }

  strokeWeight(1);
}

function drawHeightGraph(v0, h0, g, graphX, graphW, hMax, tPeak) {
  let plotX = graphX + 40;
  let plotY = 35;
  let plotW = graphW - 55;
  let plotH = drawHeight - 70;

  // Title
  fill('black');
  noStroke();
  textSize(15);
  textAlign(CENTER, TOP);
  text('Height vs Time', graphX + graphW / 2, 5);

  // Axes
  stroke('black');
  strokeWeight(1);
  line(plotX, plotY, plotX, plotY + plotH);
  line(plotX, plotY + plotH, plotX + plotW, plotY + plotH);

  // Axis labels
  fill('black');
  noStroke();
  textSize(11);
  textAlign(CENTER, TOP);
  text('Time (s)', plotX + plotW / 2, plotY + plotH + 8);

  push();
  translate(plotX - 30, plotY + plotH / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, BOTTOM);
  text('Height (m)', 0, 0);
  pop();

  // Scale
  let tMax = max(maxTime * 1.1, 1);
  let yMaxGraph = max(hMax * 1.15, h0 + 2);

  function toGX(t) { return plotX + (t / tMax) * plotW; }
  function toGY(h) { return plotY + plotH - (h / yMaxGraph) * plotH; }

  // Grid
  stroke(230);
  strokeWeight(0.5);
  let tStep = tMax > 6 ? 2 : (tMax > 3 ? 1 : 0.5);
  for (let t = 0; t <= tMax; t += tStep) {
    line(toGX(t), plotY, toGX(t), plotY + plotH);
  }
  let hStep = yMaxGraph > 20 ? 5 : (yMaxGraph > 10 ? 2 : 1);
  for (let h = 0; h <= yMaxGraph; h += hStep) {
    line(plotX, toGY(h), plotX + plotW, toGY(h));
  }

  // Tick labels
  fill('gray');
  noStroke();
  textSize(9);
  textAlign(CENTER, TOP);
  for (let t = 0; t <= tMax; t += tStep) {
    text(nf(t, 1, 1), toGX(t), plotY + plotH + 1);
  }
  textAlign(RIGHT, CENTER);
  for (let h = 0; h <= yMaxGraph; h += hStep) {
    text(nf(h, 1, 0), plotX - 4, toGY(h));
  }

  // Full parabolic curve (light)
  stroke('lightblue');
  strokeWeight(1.5);
  noFill();
  beginShape();
  for (let t = 0; t <= maxTime; t += 0.02) {
    let h = getHeight(t, v0, h0, g);
    if (h >= 0) vertex(toGX(t), toGY(h));
  }
  endShape();

  // Animated portion
  if (trail.length > 1) {
    stroke('blue');
    strokeWeight(2.5);
    noFill();
    beginShape();
    for (let i = 0; i < trail.length; i++) {
      let t = trail[i];
      let h = getHeight(t, v0, h0, g);
      if (h >= 0) vertex(toGX(t), toGY(h));
    }
    endShape();
  }

  // Current position dot on graph
  let dispTime = currentTime;
  if (trail.length === 0 && !animating) dispTime = 0;
  let ballH = getHeight(dispTime, v0, h0, g);
  if (ballH < 0) ballH = 0;
  if (!animating && trail.length === 0) {
    fill('red');
    noStroke();
    ellipse(toGX(0), toGY(h0), 10, 10);
  } else {
    fill('red');
    noStroke();
    ellipse(toGX(dispTime), toGY(ballH), 10, 10);
  }

  // Key features on graph
  if (showFeaturesCheckbox.checked()) {
    // Vertex (max height)
    stroke('purple');
    strokeWeight(1);
    let vgx = toGX(tPeak);
    let vgy = toGY(hMax);

    // Dashed lines to vertex
    for (let dy = vgy; dy <= plotY + plotH; dy += 8) {
      line(vgx, dy, vgx, min(dy + 4, plotY + plotH));
    }
    for (let dx = plotX; dx <= vgx; dx += 8) {
      line(dx, vgy, min(dx + 4, vgx), vgy);
    }

    fill('purple');
    noStroke();
    ellipse(vgx, vgy, 8, 8);
    textSize(10);
    textAlign(LEFT, BOTTOM);
    text('(' + nf(tPeak, 1, 2) + ', ' + nf(hMax, 1, 1) + ')', vgx + 5, vgy - 2);

    // Landing point
    let lgx = toGX(maxTime);
    let lgy = toGY(0);
    fill('orange');
    noStroke();
    ellipse(lgx, lgy, 8, 8);
    textSize(10);
    textAlign(CENTER, BOTTOM);
    text('t = ' + nf(maxTime, 1, 2) + ' s', lgx, lgy - 5);
  }

  // Show equation
  if (showEqCheckbox.checked()) {
    fill('black');
    noStroke();
    textSize(12);
    textAlign(LEFT, TOP);
    let eqY = plotY + 5;
    let eqX = plotX + 10;

    // h(t) = h0 + v0*t - 0.5*g*t^2
    fill('white');
    stroke('gray');
    rect(eqX - 4, eqY - 3, plotW - 20, 38, 5);

    fill('darkblue');
    noStroke();
    text('h(t) = ' + nf(h0, 1, 1) + ' + ' + v0 + 't - ' + nf(0.5 * g, 1, 1) + 't\u00B2', eqX, eqY);
    textSize(11);
    fill('gray');
    text('h(t) = h\u2080 + v\u2080t - \u00BDgt\u00B2', eqX, eqY + 18);
  }

  strokeWeight(1);
}

function updateCanvasSize() {
  let container = document.querySelector('main');
  if (container) {
    canvasWidth = max(650, container.offsetWidth);
  }
  canvasHeight = drawHeight + controlHeight;
  if (width !== canvasWidth || height !== canvasHeight) {
    resizeCanvas(canvasWidth, canvasHeight);
  }
}

function windowResized() {
  updateCanvasSize();
}
