const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world,engine;

var ground;
var steve;
var block;
var creeper;

// function preload(){
//   creeper = loadImage('images/creeper.png');
// }

function setup(){
  createCanvas(1100,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(550,480,1100,100);

  steve = new Steve(200,200,120,120);

  block = new Block(250,250,50,50);

  creeper = new Creeper(650,380,120,120);

  // creeper = createSprite(150,250,10,10);

}
function draw(){
  Engine.update(engine);
  background(0,0,255);
  ground.display();
  steve.display();
  block.display();
  creeper.display();
  keyPressed();

  Matter.Body.setVelocity(creeper.body,{x:-3,y:0});

}

function keyPressed(){
  if(keyDown('UP_ARROW')){
    Matter.Body.setVelocity(steve.body,{x:0,y:-5});
  }
  if(keyDown('RIGHT_ARROW')){
    Matter.Body.setVelocity(steve.body,{x: 2, y: 0});
  }
  if(keyDown('LEFT_ARROW')){
    Matter.Body.setVelocity(steve.body,{x:-2, y: 0});
  }
  if(keyDown('space')){
    Matter.Body.setPosition(block.body,{x:1200,y:600});
  }
  if(keyDown('p')){
    block = new Block(250,250,50,50);
  }
 

}