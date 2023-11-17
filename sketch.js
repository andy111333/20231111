let shapes = [];
const rows = 3;
const cols = 4;
const spacing = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // 創建包含圓形位置的物件，並加入 shapes 陣列
      let shape = {
        circleX: j * spacing + spacing / 2,
        circleY: i * spacing + spacing / 2,
        squareScale: 1.0,
        starScale: 1.0,
      };
      shapes.push(shape);
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < shapes.length; i++) {
    moveAndScaleShapes(shapes[i]);
    drawShapes(shapes[i]);
  }
}

function moveAndScaleShapes(shape) {
  // 移動圓形位置
  shape.circleX += random(-1, 1);
  shape.circleY += random(-1, 1);

  // 縮放正方形大小
  shape.squareScale = sin(frameCount * 0.02) * 2 + 1;

  // 縮放星星大小
  shape.starScale = cos(frameCount * 0.02) * 0.5 + 1;
}

function drawShapes(shape) {
  // 繪製紅色星星圍繞著縮放的正方形
  fill(255, 0, 0);
  noStroke();
  ellipse(shape.circleX, shape.circleY, 60 * shape.squareScale, 60 * shape.squareScale);

  // 繪製藍色正方形圍繞著移動和縮放的圓形
  fill(0, 0, 255);
  rectMode(CENTER);
  rect(shape.circleX, shape.circleY, 50 * shape.squareScale, 50 * shape.squareScale);

  // 繪製黃色圓形
  fill(255, 255, 0);
  ellipse(shape.circleX, shape.circleY, 50, 50);
}

// 自動調整畫布大小以填滿整個視窗
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
