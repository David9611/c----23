const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;

var engine, world, box1, box2, box3, box4, ground

function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;

ground = new Ground(200, 390, 400, 20);
box1 = new Box(200, 300, 50, 50)
box2 = new Box(240, 100, 50, 100)
//box3 = new Box(200, 120, 50, 50)
//box4 = new Box(250, 130, 50, 70)
}
function draw() {
  background("red");  
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
  //box3.display()
  //box4.display()
  drawSprites();
}