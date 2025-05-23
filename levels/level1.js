const level1 = new Level(
    //enemies
    [
        
    ],
    //clouds
    [
        new Cloud()
    ],
    //backgroundobjects
    [
        new BackgroundObject('img/5_background/layers/air.png', -1439),
        new BackgroundObject('img/5_background/layers/3_third_layer/full.png', -1439),
        new BackgroundObject('img/5_background/layers/2_second_layer/full.png', -1439),
        new BackgroundObject('img/5_background/layers/1_first_layer/full.png', -1439),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/full.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/full.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/full.png', 0),

        new BackgroundObject('img/5_background/layers/air.png', 1439),
        new BackgroundObject('img/5_background/layers/3_third_layer/full.png', 1439),
        new BackgroundObject('img/5_background/layers/2_second_layer/full.png', 1439),
        new BackgroundObject('img/5_background/layers/1_first_layer/full.png', 1439),

        new BackgroundObject('img/5_background/layers/air.png', 2877),
        new BackgroundObject('img/5_background/layers/3_third_layer/full.png', 2877),
        new BackgroundObject('img/5_background/layers/2_second_layer/full.png', 2877),
        new BackgroundObject('img/5_background/layers/1_first_layer/full.png', 2877)
    ],
    //coins
    [
        new Coin(400),
        new Coin(600),
        new Coin(800),
        new Coin(1000),
        new Coin(1200)
    ],
    [
        new Salsabottle(400),
        new Salsabottle(600),
        new Salsabottle(800),
        new Salsabottle(1000),
        new Salsabottle(1200)
    ]
);