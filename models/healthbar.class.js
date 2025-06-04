/**
 * Display the current health of the playable character.
 * @class
 */
class HealthBar extends Statusbar {
    // #region attributes 
    percentage = 100;

    // #endregion
    // #region constructor
    /**
     * Creates a new helathbar instance and initializes its images.
     */
    constructor (){
        super();
        this.loadImages(ImageHub.statusbar.health);
        this.setHealth(100);
    }
    // #endregion
    // #region methods
    /**
     * Sets the current health value and updates the displayed image.
     * @param {number} percentage - health percentage between 0 and 100
     */
    setHealth(percentage){
        this.percentage = percentage;
        let path = ImageHub.statusbar.health[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the correct image based on characters current health.
     * @returns {number} - Index of the image that should be used.
     */
    resolveImageIndex(){
        if (this.percentage == 100){
            return 0;
        } else if (this.percentage > 80){
            return 1;
        } else if (this.percentage > 60){
            return 2;
        } else if (this.percentage > 40){
            return 3;
        } else if (this.percentage > 20){
            return 4;
        } else {
            return 5;
        }
    }
    // #endregion
}