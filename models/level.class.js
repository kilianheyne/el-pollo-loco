class Level {
    // #region attributes
    enemies;
    coins;
    clouds;
    backgroundObjects;
    level_end_x = 3600;
    // #endregion
    // #region constructor
    constructor(enemies, clouds, backgroundObjects, coins){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
    }
    // #endregion
}