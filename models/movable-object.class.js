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

    moveRight(){
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
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
        return this.y < 130;
    }

    jump(){
        this.speedY = 30;
    }
    // #endregion
}