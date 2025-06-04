/**
 * Display the collected amount of coins as a status bar.
 * @class
 */
class CoinBar extends Statusbar {
    
    y = 34;

    /**
     * Creates the coin bar and lads the relevant images from the hub.class.
     */
    constructor (){
        super();
        this.loadImages(ImageHub.statusbar.coin);
    }

    /**
     * Resolves the right image to display based on the amount of coins collected.
     */
    setCoinBar(){
        let path = ImageHub.statusbar.coin[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Returns a number based on the amount of coins collected.
     * @returns {number} - Index for the image array.
     */
    resolveImageIndex(){
        if (this.world.collectedCoins.length == 0){
            return 0;
        } else if (this.world.collectedCoins.length == 1){
            return 1;
        } else if (this.world.collectedCoins.length == 2){
            return 2;
        } else if (this.world.collectedCoins.length == 3){
            return 3;
        } else if (this.world.collectedCoins.length == 4){
            return 4;
        } else {
            return 5;
        }
    }
}