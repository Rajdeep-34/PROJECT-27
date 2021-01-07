const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var string1,string2,string3,string4,string5;

function preload() {
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(215, 450, 85);
	bob2 = new Bob(300, 450, 85);
	bob3 = new Bob(385, 450, 85);
	bob4 = new Bob(470, 450, 85);
	bob5 = new Bob(555, 450, 85);

	roof = new Roof(385, 150, 400, 50);

	string1 = new String(bob1.body, roof.body, -175, 20);
	string2 = new String(bob2.body, roof.body, -90, 20);
	string3 = new String(bob3.body, roof.body, -5, 20);
	string4 = new String(bob4.body, roof.body, 80, 20);
	string5 = new String(bob5.body, roof.body, 165, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

 
	
  drawSprites();
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -300, y: -300})
	}
}