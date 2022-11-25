function preload(){
  
  trexanimation=loadAnimation("trex1.png", "trex3.png", "trex4.png");
  
  groundimg=loadImage("ground2.png");

  skyimg=loadImage("cloud.png")
}

function setup(){
  createCanvas (600,200);
  
  trex=createSprite(50, 180, 50, 50);
  
  trex.addAnimation("animation", trexanimation);
  
  trex.scale = 0.5;

  ground=createSprite(300, 190, 600, 20);
  
  ground.addImage(groundimg);

  ground.velocityX = -4;

  ground2=createSprite(300, 200, 600, 20);

  ground2.visible = false

}

function draw(){
  
  background(180);
  
  trex.collide(ground2);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  if (keyDown("SPACE")&&(trex.y >= 166 ) ){
    trex.velocityY = -6;
  }

  trex.velocityY = trex.velocityY + 0.2;

  sky()

  drawSprites();
}

function sky(){
  
if (frameCount%70===0){
  cloud=createSprite(600, random(10, 90), 25, 25)  
  cloud.velocityX = -4
  cloud.addImage(skyimg)
  cloud.scale = 0.75
  
  //console.log(trex.depth)
  //console.log(cloud.depth)
  trex.depth = cloud.depth + 1
}

}

