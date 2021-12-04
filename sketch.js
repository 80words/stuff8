
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball 
var groundObj, leftSide
var rightSide
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight); 
	engine = Engine.create();
	world = engine.world;
var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
rectMode(CENTER)
ellipseMode(RADIUS)
	

	//Create the Bodies Here.
ball = Bodies.circle(300,500,20,ball_options)
World.add(world,ball);

groundObj = new Ground(width/2,670,width,20) 
leftSide = new Ground(1100,600,20,120) 
rightSide = new Ground(900,600,20,120) 
	//Engine.run(engine);
  
}


function draw() {
  background(164);
  groundObj.display() 
  leftSide.display() 
  rightSide.display() 
  ellipse(ball.position.x,ball.position.y,20) 
  keyPressed() 

  drawSprites(); 
  Engine.update(engine)
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
	}
}


