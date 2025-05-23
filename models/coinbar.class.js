class CoinBar extends Statusbar {


    constructor (){
        super();
        this.loadImages(ImageHub.statusbar.coin);
        this.x = 250;
    }

    setCoinBar(){
        let path = ImageHub.statusbar.coin[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        if (this.world.collectedCoins.length == 0){
            return 0;
        } else if (this.world.collectedCoins.length == 1){
            return 1;
        } else if (this.world.collectedCoins.length == 2){
            return 2;
        } else if (this.world.collectedCoins.length == 3){
            return 3;
        } else if (this.world.collectedCoins.length == 4){
            return 4;
        } else {
            return 5;
        }
    }
}