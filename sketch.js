
var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50)

}

function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW))
  {
    box.velocityX=5
  }
  if (keyDown(LEFT_ARROW))
  {
    box.velocityX=-5
  }
  if (keyDown(UP_ARROW))
  {
    box.velocityY=-5
  }
  if (keyDown(DOWN_ARROW))
  {
    box.velocityY=5
  }
  drawSprites()

}





