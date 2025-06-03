/**
 * A background image object, such as desert and sky, that scrolls with the game world.
 * @class
 */
class BackgroundObject extends DrawableObject {
    
    y = 0;
    width = 1440;
    height = 480;

    /**
     * Creates a new background image at the given horizontal position.
     * @param {string} imagePath - The path to the background image.
     * @param {number} x - X-Position, where the background image should be placed. 
     */
    constructor(imagePath, x){
        super();
        this.loadImage(imagePath);
        this.x = x;
    }
}