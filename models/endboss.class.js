class Endboss extends MovableObject {
    // #region attributes
    width = 300; 
    height = 340;
    y = 110;

    offset = {
        top: 60,
        right: 40,
        bottom: 20,
        left: 35
    };
    // #endregion
    // #region constructor
    constructor(){
        super();
        this.loadImage(ImageHub.endboss.walk[0]);
        this.loadImages(ImageHub.endboss.walk);
        this.x = 1600;
        IntervalHub.setStoppableInterval(this.animateWalk, 1000 / 5);
    }
    // #endregion
    // #region methods

    animateWalk = () =>  {
        this.playAnimation(ImageHub.endboss.walk)
        this.getRealFrame();
    }
    // #endregion
}