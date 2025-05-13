class BackgroundObject extends MovableObject {
    x = 0;
    y = 330;
    width = 350;

    constructor(imagePath){
        super().loadImage(imagePath);
    }
}