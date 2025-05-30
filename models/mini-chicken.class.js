class MiniChicken extends MovableObject{
    // #region attributes
    y = 360;
    width = 80;
    height = 80;

    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    // #endregion
    // #region constructor
    constructor(){
        super();
        
        this.loadImages(ImageHub.smallChicken.walk);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.06 + Math.random() * 0.25;

        this.walkInterval = IntervalHub.setStoppableInterval(this.animateWalk, 1000/5);
        this.moveInterval = IntervalHub.setStoppableInterval(this.animateMovement, 1000/60);
    }
    // #endregion
    // #region methods

    animateWalk = () => {
        this.playAnimation(ImageHub.smallChicken.walk);
    }

    animateMovement = () => {
        this.moveLeft();
        this.getRealFrame();
    }

    stopChickenInterval(){
        IntervalHub.stopInterval(this.walkInterval);
        IntervalHub.stopInterval(this.moveInterval);
    }

    // #endregion
}