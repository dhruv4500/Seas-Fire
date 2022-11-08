class Form{
    constructor(){

        this.title=createElement("h1")
        this.askName=createElement("h1");
        this.inName=createInput("").attribute('placeholder','Type name here');
        this.button=createButton("Enter Game");

        this.loseTitle=createElement("h1")
    }

    getPlayerDetails(){
        this.loseTitle.hide()
        player.scor.hide()
        player.health.hide();
        this.title.html("Hint: Few Piranas will not harm you! Many will disappear if you touch one Pirana");
        this.title.position(width/5,100);

        this.askName.html("What is Your Name?");
        this.askName.position(100,150);

        this.inName.position(100,230);
        
        this.button.position(300,280);

        this.button.mousePressed(()=>{
            user = this.inName.value();

            player.updatePlayerName(user);

            
            game.start();
            gameState=1;

            this.title.hide();
            this.askName.hide();
            this.inName.hide();
            this.button.hide();



        })
 
    }

    end(){
        this.loseTitle.show()
        this.loseTitle.html("Sorry "+player.name+"! The Sea horse has 0% life. Better Luck next Time!")
        this.loseTitle.position(100,200)

    }
    win(){
        
        this.loseTitle.show()
        this.loseTitle.html("Well done "+player.name+"! The Sea horse has "+player.score+"% life. You have cracked the Game!")
        this.loseTitle.position(100,200)
    }


}