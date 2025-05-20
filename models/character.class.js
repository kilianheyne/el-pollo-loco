class Character extends MovableObject{
    // #region attributes
    width = 120;
    height = 300;
    y = 0;
    speed = 3;

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ]
    world;
    // #endregion
    // #region constructor
    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING); 
        this.animate();
        this.applyGravity();
    }
    // #endregion
    // #region methods
    animate(){
        setInterval(() => { 
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){ //moving to the right
                this.moveRight();
                this.otherDirection = false;
                // this.walking_sound.play();
            }
            if(this.world.keyboard.LEFT && this.x > 0){ //moving to the left
                this.moveLeft();
                this.otherDirection = true;
                // this.walking_sound.play();
            }
            if(this.world.keyboard.SPACE && !this.isAboveGround()){ //jumping
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => { 
            if (this.isAboveGround()){ // jump animation
                this.playAnimation(this.IMAGES_JUMPING);
            }else{
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){ // walk animation
                this.playAnimation(this.IMAGES_WALKING);
                }
            }
            
        }, 104);
    }
    // #endregion 
}