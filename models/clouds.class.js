class Cloud extends MovableObject{
    // #region attributes
    width = 2000;
    height = 600;
    speed = 0.03;
    y = -70;
    // #endregion
    // #region constructor
    constructor(){
        super();
        this.loadImage('img/5_background/layers/4_clouds/full.png') //fügt das Bild auf dem Canvas ein
        this.x = Math.random() * 500; // zufällige Positionierung auf der x-Koordinate
        this.animate(); // führt die Funktion animate() aus, welche dafür sorgt, das sich die Wolke langsam nach links bewegt
    }
    // #endregion
    // #region methods
    animate(){
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
    // #endregion
}