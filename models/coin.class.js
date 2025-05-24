class Coin extends Collectable {
    
    width = 160;
    height = 160;
    y = 20;

    offset = {
        top: 55,
        right: 55,
        bottom: 55,
        left: 55 
    }


    constructor (x){
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.x = x;
        this.getRealFrame();
    }
}