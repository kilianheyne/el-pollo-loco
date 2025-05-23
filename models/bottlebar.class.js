class BottleBar extends Statusbar {


    constructor (){
        super();
        this.loadImages(ImageHub.statusbar.bottle);
        this.x = 480;
    }

    setBottleBar(){
        let path = ImageHub.statusbar.bottle[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        if (this.world.collectedBottles.length == 0){
            return 0;
        } else if (this.world.collectedBottles.length == 1){
            return 1;
        } else if (this.world.collectedBottles.length == 2){
            return 2;
        } else if (this.world.collectedBottles.length == 3){
            return 3;
        } else if (this.world.collectedBottles.length == 4){
            return 4;
        } else {
            return 5;
        }
    }
}