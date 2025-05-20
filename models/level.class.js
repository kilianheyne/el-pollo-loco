class Level {
    // #region attributes
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 3600;
    // #endregion
    // #region constructor
    constructor(enemies, clouds, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
    // #endregion
}