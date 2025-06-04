/**
 * A status bar that show how many bottles are available for fighting the endboss.
 * @class
 */
class BottleBar extends Statusbar {

    y = 64;

    /**
     * Initializes the bottle bar and loads the bottle status images.
     */
    constructor (){
        super();
        this.loadImages(ImageHub.statusbar.bottle);
    }

    /**
     * Updates the image of the bottle bar to reflext the current number of collected bottles.
     */
    setBottleBar(){
        let path = ImageHub.statusbar.bottle[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determins the image index for the bottle bar based on the number of collected bottles.
     * @returns {number} - Index used to select the correct image from ImageHub (in hub.class).
     */
    resolveImageIndex(){
        if (this.world.collectedBottles.length == 0){
            return 0;
        } else if (this.world.collectedBottles.length == 1){
            return 1;
        } else if (this.world.collectedBottles.length == 2){
            return 2;
        } else if (this.world.collectedBottles.length == 3){
            return 3;
        } else if (this.world.collectedBottles.length == 4){
            return 4;
        } else {
            return 5;
        }
    }
}