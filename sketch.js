const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon, cannonball;
var boat

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  //cannonImage = loadImage("./assets/cannon.png");
  //cannonBaseImage = loadImage("./assets/cannonBase.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  //cannonBase = Bodies.rectangle(175, 100, 160, 310, options)
  //World.add(world, cannonBase)

  cannon = new Cannon(170,110,130,100,angle)
  cannonball = new Cannonball(220,100)
  boat = new Boat(width-80, height-60, 170, 170, 80)

  //cannon = Bodies.rectangle(160, 125 ,160, 310, options)
  //World.add(world, cannon)

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  //image(cannonBaseImage,cannonBase.position.x, cannonBase.position.y, 160, 310);
  //image(cannonImage,cannon.position.x, cannon.position.y, 160, 310);
  pop();

  cannon.display()
  cannonball.display()
  boat.display()
}