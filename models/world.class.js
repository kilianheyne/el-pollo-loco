class World {
    // #region attributes
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    collectable;
    camera_x = 0;

    statusbar = {
        health: new HealthBar(),
        coins: new CoinBar(),
        bottles: new BottleBar()
    };
    collectedCoins = [];
    collectedBottles = [];
    throwableObjects = [new ThrowableObject(),];
    // #endregion
    // #region constructor
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d'); //setzt den Zeichen-Bereich auf 2D 
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw(); //beim Erstellen der Welt wird draw ausgeführt!
        this.setWorld();
        this.run(); // regelmäßig Prüfung, ob zwei moving Object miteinander kollidieren

        this.statusbar.health.world = this;
        this.statusbar.coins.world = this;
        this.statusbar.bottles.world = this;
    }
    // #endregion
    // #region methods
    draw(){ // zeichnet alles auf unser Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //löscht erstmal alle vorhandenen Inhalte auf dem Canvas

        this.ctx.translate(this.camera_x, 0); // 

        this.addArrayToCanvas(this.level.backgroundObjects); //Hintergrund
        this.addArrayToCanvas(this.level.clouds); //Wolken
        this.addArrayToCanvas(this.throwableObjects);
        this.addArrayToCanvas(this.level.coins);
        this.addArrayToCanvas(this.level.bottles);
        this.addToCanvas(this.character); //main character 
        this.ctx.translate(-this.camera_x, 0);
        // ---- space for fixed objects ----
        this.addToCanvas(this.statusbar.health); //health bar
        this.addToCanvas(this.statusbar.coins); //coin bar
        this.addToCanvas(this.statusbar.bottles); //bottles bar
        this.ctx.translate(this.camera_x, 0);
        // ---- end for fixed objects ----
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
    
    run(){
            setInterval(() => {
                this.checkChickenCollision();
                this.checkCoinCollision();
                this.checkSalsaCollision();
                this.checkThrow();
            }, 200);
    }

    checkChickenCollision(){
        for(let i = 0; i < this.level.enemies.length; i++){
            let enemy = this.level.enemies[i];
            if(this.character.isColliding(enemy)){
                this.character.hit(); //
                console.log('Collision with Character, health:', this.character.health);
                this.statusbar.setHealth(this.character.health);
            }
        }
    }

    checkCoinCollision(){
        for (let i = 0; i < this.level.coins.length; i++){
            let coin = this.level.coins[i];
            if(this.character.isColliding(coin)){
                this.level.coins.splice(i, 1); // gesammelte Münze wird aus dem Array entfernt
                i--; //"neues Array" hat ja jetzt einen Wert weniger, also muss i auch kleiner werden
                this.collectedCoins.push(coin); // gesammelte Münze erhöht Wert im Array und bestimmt das ausgespielte Bild
                this.statusbar.coins.setCoinBar(); //aktualisiert, welches Bild der Statusleiste angezeigt werden soll
            }
        }
    }

    checkSalsaCollision(){
        for (let i = 0; i < this.level.bottles.length; i++){
            let bottle = this.level.bottles[i];
            if(this.character.isColliding(bottle)){
                this.level.bottles.splice(i, 1);
                i--;
                this.collectedBottles.push(bottle);
                this.statusbar.bottles.setBottleBar();
            }
        }
    }

    checkThrow(){
        if(this.keyboard.SHIFT){
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            this.throwableObjects.push(bottle);
        }
    }
    // #endregion
}