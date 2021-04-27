const Engine= Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine,world;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  var options= {
    isStatic : true
  }

  ground= Bodies.rectangle(400,370,900,20,options);
  World.add(world, ground);

  ball = new Ball (300,300,50);
  box1 = new Box (600,350);
  box2 = new Box (650,350);
  box3 = new Box (700,350);

  box4 = new Box (600,300);
  box5 = new Box (650,300);
  box6 = new Box (700,300);

  box7 = new Box (600,250);
  box8 = new Box (650,250);
  box9 = new Box (700,250);

  box10 = new Box (600,200);
  box11 = new Box (650,200);
  box12 = new Box (700,200);

  box13 = new Box (600,150);
  box14 = new Box (650,150);
  box15 = new Box (700,150);

  rope= Constraint.create({
    bodyA:ball.body,
    pointB:{x:400,y:70},
    length:200, stiffness:1,
  })
  World.add(world, rope)
}

function draw() {
  background("lightblue");  
  Engine.update(engine)
  rectMode(CENTER)
  ball.display()
  line(ball.body.position.x,ball.body.position.y,400,70)
rect(ground.position.x,ground.position.y, 900,20)
box1.display()
box2.display()
box3.display()

box4.display()
box5.display()
box6.display()

box7.display()
box8.display()
box9.display()
  
box10.display()
box11.display()
box12.display()

box13.display()
box15.display()
box14.display()
}

// function mouseReleased(){
  
// }

function mouseDragged(){
//   ball.body.position.x=mouseX;
// ball.body.position.y = mouseY;
Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}
  
