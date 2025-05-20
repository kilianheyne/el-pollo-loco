class World {
    // #region attributes
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    // #endregion
    // #region constructor
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d'); //setzt den Zeichen-Bereich auf 2D 
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw(); //beim Erstellen der Welt wird draw ausgeführt!
        this.setWorld();
    }
    // #endregion
    // #region methods
    draw(){ // zeichnet alles auf unser Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //löscht erstmal alle vorhandenen Inhalte auf dem Canvas

        this.ctx.translate(this.camera_x, 0); // 

        this.addArrayToCanvas(this.level.backgroundObjects); //Hintergrund
        this.addArrayToCanvas(this.level.clouds); //Wolken
        this.addToCanvas(this.character); //main character 
        this.addArrayToCanvas(this.level.enemies); //Hühnchen

        this.ctx.translate(-this.camera_x, 0);
        
        let self = this;
        requestAnimationFrame(function() { //requestAnimationFrame benötigt eine (anonyme) Funktion, Ausführung erfolgt, sobald alles oberhalb abgeschlossen ist (async?)
            self.draw(); //this ist für die Funktion nicht mehr bekannt, deshalb Zuweisung mit self = this
        });
    }

    addToCanvas(movableObject){
        if(movableObject.otherDirection){
            this.ctx.save();
            this.ctx.translate(movableObject.width, 0);
            this.ctx.scale(-1, 1);
            movableObject.x = movableObject.x * -1;
        }
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
        if(movableObject.otherDirection){
            movableObject.x = movableObject.x * -1;
            this.ctx.restore();
        }
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

    setWorld(){
        this.character.world = this; 
    }
    // #endregion
}