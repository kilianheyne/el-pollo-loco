class ThrowableObject extends MovableObject {
    // #region attributes

    // #endregion
    // #region constructor
    constructor(x, y){
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = 100; 
        this.y = 100;
        this.throw(x, y);
        this.height = 150;
        this.width = 100;
    }
    // #endregion
    // region methods
    throw (x, y){
        this.x = x;
        this.y = y; 
        this.speedY = 30; 
        this.applyGravity();

        setInterval(() => {
            this.x += 10;
        }, 1000 / 59)
    }
    // #endregion
}