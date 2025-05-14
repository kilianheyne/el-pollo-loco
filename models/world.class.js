class World {

    character = new Character();
    enemies = [
        new Chicken(), //Chicken Nr. 1
        new Chicken(), //Chicken Nr. 2
        new Chicken(), //Chicken Nr. 3
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('img/5_background/layers/air.png'),
        new BackgroundObject('img/5_background/layers/3_third_layer/full.png'),
        new BackgroundObject('img/5_background/layers/2_second_layer/full.png'),
        new BackgroundObject('img/5_background/layers/1_first_layer/full.png')
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

        this.addArrayToCanvas(this.backgroundObjects); //Hintergrund
        this.addArrayToCanvas(this.clouds); //Wolken
        this.addToCanvas(this.character); //main character 
        this.addArrayToCanvas(this.enemies); //Hühnchen
        
        let self = this;
        requestAnimationFrame(function() { //requestAnimationFrame benötigt eine (anonyme) Funktion, Ausführung erfolgt, sobald alles oberhalb abgeschlossen ist (async?)
            self.draw(); //this ist für die Funktion nicht mehr bekannt, deshalb Zuweisung mit self = this
        });
    }

    addToCanvas(movableObject){
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }

    addArrayToCanvas(objects){
        for(let i = 0; i < objects.length; i++){
            this.addToCanvas(objects[i]);
        }
        // alternativ über eine forEach-Schleife: 
        // enemies.forEach(enemy => {
        //      this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height)    
        // })
    }
}