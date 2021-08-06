
function preload(){
  //pre-load images
  pathImage=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;
  boy=createSprite(300,300,50,50);
  boy.addAnimation("runner", boyImg)
  boy.scale=0.08;
  leftboundary=createSprite(30,300,10,600)
  leftboundary.visible=false
  rightboundary=createSprite(355,300,10,600)
  rightboundary.visible=false
  edges=createEdgeSprites
}

function draw() {
  background("white")
  if(path.y>400){
    path.y=height/2;
  }
  boy.x=mouseX
  boy.collide(leftboundary);
  boy.collide(rightboundary);
  drawSprites();
}