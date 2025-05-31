class Endboss extends MovableObject {
    // #region attributes
    x = 2600;
    width = 300; 
    height = 340;
    y = 110;


    health = 5; 
    isDead = false; // flag for health bar
    playedDeathAnimation = false;
    hadFirstContact = false;

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
        this.loadImages(ImageHub.endboss.alert);
        this.loadImages(ImageHub.endboss.attack);
        this.loadImages(ImageHub.endboss.hurt);
        this.loadImages(ImageHub.endboss.dead);
        this.endbossWalkInterval = IntervalHub.setStoppableInterval(this.animateWalk, 1000 / 5);
        //this.endbossIntroInterval = IntervalHub.setStoppableInterval(this.animateIntro, 1000 / 5);
    }
    // #endregion
    // #region methods

    animateWalk = () =>  {
        if (!this.isDead){
            this.playAnimation(ImageHub.endboss.walk)
        }
        this.getRealFrame();
    }

    animateIntro = () => {
        let i = 0;
        if (i < ImageHub.endboss.walk.length){
            this.playAnimation(ImageHub.endboss.walk);
            console.log('Endboss walks');
        } else {
            this.playAnimation(ImageHub.endboss.alert);
            console.log('Endboss is alert');
        }
        i++;
        if (this.world.character.x > 2200 && !this.hadFirstContact){
            i = 0;
            hadFirstContact = true;
        }
    }

    gotHit(){
        if (!this.isDead){
            this.health--;
            console.log(`Endboss getroffen! Remaining health: ${this.health}`)
        }
        if (this.health <= 0){
            this.died();
        }
    }

    died(){
        this.isDead =  true;
        this.playAnimation(ImageHub.endboss.dead);
        this.playedDeathAnimation = true;
    }

    stopEndbossInterval(){
        IntervalHub.stopInterval(endbossWalkInterval);
    }
    // #endregion
}