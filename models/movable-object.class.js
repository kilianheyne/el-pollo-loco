class MovableObject {
    x = 100;
    y = 270;
    img;
    width = 65;
    height = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.06;
    
    loadImage(path){
        this.img = new Image(); // entspricht einer Zusammenfassung von HTML & JS => HTML: <img id="image">; JS: const img = document.getElementById('image');
        this.img.src = path;
    }

    loadImages(arr){
        for(let i = 0; i < arr.length; i++){
            let img = new Image();
            img.src = arr[i];
            this.imageCache[arr[i]] = img;
        }
    }

    moveRight(){
        console.log('Moving right!');
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
}