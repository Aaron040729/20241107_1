let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r=10   //增加上下幅度
let angle=0 
// ==================================================載入字型
function preload(){  
    font = loadFont("fonts/Roboto-Medium.ttf") 
}
//===================================================載入字型
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill()
  background("#ffe5ec")
  points = font.textToPoints("HONG", -300, 100, 200, {
    sampleFactor:0.12
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
angleMode(DEGREES) //宣告角度使用0~365，0~2pi
}
function draw() {
  strokeWeight(2)
  background("#ffe5ec")
  noFill()
  //===================================================宣告變數
var rect_width = 50 //宣告一個變數rect_width，方形的寬度
var bc_w = 50 //宣告一個變數bc_w，大圓的寬度
var sc_w = mouseY+25 //宣告一個變數sc_w，小圓的寬度
//=====================================================宣告變數
  stroke("#0077b6");
//=======================================背景線條
  for(let j=0;j<40;j=j+1){
    for(let i=0;i<60;i=i+1){
      ellipse(25+bc_w*i,25+50*j,bc_w)
      rect(rect_width*i,0+50*j,rect_width)
      ellipse(25+bc_w*i,25+50*j,sc_w)
    }
  }
//=======================================背景線條
//=======================================文字顏色變化
  for(let i=0;i<3;i=i+1){
    let r = map(sin(frameCount),-1,1,50,255)
    let g = map(sin(frameCount/2),-1,1,50,255)
    let b = map(sin(frameCount/4),-1,1,50,255)
    stroke(r,g,b)
    fill(r,g,b)
  }
//=======================================文字顏色變化
  translate(mouseX,mouseY)
  rotate(angle/10)
  stroke("#ffe169")
//=======================================點狀文字樣式更改
  for (let i=0; i<points.length-1; i++) { 
    rect(points[i].x+r*sin(angle+i*20),points[i].y+r*sin(angle+i*20),14)
    line(points[i].x+r*sin(angle+i*20),points[i].y+r*sin(angle+i*20),points[i+1].x+r*sin(angle+i*20),points[i+1].y+r*sin(angle+i*20))
  } 
//=======================================點狀文字樣式更改
  angle=angle + 30
}