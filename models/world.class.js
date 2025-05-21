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
        this.checkCollision(); // regelmäßig Prüfung, ob zwei moving Object miteinander kollidieren
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
            this.flipImage(movableObject);
        }
        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);
        if(movableObject.otherDirection){
            this.flipImageBack(movableObject);
        }
    }

    flipImage(movableObject){
        this.ctx.save(); //speichert den aktuell Zustand vom Canvas
        this.ctx.translate(movableObject.width, 0); //verschiebt das Koordinatensystem um die Breite des movableObject, damit dieser nicht aus dem Spielbereich rutscht
        this.ctx.scale(-1, 1); // Canvas wird horizontal gespiegelt (x-Achse nun negativ, y-Achse unverändert)
        movableObject.x = movableObject.x * -1; //da Canvas gespiegelt, muss auch Objekt gespiegelt werden
    }

    flipImageBack(movableObject){
        movableObject.x = movableObject.x * -1; //kehrt die Spiegelung wieder um
        this.ctx.restore(); //setzt canvas auf den Stand von save() zurück
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

    checkCollision(movableObject){
        setInterval(() => {
            for(let i = 0; i < this.level.enemies.length; i++){
                let enemy = this.level.enemies[i];
                if(this.character.isColliding(enemy)){
                    this.character.hit(); //
                    console.log('Collision with Character, health:', this.character.health);
                    if (this.character.health <= 0){
                        
                    }
                }
            }
        }, 200);
    }
    // #endregion
}

