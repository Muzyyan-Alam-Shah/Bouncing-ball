const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var game_engine, game_world, ground,ball;

function setup() {
  createCanvas(400,400);
  game_engine =  Engine.create();
  game_world = game_engine.world;

  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(game_world,ground);
  console.log(ground.position);

var ball_options = {
  'restitution':1
}

 ball=Bodies.circle(200,200,20,ball_options);
 World.add(game_world,ball);

}

function draw() {
  background(255,255,0); 
  Engine.update(game_engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  drawSprites();
}