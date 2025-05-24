class DrawableObject {
    // #region attributes
    x = 100;
    y = 270;
    width = 65;
    height = 150;
    img;
    imageCache = {};
    currentImage = 0;

    rX; //"realFrame"-Variable für bessere Hitboxen im Gameplay
    rY; //"realFrame"-Variable für bessere Hitboxen im Gameplay
    rWidth; //"realFrame"-Variable für bessere Hitboxen im Gameplay
    rHeight; //"realFrame"-Variable für bessere Hitboxen im Gameplay

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
        if (arr.length > 0) {
            this.img = this.imageCache[arr[0]];
        }
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); //MovableObject wird jetzt neu auf das Canvas gezeichnet
    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof Coin || this instanceof Salsabottle){
            ctx.beginPath();
            ctx.lineWidth = '10';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawSecondFrame(ctx){
        if(this instanceof Character || this instanceof Salsabottle){
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.rX, this.rY, this.rWidth, this.rHeight);
            ctx.stroke();
        }
    }

    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rWidth = this.width - this.offset.left - this.offset.right;
        this.rHeight = this.height - this.offset.top - this.offset.bottom;
    }
}