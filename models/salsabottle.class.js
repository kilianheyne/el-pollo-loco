class Salsabottle extends Collectable {
    
    y = 270;

    offset = {
        top: 30,
        right: 55,
        bottom: 20,
        left: 55 
    }


    constructor (x){
        super();
        this.loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = x;
        this.getRealFrame();
    }
}