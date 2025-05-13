class MovableObject {
    x = 100;
    y = 250;
    img;
    width = 65;
    height = 150;
    
    loadImage(path){
        this.img = new Image(); // entspricht einer Zusammenfassung von HTML & JS => HTML: <img id="image">; JS: const img = document.getElementById('image');
        this.img.src = path;
    }

    moveRight(){
        console.log('Moving right!');
    }

    moveLeft(){

    }
}