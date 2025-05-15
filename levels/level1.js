const level1 = new Level(
    [
        new Chicken(), //Chicken Nr. 1
        new Chicken(), //Chicken Nr. 2
        new Chicken(), //Chicken Nr. 3
    ],
    [
        new Cloud()
    ],
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

        new BackgroundObject('img/5_background/layers/air.png', 2879),
        new BackgroundObject('img/5_background/layers/3_third_layer/full.png', 2879),
        new BackgroundObject('img/5_background/layers/2_second_layer/full.png', 2879),
        new BackgroundObject('img/5_background/layers/1_first_layer/full.png', 2879)
    ]
);