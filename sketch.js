const Engine=Matter.Engine;//engine is like universe
const World=Matter.World;//world is like earth
const Bodies=Matter.Bodies;//bodies are living and non living object on the earth

var engine,world,ground,ball;//creatings variables





function setup() {
  createCanvas(800,400);
engine=Engine.create();//in the variable engine we are creating a physics engine
world=engine.world;//inside engine we are creating a world

var ground_options={
  isStatic:true
}
ground=Bodies.rectangle(200,390,200,20,ground_options);//we are creating a body for a ground
World.add(world,ground);//we are adding this ground body in to our world

var ball_options={
  restitution:0.8
}
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  circle(ball.position.x,ball.position.y,20);
  drawSprites();
}