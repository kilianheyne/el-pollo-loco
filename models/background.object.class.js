class BackgroundObject extends MovableObject {
    y = 0;
    width = 1440;
    height = 480;

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
    }
}