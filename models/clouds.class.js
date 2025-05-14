class Cloud extends MovableObject{
    width = 400;
    height = 250;
    speed = 0.06;

    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png')

        this.x = Math.random() * 500;
        this.y = Math.random() * 150;

        this.animate();
    }

    animate(){
        this.moveLeft();
    }
}