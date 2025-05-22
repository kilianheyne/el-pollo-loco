class HealthBar extends Statusbar {
    // #region attributes 
    percentage = 100;
    // #endregion
    // #region constructor
    constructor (){
        super();
        this.loadImages(ImageHub.statusbar.health);
        this.x = 20;
        this.setHealth(100);
    }
    // #endregion
    // #region methods
    setHealth(percentage){
        this.percentage = percentage;
        let path = ImageHub.statusbar.health[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

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
    //
}