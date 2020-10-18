
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup;
var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  bananaGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&&monkey.y>=200){
    monkey.velocityY=-13;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground); 
  
  food();
  obstacles();
drawSprites();
  
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(400,200,30,30);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-6;
    banana.lifetime=100;
    bananaGroup.add(banana);
  }
}


function obstacles() {
  if (frameCount % 300 === 0) {
    //creating obstracle sprite and adding image to it
    obstacle = createSprite(400, 330);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}
