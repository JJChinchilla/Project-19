var bird, birdImg
var grass, grassImg
var cloud, cloudImg, cloudsGroup
var tree, treeImg, treesGroup
var gameState = "play"
function preload(){
    
    bird = loadImage("R.png")
    grass = loadImage("grass.png")
    cloud = loadImage("cloud.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bird = createSprite(40,windowHeight-100);
    bird.addImage("bird", birdImg);
    
    grass = createSprite(300,height-10,100);
    grass.addImage("grass", grassImg);
    
    if(frameCount % 90 == 0)
    {
      tree = createSprite(windowWidth-10, 500)   
      tree.addImage("tree", treeImg);
      tree.velocityX = -2;
      treesGroup.add(trees);
    }
  
    if(frameCount % 100 == 0){
        cloud = createSprite(windowWidth-10, Math.round(random(20,200)));
        cloud.addImage("cloud", cloudImg);
        cloud.velocityX = -2;
        cloudsGroup.add(cloud);

    }
    treesGroup = createGroup();
    cloudsGroup = createGroup()
}

function draw() {
    if(bird.isTouching(treesGroup)){
        bird.velocityY = 0
      }
      
      if(bird.y > 600)
      {
        gameState = "end"
      }
      
      if(gameState == "end"){
        bird.destroy()
        treesGroup.destroyEach()
        cloudsGroup.destroyEach()
        grass.destroy ()
      
        textSize(30)
        fill("red")
        text("GAME OVER!!" , 200 , 300)
      
      }
      if(keyDown("space")){
        bird.velocityY = -5;
        bird.velocityY = bird.velocityY + 1
      }
      
 drawSprites()
}