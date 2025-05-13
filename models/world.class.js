class World {

    character = new Character();
    enemies = [
        new Chicken(), //Chicken Nr. 1
        new Chicken(), //Chicken Nr. 2
        new Chicken(), //Chicken Nr. 3
    ];
    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        
        for(let i = 0; i < this.enemies.length; i++){
            this.ctx.drawImage(this.enemies[i].img, this.enemies[i].x, this.enemies[i].y, this.enemies[i].width, this.enemies[i].height);
        }

        // alternativ über eine forEach-Schleife: 
        // enemies.forEach(enemy => {
        //      this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height)    
        // })

        let self = this;
        requestAnimationFrame(function() { //requestAnimationFrame benötigt eine (anonyme) Funktion, Ausführung erfolgt, sobald alles oberhalb abgeschlossen ist (async?)
            self.draw(); //this ist für die Funktion nicht mehr bekannt, deshalb Zuweisung mit self = this
        });
    }
}