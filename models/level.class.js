/**
 * A class that creates a single level for the game. Incorporates all objectives needed for a level.
 */
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
    /**
     * Creates a new level with all the mandatory objects.
     * @param {Array} enemies 
     * @param {Array} clouds 
     * @param {Array} backgroundObjects 
     * @param {Array} coins 
     * @param {Array} bottles 
     */
    constructor(enemies, clouds, backgroundObjects, coins, bottles){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
    // #endregion
}