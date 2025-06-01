let canvas;
let world;
let keyboard = new Keyboard();

const startScreen = document.getElementById('start-screen');
const winScreen = document.getElementById('win-screen');
const looseScreen = document.getElementById('loose-screen');

function init(){
    canvas = document.getElementById('canvas');
    initLevel();
    showStartScreen();
    hideWinScreen();
    hideLooseScreen();
}

function showStartScreen(){
    startScreen.classList.remove('hide');
    startScreen.classList.add('show');
    startScreen.style.zIndex = 10;
}

function hideStartScreen(){
    startScreen.classList.add('hide');
    startScreen.classList.remove('show');
    startScreen.style.zIndex = -10;
}

function startGame(){
    hideStartScreen();
    world = new World(canvas, keyboard);
    AudioHub.playSound(AudioHub.backgroundMusic);
}

function restartGame(){
    initLevel();
    world = new World(canvas, keyboard);
    hideWinScreen();
    hideLooseScreen();
}

function showWinScreen(){
    winScreen.classList.add('show');
    winScreen.classList.remove('hide');
    winScreen.style.zIndex = 15;
    IntervalHub.stopEveryInterval();
    AudioHub.playSound(AudioHub.win);
}

function hideWinScreen(){
    winScreen.classList.add('hide');
    winScreen.classList.remove('show');
    winScreen.style.zIndex = -15;
}

function showLooseScreen(){
    looseScreen.classList.add('show');
    looseScreen.classList.remove('hide');
    looseScreen.style.zIndex = 15;
    IntervalHub.stopEveryInterval();
    AudioHub.playSound(AudioHub.loose);
}

function hideLooseScreen(){
    looseScreen.classList.add('hide');
    looseScreen.classList.remove('show');
    looseScreen.style.zIndex = -15;
}

function mouseClick(){
    AudioHub.playSound(AudioHub.click);
}

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyW"){
        keyboard.UP = true;
    };
    if(event.code == "KeyA"){
        keyboard.LEFT = true;
    }
    if(event.code == "KeyS"){
        keyboard.DOWN = true;
    };
    if(event.code == "KeyD"){
        keyboard.RIGHT = true;
    };
    if(event.code == "Space"){
        keyboard.SPACE = true;
    };
    if(event.code == "ShiftLeft"){
        keyboard.SHIFT = true;
    };
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyW"){
        keyboard.UP = false;
    };
    if(event.code == "KeyA"){
        keyboard.LEFT = false;
    }
    if(event.code == "KeyS"){
        keyboard.DOWN = false;
    };
    if(event.code == "KeyD"){
        keyboard.RIGHT = false;
    };
    if(event.code == "Space"){
        keyboard.SPACE = false;
    };
    if(event.code == "ShiftLeft"){
        keyboard.SHIFT = false;
    };
});