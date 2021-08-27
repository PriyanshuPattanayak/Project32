
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;


function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width/2,295,80,80)
  blower = new Blower(width/2,410,150,150);
  blowermouth = new BlowerMouth(150+100,475,150,20)

  button = createButton("Click to Blow");
button.position(width /2-70 , height - 100);
button. class("blowbutton")
button.mousePressed(blow);

}
function draw(){
  background(59);
  Engine.update(engine);
  ball.show();
  blower.show();
  blowermouth.show();
}
function blow(){
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
}