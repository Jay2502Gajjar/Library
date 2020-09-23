function setup() {
  createCanvas(800,400);
   green= createSprite(400, 200, 50, 50);
   green.shapeColor = "green";
   green.velocityX = -4;
   green.velocityY = -4;

  blue = createSprite(200,200,70,70);
  blue.shapeColor = "blue";
  blue.velocityX = 4;
  blue.velocityY = 4;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  //blue.x = World.mouseX;
  //blue.y = World.mouseY;


  if(blue.width/2 + green.width/2 > blue.x - green.x && blue.width/2 + green.width/2 > green.x - blue.x
    )
  {
    blue.velocityX = blue.velocityX*(-1);
    green.velocityX = green.velocityX*(-1);

  }
    else if(blue.width/2 + green.width/2 > blue.y - green.y && blue.width/2 + green.width/2 > green.y - blue.y){

    blue.velocityY = blue.velocityY*(-1);
    green.velocityY = green.velocityY*(-1);
    }  
}