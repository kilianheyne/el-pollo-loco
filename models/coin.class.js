class Coin extends Collectable {
    
    width = 160;
    height = 160;
    y = 20;


    constructor (x){
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.x = x;
    }
}