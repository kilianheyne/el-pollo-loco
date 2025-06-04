/**
 * Class as a visual base for the entire project. All drawable objects, such as characters, items and enemies are are handled here.
 * It handles image loading, drawing and framing of hitboxes.
 * @class
 */
class DrawableObject {
    // #region attributes
    x = 100;
    y = 270;
    width = 65;
    height = 150;
    img;

    /**
     * Stores multiple preloaded images used for a variety of animations.
     */
    imageCache = {};
    currentImage = 0;

    rX; //"realFrame"-Variable für bessere Hitboxen im Gameplay
    rY; //"realFrame"-Variable für bessere Hitboxen im Gameplay
    rWidth; //"realFrame"-Variable für bessere Hitboxen im Gameplay
    rHeight; //"realFrame"-Variable für bessere Hitboxen im Gameplay

    // #endregion
    // #region methods
    /**
     * Loads a signle image and assigne it to the object.
     * @param {string} path - Path to the image file. 
     */
    loadImage(path){
        this.img = new Image(); // entspricht einer Zusammenfassung von HTML & JS => HTML: <img id="image">; JS: const img = document.getElementById('image');
        this.img.src = path;
    }

    /**
     * Puts multiple images into the image cache & sets the first image as default.
     * @param {string[]} arr - Array of image paths. 
     */
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

    /**
     * Draws the object on the canvas.
     * @param {dingens} ctx - Canvas context (2D). 
     */
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); //MovableObject wird jetzt neu auf das Canvas gezeichnet
    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Endboss || this instanceof Coin || this instanceof Salsabottle){
            ctx.beginPath();
            ctx.lineWidth = '10';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawSecondFrame(ctx){
        if(this instanceof ThrowableObject || this instanceof Chicken || this instanceof Character || this instanceof Endboss){
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.rX, this.rY, this.rWidth, this.rHeight);
            ctx.stroke();
        }
    }

    /**
     * Calculates a refined hitbox to actually match the visual appearance in game.
     */
    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rWidth = this.width - this.offset.left - this.offset.right;
        this.rHeight = this.height - this.offset.top - this.offset.bottom;
    }
}