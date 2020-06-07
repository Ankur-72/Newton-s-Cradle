const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, Roof;
var rope1, rope2, rope3, rope4, rope5;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	Roof = new roof(width / 2, height / 5, 600, 20);

	bobDiameter = 90;

	startBobPositionX = width / 2;
	startBobPositionY = height / 4 + 400;

	bob1 = new bob(startBobPositionX - bobDiameter * 2, startBobPositionY, bobDiameter);
	bob2 = new bob(startBobPositionX - bobDiameter, startBobPositionY, bobDiameter);
	bob3 = new bob(startBobPositionX, startBobPositionY, bobDiameter);
	bob4 = new bob(startBobPositionX + bobDiameter, startBobPositionY, bobDiameter);
	bob5 = new bob(startBobPositionX + bobDiameter * 2, startBobPositionY, bobDiameter);



	rope1 = new rope(bob1.body, Roof.body, -bobDiameter * 2, 0)

	rope2 = new rope(bob2.body, Roof.body, -bobDiameter * 1, 0)
	rope3 = new rope(bob3.body, Roof.body, 0, 0)
	rope4 = new rope(bob4.body, Roof.body, bobDiameter * 1, 0)
	rope5 = new rope(bob5.body, Roof.body, bobDiameter * 2, 0)


	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);

	background("fuschia");
	Roof.display();

	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()

	bob1.display("orange");
	bob2.display("magenta");
	bob3.display("maroon");
	bob4.display("blue");
	bob5.display("red");

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -300, y: -65 });
	}
}