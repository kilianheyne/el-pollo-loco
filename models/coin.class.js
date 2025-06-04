/**
 * One of the collectables in this level. Can be picked up by the player.
 * @class
 */
class Coin extends Collectable {
    
    width = 160;
    height = 160;
    y = 20;

    /**
     * Numbers to correct the hitbox of coins.
     */
    offset = {
        top: 55,
        right: 55,
        bottom: 55,
        left: 55 
    }

    /**
     * Creates a new coin at the given positions with a corrected hitbox.
     * @param {number} x - The horizontal position where the coin should appear.
     */
    constructor (x){
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.x = x;
        this.getRealFrame();
    }
}