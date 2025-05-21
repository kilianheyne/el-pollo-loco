class MovableObject {
    // #region attributes
    x = 100;
    y = 270;
    img;
    width = 65;
    height = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.06;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    health = 100;
    damage = 0;
    lastHit = 0;
    // #endregion
    // #region methods
    loadImage(path){
        this.img = new Image(); // entspricht einer Zusammenfassung von HTML & JS => HTML: <img id="image">; JS: const img = document.getElementById('image');
        this.img.src = path;
    }

    loadImages(arr){
        for(let i = 0; i < arr.length; i++){
            let img = new Image();
            img.src = arr[i];
            this.imageCache[arr[i]] = img;
        }
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); //MovableObject wird jetzt neu auf das Canvas gezeichnet
    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss){
            ctx.beginPath();
            ctx.lineWidth = '10';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(movableObject){
        return this.x + this.width > movableObject.x &&
            this.y + this.height > movableObject.y &&
            this.x < movableObject.x &&
            this.y < movableObject.y + movableObject.height
    }

    playAnimation(images){ //iterates through an array of pictures to simulate an animation
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight(){ //moving right
        this.x += this.speed;
    }

    moveLeft(){ //moving left
        this.x -= this.speed;
    }

    applyGravity (){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }

    isAboveGround(){
        return this.y < 130; // level of the ground 
    }

    jump(){
        this.speedY = 30; //height of jump
    }

    hit(){
        this.health -= 15; // this.movableObject.damage
        if (this.health < 0){
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime(); //saving time in miliseconds
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; // difference in miliseconds
        timepassed = timepassed / 1000; // difference in seconds
        return timepassed < 1;
    }

    isDead(){
        return this.health == 0;
    }
    // #endregion
}