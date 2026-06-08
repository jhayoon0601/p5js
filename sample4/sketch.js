let colorStart1, colorEnd1;
let colorStart2, colorEnd2;

function setup() {
  createCanvas(600, 400);
  textSize(20);  
  
  colorStart1 = color(255, 0, 0);   // 빨간색 계열 시작
  colorEnd1 = color(255, 255, 0);   // 노란색 계열 끝
  colorStart2 = color(0, 0, 255);   // 파란색 계열 시작
  colorEnd2 = color(128, 0, 128);   // 보라색 계열 끝

}

function draw() {
  background(255);
  fill(0);
  noStroke();
  text("X: " + mouseX + "     Y: " + mouseY, 0, 20);
  
  let timeFactor = frameCount * 0.03; 
  let sizeOscillation = sin(timeFactor) * 20; 
  let lerpAmount = (sin(frameCount * 0.02) + 1) / 2;
  
  stroke(0);
  fill(150);
  ellipse(300, 200, 300 + sizeOscillation, 300 + sizeOscillation);
  
  push();
  translate(300, 200);
  rotate(frameCount * 0.01); 
  
  noStroke();
  fill(255, 0, 0); // 빨강 
  arc(0, 0, 150, 150, radians(0), radians(45));
  
  fill(255, 128, 0); // 주황
  arc(0, 0, 150, 150, radians(45), radians(90));

  fill(255, 255, 0); // 노랑
  arc(0, 0, 150, 150, radians(90), radians(135));

  fill(0, 255, 0); // 초록
  arc(0, 0, 150, 150, radians(135), radians(180));
 
  fill(0, 0, 255); // 파랑
  arc(0, 0, 150, 150, radians(180), radians(225));

  fill(0, 0, 128); // 남색
  arc(0, 0, 150, 150, radians(225), radians(270));

  fill(128, 0, 128); // 보라
  arc(0, 0, 150, 150, radians(270), radians(315));

  fill(255, 105, 180); // 핑크
  arc(0, 0, 150, 150, radians(315), radians(360));
  pop();
  

  let pulse = sin(frameCount * 0.05) * 5; 
  

  let deltaColor1 = lerpColor(colorStart1, colorEnd1, lerpAmount);
  let deltaColor2 = lerpColor(colorStart2, colorEnd2, lerpAmount);
  
  // 우측 삼각형 
  stroke(255, 190, 0);
  fill(deltaColor1); 
  triangle(375 + pulse, 200, 450 + pulse, 275, 450 + pulse, 125);
  
  // 하단 삼각형
  stroke(0, 128, 128);
  fill(64, 0, 128); 
  triangle(300, 275 + pulse, 225, 350 + pulse, 375, 350 + pulse);
  
  // 좌측 삼각형
  stroke(64, 0, 128);
  fill(deltaColor2); 
  triangle(225 - pulse, 200, 150 - pulse, 125, 150 - pulse, 275);
  
  // 상단 삼각형
  stroke(255, 52, 90);
  fill(255, 190, 0); 
  triangle(300, 125 - pulse, 375 - pulse, 50, 225 + pulse, 50);  
}

function keyPressed() {
  if (key === 's') {
    saveGif('20261535 정하윤 과제4', 10);
  }
}