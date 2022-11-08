/**
 * Function Preload will load the images from the images folder
 * it will help put nice pictures in the game
 */

var gameState,game,form,player,backgroundImage,user,back1,back2,back3;
var gamer,gamerIMG,edges;
var smallFishGroup,bigFishGroup, smallFishIMG,bigFishIMG;
var smallFishGroup2;
var fire,fireIMG,fireGroup;
var mainBackIMG,fireBallImage;
var partialBackIMG,partialBack;

  function preload(){

    backgroundImage = loadImage("Images/backmove.jpeg")
    gamerIMG = loadImage("Images/seahorse.png")
    smallFishIMG=loadImage("Images/smallFish.png")
    bigFishIMG=loadImage("Images/bigFish.png")
    mainBackIMG = loadImage("Images/main.png")
    partialBackIMG=loadImage("Images/back2.jpg")
    fireBallImage=loadImage("Images/fireball.png")
    


  }

//Setting up the stage and starting the game
  function setup(){
    createCanvas(windowWidth,windowHeight-100);
    player = new Player;

    gameState=0
    game = new Game;
    game.formStart();


    
    partialBack = createSprite(1.5*width,height/2.1,width,height)
    partialBack.addImage(partialBackIMG)
    partialBack.scale=2.3;

    back1=createSprite(2*width,height,width,height);
    back1.addImage(backgroundImage);
    back1.scale=1.3;

    document.getElementById("audio4").play()


    edges=createEdgeSprites();    
  }

/**
 * The following repeates infinitely through out the game
 * It will allow to execute some things for the game
 */
  function draw(){
    background(mainBackIMG)

    if(gameState==1){
      clear();
      game.play()
      back1.velocityX=-60;
      partialBack.velocityX=-5;
        
      if(partialBack.x<-1000){
        partialBack.x=1.5*width;
      }    
        if(back1.x<-1000){
          back1.x=2*width;
        }    
    }

  }