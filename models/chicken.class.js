class Chicken extends MovableObject{
    // #region attributes
    y = 360;
    width = 60;
    height = 60;
    damage = 15; 

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    // #endregion
    // #region constructor
    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500;
        this.animate();
        this.speed = 0.06 + Math.random() * 0.25;
    }
    // #endregion
    // #region methods
    animate(){ 
        setInterval(() => { // walk animation
            this.playAnimation(this.IMAGES_WALKING);
        }, 214);

        setInterval(() => { //actual movement
            this.moveLeft();
        }, 1000 / 60)
    }
    // #endregion
}