
var lazy_rectangle,movable_rectangle;


function setup() {
  createCanvas(800,400);

  movable_rectangle = createSprite(400, 200, 50, 50);
  movable_rectangle.shapeColor = "yellow";
  lazy_rectangle = createSprite(400, 200, 50, 50);
  lazy_rectangle.shapeColor = "yellow";

}

function draw() {
  background(0);  

  movable_rectangle.x = World.mouseX;
  movable_rectangle.y = World.mouseY;

  if(movable_rectangle.x-lazy_rectangle.x<=movable_rectangle.width/2+lazy_rectangle.width/2 &&
    lazy_rectangle.x-movable_rectangle.x<=lazy_rectangle.width/2+movable_rectangle.width/2 &&
    movable_rectangle.y-lazy_rectangle.y<=movable_rectangle.height/2+lazy_rectangle.height/2 &&
    lazy_rectangle.y-movable_rectangle.y<=lazy_rectangle.height/2+movable_rectangle.height/2){

      lazy_rectangle.shapeColor = "red";
      movable_rectangle.shapeColor = "green";



    }
      else {

        lazy_rectangle.shapeColor = "yellow";
        movable_rectangle.shapeColor = "yellow";

        
      }





  drawSprites();
}