class MovableObject {
    x = 120;
    y = 400;
    img;
    
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