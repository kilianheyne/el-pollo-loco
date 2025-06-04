/**
 * Creates the health bar for the endboss of the game to display the boss's current health status
 * @class
 */
class BossHealthBar extends Statusbar {
    /**
     * Current health level of the boss in percentage steps (0-5).
     * @type {number}
     */
    percentage = 5;

    x = 212;
    y = 4;
    width = 350;
    height =70;

    /**
     * Prepares the image for the statusbar and defines the shown image
     */
    constructor(){
        super();
        this.loadImages(ImageHub.statusbar.boss);
        this.setHealth(100);
    }

    /**
     * Sets the boss's health and updates the status bar image accordingly.
     * @param {number} percentage - The health level to display (0-5).
     */
    setHealth(percentage){
        this.percentage = percentage;
        let path = ImageHub.statusbar.boss[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the iamge index based on the current health percentage.
     * @returns {number} - Index for selecting thr correct boss health image.
     */
    resolveImageIndex(){
        if (this.percentage >= 5){
            return 0;
        } else if (this.percentage >= 4){
            return 1;
        } else if (this.percentage >= 3){
            return 2;
        } else if (this.percentage >= 2){
            return 3;
        } else if (this.percentage >= 1){
            return 4;
        } else {
            return 5;
        }
    }
}