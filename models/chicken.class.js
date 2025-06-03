/**
 * Creates a moving chicken that poses as an enemy.
 * It simply moves to the left and has a walk animation while moving.
 * @class
 */
class Chicken extends MovableObject{
    // #region attributes
    x = 200 + Math.random() * 2000;
    y = 360;
    width = 80;
    height = 80;
    speed = 0.06 + Math.random() * 0.25;

    /**
     * Numbers to correct the hitbox of chickens.
     */
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    isDead = false;

    // #endregion
    // #region constructor
    /**
     * Creates a chicken and starts its movement and animation intervals.
     */
    constructor(){
        super();
        this.loadImages(ImageHub.chicken.walk);
        this.walkInterval = IntervalHub.setStoppableInterval(this.animateWalk, 1000/5);
        this.moveInterval = IntervalHub.setStoppableInterval(this.animateMovement, 1000/60);
    }
    // #endregion
    // #region methods

    animateWalk = () => {
        this.playAnimation(ImageHub.chicken.walk);
    }

    animateMovement = () => {
        this.moveLeft();
        this.getRealFrame();
    }

    stopChickenInterval(){
        clearInterval(this.walkInterval);
        clearInterval(this.moveInterval);
    }

    // #endregion
}