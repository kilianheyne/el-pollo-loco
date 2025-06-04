/**
 * Represents an item that can be thrown to damage the endboss.
 * @class
 */
class ThrowableObject extends MovableObject {
    // #region attributes

    height = 150;
    width = 100;

    enemyHitted = false;
    splashAnimated = false;

    offset = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    };
    // #endregion
    // #region constructor
    /**
     * Cretes a new throwable item at the current position of the playable character and the direction he is facing.
     * @param {number} x - initial position from where the item should be thrown
     * @param {number} y - initial position from where the item should be thrown
     * @param {boolean} facingLeft - direction of throw
     */
    constructor(x, y, facingLeft){
        super();

        this.loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(ImageHub.salsabottle.rotation);
        this.loadImages(ImageHub.salsabottle.splash);

        this.x = x; 
        this.y = y;
        this.throw(x, y);
        this.facingLeft = facingLeft;

        this.animateInterval = IntervalHub.setStoppableInterval(this.animate, 1000/60);
        this.trajectoryInterval = IntervalHub.setStoppableInterval(this.trajectory, 1000/60);
    }
    // #endregion
    // region methods

    throw(x, y){
        this.x = x;
        this.y = y;
        this.speedY = 25;
        this.applyGravity();
        AudioHub.playSound(AudioHub.throwBottle);
    }

    trajectory = () => {
        if (this.facingLeft){
            this.x -= 12;
        } else {
            this.x += 12;
        }
    }

    animate = () => {
        this.getRealFrame();
        if(!this.enemyHitted){
            this.playAnimation(ImageHub.salsabottle.rotation);
        }
    }

    splash(){
        this.enemyHitted = true;
        this.speedY = 0;
        this.stopThrowInterval();
        this.playAnimation(ImageHub.salsabottle.splash);

        setTimeout(() => {
            this.splashAnimated = true;
        }, 400);
    }

    stopThrowInterval(){
        clearInterval(this.throwInterval);
        clearInterval(this.trajectoryInterval);
        clearInterval(this.gravityInterval);
    }
    // #endregion
}