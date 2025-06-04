/**
 * Bottle that the character can pick up from the ground. Can be thrown after collecting.
 * @class
 */
class Salsabottle extends Collectable {
    
    y = 270;

    /**
     * Numbers to correct the hitbox of a salsabottle.
     */
    offset = {
        top: 30,
        right: 55,
        bottom: 20,
        left: 55 
    }

    /**
     * Creates a salsa bottle at a specific position on the ground.
     * @param {number} x - position of individual instance in the level. 
     */
    constructor (x){
        super();
        this.loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = x;
        this.getRealFrame();
    }
}