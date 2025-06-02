class BossHealthBar extends Statusbar {
    percentage = 5;

    x = 200;
    y = 54;
    width = 350;
    height =70;

    constructor(){
        super();
        this.loadImages(ImageHub.statusbar.boss);
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