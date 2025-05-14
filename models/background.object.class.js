class BackgroundObject extends MovableObject {
    x = 0;
    y = 0;
    width = 1440;
    height = 480;

    constructor(imagePath){
        super().loadImage(imagePath);
    }
}