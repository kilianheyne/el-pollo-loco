class DrawableObject {
    // #region attributes
    x = 100;
    y = 270;
    width = 65;
    height = 150;
    img;
    imageCache = {};
    currentImage = 0;
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
}