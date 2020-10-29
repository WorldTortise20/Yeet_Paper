
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground, g;
var p;
var a,b,c,d;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	p = new Paper(250,350);
	g = new Ground(400,height,800,20);

	
	a = new Basket(600,650,10,100);
	b = new Basket(655,650,100,20);
	c = new Basket(710,650,10,100);
    d = createSprite(652,670,110,10);
}


function draw() {
  rectMode(CENTER);
  background(0); 
  Engine.update(engine);
  c.display();
  p.display();
  a.display();
  g.display();
 
  yeet();
  drawSprites();
 
}

function yeet(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(p.body,p.body.position,{x:0.01,y:- 0.430});
		if(p.body.position.x>600){
			Matter.Body.applyForce(p.body,p.body.position,{x:0.01,y:+ 0.430});
		}
	}
}


