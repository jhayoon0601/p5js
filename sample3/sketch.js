/*********************************************
  1. mouse:
		- 마우스 커서의 방향대로 눈동자가 따라감
	2. keyboard:
		- 키보드의 위쪽 방향키를 누르면 놀라는 표정
        - 키보드의 아래쪽 방향키를 누르면 화난 표정
        - 키보드의 s키를 누르면 gif로 저장
***********************************************/	


function setup() {
  createCanvas(400, 600);
}
function draw() {
  background(255);
  noStroke();

  fill('#Fdece2'); //얼굴
  ellipse(200,200,180,210);
  
  fill(30); //머리
  arc(200, 170, 190, 200, PI, TWO_PI);
  fill('#FDECE2');
  ellipse(200, 150, 30, 50);
  stroke(50);
  strokeWeight(1);
  line(170, 120, 180, 160);
  line(230, 120, 220, 160);
  noStroke();
  
  stroke(50);
  strokeWeight(10);
  line(110,165,108,190);
  line(290, 165, 292, 190); 
  noStroke();
  
  let eyeX = constrain(mouseX, 153, 167);
  let eyeY = constrain(mouseY, 197, 203);
  
  if (keyIsDown(UP_ARROW)){
    fill(50); //눈썹
    arc(155, 175, 60, 10, PI, TWO_PI);
    arc(245, 175, 60, 10, PI, TWO_PI);
    
    noFill(); //입
    stroke(150, 80, 80);
    strokeWeight(2);
    ellipse(200, 260, 30, 35);
  } 
  else if (keyIsDown(DOWN_ARROW)){
    fill(50); //눈썹
    arc(155, 185, 60, 10, PI, TWO_PI);
    arc(245, 185, 60, 10, PI, TWO_PI);
    
    noFill(); //입
    stroke(150, 80, 80);
    strokeWeight(2);
    arc(200, 265, 50, 15, PI, TWO_PI);
  }
  else{
    fill(50); //눈썹
    arc(155, 180, 60, 10, PI, TWO_PI);
    arc(245, 180, 60, 10, PI, TWO_PI);
    
    noFill(); //입
    stroke(150, 80, 80);
    strokeWeight(2);
    arc(200, 260, 50, 20, 0, PI); 
    
    stroke(200, 120, 120); // 아랫입술
    strokeWeight(1);
    arc(200, 265, 40, 14, 0, PI);
  }
  
  noStroke();
  fill(255); //눈 흰자
  ellipse(160, 200, 53, 23);
  ellipse(240, 200, 53, 23);

  fill(0); //검은자
  ellipse(eyeX, eyeY, 20, 16);
  ellipse(eyeX+80, eyeY, 20, 16);
  
  fill(255); //검은자 안에 흰색(하이라이트)
  ellipse(eyeX+1, eyeY, 4, 5);
  ellipse(eyeX+79, eyeY, 4, 5);
  
  stroke(120); //코
  strokeWeight(1);
  line(200, 217, 195, 238);
  line(195, 238, 205, 238);

  noStroke(); //귀
  fill('#Fdece2');
  ellipse(111, 205, 25, 40);
  ellipse(289, 205, 25, 40);
  fill('#Fdece2'); //목
  rect(176, 290, 48, 46, 15);
  
  
  fill(240) //상체
  triangle(180, 330, 45, 360, 180, 360);   
  triangle(220, 330, 220, 360, 355, 360);  

  rect(45, 360, 135, 300);
  rect(220, 360, 135, 300);
  
  //에어팟(악세사리)
  fill(255);
  stroke(200);
  strokeWeight(1);
  ellipse(106, 205, 14, 20);
  rect(103, 210, 6, 15, 2);
  noStroke();
  fill(180);
  ellipse(105, 200, 4, 4);

}

function keyPressed() {
  if (key === 's') {
    saveGif('20261535 정하윤 과제3', 10);
  }
}