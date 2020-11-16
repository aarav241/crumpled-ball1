
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1;
var world, engine;

function preload()
{	
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER)

	ground = createSprite(400,490,width,20);

red = createSprite(540,390,200,10);
red.shapeColor = color(255,0,0);

red1 = createSprite(540,280,10,100);
red1.shapeColor = color(255,0,0);

red2 = createSprite(540,280,10,100);
red2.shapeColor = color(255,0,0);

	engine = Engine.create();
	world = engine.world;
   
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:200,height:100,
			wireframes:false
		}
	})

	//Create the Bodies Here.
paper1 = new Paper(100,300,60,20);

groundbody =Bodies.rectangle(400,490,width,20,{isStatic:true});
World.add(world,groundbody);

redbody = Bodies.rectangle(640,480,200,10,{isStatic:true} )
World.add(world,redbody);

redbody1 = Bodies.rectangle(540,435,10,100,{isStatic:true} )
World.add(world,redbody1);

redbody2 = Bodies.rectangle(740,435,10,100,{isStatic:true} )
World.add(world,redbody2);

//Engine.run(engine);
  
}


function draw() {
	background(0);

 Engine.update(engine);

 paper1.display();

ground.x = groundbody.position.x;
ground.y = groundbody.position.y;
red.x= redbody.position.x ;
 red.y= redbody.position.y ;
 red1.x= redbody1.position.x ;
 red1.y= redbody1.position.y ;
 red2.x= redbody2.position.x ;
 red2.y= redbody2.position.y ;	
  
drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.Body,paper1.Body.position,{x:85,y:-85});
   
   }
   }


