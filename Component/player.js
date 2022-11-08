class Player{
    constructor(){

        this.name=null;
        this.score=80;
        this.scor = createElement("h1");
        this.health = createElement("h1");

    }

    updatePlayerName(name){
        this.name=name;
        console.log("Player name is:",this.name);
    }
    updateScore(score){
        player.score+=score
    }
    
    scoreDis(){
        this.scor.show()
        this.scor.html("Life Count:"+player.score+"%")
        this.scor.position(50,90)

        this.health.html("Critical Health, Kill some fishes to gain health")
        this.health.position(50,130)
    }

    end(){
        gameState=2
        this.health.hide()
        this.scor.hide()
        game.end()
        form.end()
    }
    

    win(){
        gameState=3
        this.health.hide()
        this.scor.hide()
        game.win()
        form.win()
    }

}