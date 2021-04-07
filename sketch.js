//..
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5; 
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/4,width/2.7,height/14);
		
	bobObject1 = new Bob(307,height/3 + height/3);
	bobObject2 = new Bob(352,height/3 + height/3);
	bobObject3 = new Bob(397,height/3 + height/3);
	bobObject4 = new Bob(442,height/3 + height/3);
	bobObject5 = new Bob(487,height/3 + height/3);

	rope1 = new Rope(bobObject1.body,roof.body,-(400-307),0);
	rope2 = new Rope(bobObject2.body,roof.body,-(400-352),0);
	rope3 = new Rope(bobObject3.body,roof.body,-(400-397),0);
	rope4 = new Rope(bobObject4.body,roof.body,42,0); 
	rope5 = new Rope(bobObject5.body,roof.body,87,0);

	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("yellow");

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position, {x: -78, y: 0});
	}
}