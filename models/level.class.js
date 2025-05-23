class Level {
    // #region attributes
    enemies;
    coins;
    bottles;
    clouds;
    backgroundObjects;
    level_end_x = 3600;
    // #endregion
    // #region constructor
    constructor(enemies, clouds, backgroundObjects, coins, bottles){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
    // #endregion
}