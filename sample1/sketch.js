function setup() {
  createCanvas(600, 400);
  textSize(20);  // 텍스트 크기 설정
  fill(0);       // 텍스트 색상 설정 (검정색)
}

function draw() {
  background(255);
  text("X: " + mouseX + "     Y: " + mouseY, 0, 20);
  
  stroke(0);
  fill(150);
  ellipse(300, 200, 300, 300);
  
  noStroke();
  fill(255, 0, 0); //빨강 
  arc(300, 200, 150, 150, radians(0), radians(45));
  
  fill(255, 128, 0); //주황
  arc(300, 200, 150, 150, radians(45), radians(90));

  fill(255, 255, 0); //노랑
  arc(300, 200, 150, 150, radians(90), radians(135));

  fill(0, 255, 0); //초록
  arc(300, 200, 150, 150, radians(135), radians(180));
 
  fill(0, 0, 255); //파랑
  arc(300, 200, 150, 150, radians(180), radians(225));

  fill(0, 0, 128); //남색
  arc(300, 200, 150, 150, radians(225), radians(270));

  fill(128, 0, 128); //보라
  arc(300, 200, 150, 150, radians(270), radians(315));

  fill(255, 105, 180); //핑크
  arc(300, 200, 150, 150, radians(315), radians(360));
  
  stroke(255,190,0)
  fill(0,128,128); //초록,파랑의 중간색
  triangle(375, 200, 450, 275, 450, 125);
  
  stroke(0,128,128);
  fill(64,0,128); //남색,보라의 중간색
  triangle(300, 275, 225, 350, 375, 350);
  
  stroke(64,0,128);
  fill(255,52,90); // 빨강,핑크의 중간색
  triangle(225, 200, 150, 125, 150, 275);
  
  stroke(255,52,90);
  fill(255,190,0); //주황,노랑의 중간색
  triangle(300, 125, 375, 50, 225, 50);  
}
