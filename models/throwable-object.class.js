class ThrowableObject extends MovableObject {
    // #region attributes

    offset = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    };
    // #endregion
    // #region constructor
    constructor(x, y, facingLeft){
        super();

        this.loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(ImageHub.salsabottle.rotation);
        this.loadImages(ImageHub.salsabottle.splash);

        this.x = x; 
        this.y = y;
        this.throw(x, y);
        this.height = 150;
        this.width = 100;
        this.facingLeft = facingLeft;

        IntervalHub.setStoppableInterval(this.animate, 1000/60);
        //IntervalHub.setStoppableInterval(this.throw(x, y), 1000/60);
    }
    // #endregion
    // region methods
    throw (x, y){
        this.x = x;
        this.y = y; 
        this.speedY = 25; 
        this.applyGravity();

        setInterval(() => {
            if (this.facingLeft){
                this.x -= 12;
            } else {
                this.x += 12;
            }
        }, 1000 / 59)
    }

    // throw = (x, y) => {
    //     this.x = x;
    //     this.y = y;
    //     this.speedY = 25;
    //     this.applyGravity();

    //     if (this.facingLeft){
    //         this.x -= 12;
    //     } else {
    //         this.x += 12;
    //     }
    // }

    animate = () => {
        this.getRealFrame();
        this.playAnimation(ImageHub.salsabottle.rotation);
    }
    // #endregion
}