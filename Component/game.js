class Game{
    constructor(){

        this.smallKill=2;
        this.bigKill=4

    }

    formStart(){
        form=new Form;
        form.getPlayerDetails();

    }

    start(){
        
        smallFishGroup = new Group();
        smallFishGroup2 = new Group();
        bigFishGroup = new Group();
        fireGroup = new Group()

        gamer=createSprite(120,300,100,200);
        gamer.addImage(gamerIMG)
        gamer.scale=0.8
        document.getElementById("audio4").pause()

        document.getElementById("audio").play()


    }

    play(){
        player.health.hide()
        console.log(frameCount)
        drawSprites()
        player.scoreDis()
        gamer.setCollider("rectangle",0,0,160,300)
        //gamer.debug=true;
        if(frameCount%25==0){
            var smallFish=createSprite(2100, Math.round(random(-100, 1000)), 100, 70);  
            smallFish.addImage(smallFishIMG)
            smallFish.scale=0.6;
            smallFish.velocityX=-9;
            smallFish.lifeTime=2000;
            smallFish.setCollider("rectangle",0,0,200, 200);
            //smallFish.debug=true;
            smallFishGroup.add(smallFish);
        }
        if(frameCount%60==0){
            var smallFish2=createSprite(2100, Math.round(random(-100, 1000)), 100, 70);  
            smallFish2.addImage(smallFishIMG)
            smallFish2.scale=0.6;
            smallFish2.velocityX=-9;
            smallFish2.lifeTime=2000;
            smallFish2.setCollider("rectangle",0,0,200, 200);
            //smallFish.debug=true;
            smallFishGroup2.add(smallFish2);
        }
        console.log(mouseY)
        if(frameCount%550==0){
            var bigFish=createSprite(2100, Math.round(random(-50, 500)), 100, 70);  
            bigFish.addImage(bigFishIMG)
            bigFish.scale=2;
            bigFish.velocityX=-4;
            bigFish.lifeTime=2000;
            bigFish.setCollider("rectangle",0,0,190, 60);
            //bigFish.debug=true;
            bigFishGroup.add(bigFish);
            
        }

        if(gamer.isTouching(bigFishGroup)){
            console.log(player.score)
            player.updateScore(-15)
            bigFishGroup.destroyEach();
        }

        if(gamer.isTouching(smallFishGroup)){
            console.log(player.score)
            player.updateScore(-8)
            smallFishGroup.destroyEach();
        }

        if(gamer.isTouching(edges)){
            gamer.bounceOff(edges)
        }

        if(keyDown ("down_arrow")){
            gamer.y=gamer.y+13
        }
    
        if(keyDown ("up_arrow")){
            gamer.y=gamer.y-13
        }

        if(keyDown ("right_arrow")){
            gamer.x=gamer.x+9
        }
    
        if(keyDown ("left_arrow")){
            gamer.x=gamer.x-9
        }

        if(keyDown ("space")){
            var hit=createSprite(gamer.x+51,gamer.y-38,7,5);
            hit.addImage(fireBallImage)
            hit.scale=0.02
            hit.velocityX=8;
            hit.debug=false;
            hit.setCollider("rectangle",0,0,7,5)
            hit.lifetime=350;
            fireGroup.add(hit)

        }
        if(fireGroup.isTouching(smallFishGroup)){
            this.smallKill-=1
            fireGroup.destroyEach()
        }
        if(this.smallKill<0){
            smallFishGroup.destroyEach()
            fireGroup.destroyEach()
            this.smallKill=3
        }
        if(fireGroup.isTouching(smallFishGroup2)){
            this.smallKill-=2
        }
        if(this.smallKill<0){
            smallFishGroup2.destroyEach();
            fireGroup.destroyEach();
            if(player.score!=100){
                player.updateScore(2);
                }
        }
        
        if(fireGroup.isTouching(bigFishGroup)){
            this.bigKill-=1
            fireGroup.destroyEach()
        }
        if(this.bigKill<0){
            bigFishGroup.destroyEach()
            fireGroup.destroyEach()
            this.bigKill=4
            if(player.score!=100){
            player.updateScore(5)
            }
        }

        if(frameCount%300==0){
            player.updateScore(-3)
        }
        if(player.score<20){
            
        player.health.show()
        }

        if(player.score<1){
            player.end()
        }

        if(frameCount>2000){
            player.win()
        }

    }
    end(){
        bigFishGroup.destroyEach();
        smallFishGroup.destroyEach();
        smallFishGroup2.destroyEach();
        fireGroup.destroyEach();
        clear();

        document.getElementById("audio").pause()
        document.getElementById("audio3").play()

    }
    
    win(){
        bigFishGroup.destroyEach();
        smallFishGroup.destroyEach();
        smallFishGroup2.destroyEach();
        fireGroup.destroyEach();
        clear();
        document.getElementById("audio").pause()
        document.getElementById("audio2").play()

    }

}