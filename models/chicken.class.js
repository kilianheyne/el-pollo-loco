class Chicken extends MovableObject{
    // #region attributes
    y = 360;
    width = 60;
    height = 60;
    damage = 15; 

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
        this.loadImages(ImageHub.chicken.walk);
        this.x = 200 + Math.random() * 500;
        this.animate();
        this.speed = 0.06 + Math.random() * 0.25;
    }
    // #endregion
    // #region methods
    animate(){ 
        setInterval(() => { // walk animation
            this.playAnimation(ImageHub.chicken.walk);
        }, 1000 / 5);

        setInterval(() => { //actual movement
            this.moveLeft();
            this.getRealFrame();
        }, 1000 / 60)
    }
    // #endregion
}