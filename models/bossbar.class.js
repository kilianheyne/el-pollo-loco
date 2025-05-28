class BossHealthBar extends Statusbar {
    percentage = 100;

    constructor(){
        super();
        this.loadImages(ImageHub.statusbar.boss);
        this.x = 180;
        this.y = 54;
        this.width = 400;
        this.height = 80;
        this.setHealth(100);
    }

    setHealth(percentage){
        this.percentage = percentage;
        let path = ImageHub.statusbar.boss[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        if (this.percentage === 100){
            return 0;
        } else if (this.percentage > 80){
            return 1;
        } else if (this.percentage > 60){
            return 2;
        } else if (this.percentage > 40){
            return 3;
        } else if (this.percentage > 20){
            return 4;
        } else {
            return 5;
        }
    }
}