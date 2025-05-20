class Endboss extends MovableObject {
    // #region attributes
    width = 300; 
    height = 340;
    y = 110; 
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    // #endregion
    // #region constructor
    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 700;
        this.animate();
    }
    // #endregion
    // #region methods
    animate(){ // Bewegungsanimation für den Endboss (Gehen)
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 214)
    }
    // #endregion
}