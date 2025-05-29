let canvas;
let world;
let keyboard = new Keyboard();
const startScreen = document.getElementById('start-screen');

function init(){
    canvas = document.getElementById('canvas');
    showStartScreen();
    world = new World(canvas, keyboard);
}

function showStartScreen(){
    startScreen.classList.remove('hidden');
    startScreen.classList.remove('show');
    startScreen.style.zIndex = 10;

}

function hideStartScreen(){
    startScreen.classList.remove('hidden');
    startScreen.classList.remove('show');
    startScreen.style.zIndex = -10;
}

function startGame(){
    hideStartScreen();
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