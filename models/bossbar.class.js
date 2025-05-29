class BossHealthBar extends Statusbar {
    percentage = 5;

    constructor(){
        super();
        this.loadImages(ImageHub.statusbar.boss);
        this.x = 200;
        this.y = 54;
        this.width = 350;
        this.height = 70;
        this.setHealth(100);
    }

    setHealth(percentage){
        this.percentage = percentage;
        let path = ImageHub.statusbar.boss[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        if (this.percentage >= 5){
            return 0;
        } else if (this.percentage >= 4){
            return 1;
        } else if (this.percentage >= 3){
            return 2;
        } else if (this.percentage >= 2){
            return 3;
        } else if (this.percentage >= 1){
            return 4;
        } else {
            return 5;
        }
    }
}