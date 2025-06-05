/**
 * Main logic for initializing and managing the game flow. 
 * 
 * Responsibilities: 
 * - Displaying and hiding start, win and loose screens
 * - Initializing the game world and starting/restarting the game
 * - Handling keyboard and touch controls
 * - Playing audio using the AudioHub
 * 
 * Dependencies: 
 * - World
 * - Keyboard
 * - AudioHub
 * - IntervalHub
 */
let canvas;
let world;
let keyboard = new Keyboard();
let isShowing = false;

const startScreen = document.getElementById('start-screen');
const winScreen = document.getElementById('win-screen');
const looseScreen = document.getElementById('loose-screen');

/**
 * Initializes the game.
 * - Bind the canvas
 * - Sets up the level
 * - Displays the start screen
 * - Hides win/lose screens
 * - Loads audio settings from localStorage
 */
function init(){
    canvas = document.getElementById('canvas');
    initLevel();
    showStartScreen();
    hideWinScreen();
    hideLooseScreen();
    AudioHub.setFromLocalStorage();
}

/**
 * Display the start screen.
 */
function showStartScreen(){
    startScreen.classList.remove('hide');
    startScreen.classList.add('show');
    startScreen.style.zIndex = 10;
}

function showStartFromWin(){
    initLevel();
    showStartScreen();
    hideWinScreen();
}

function showStartFromLoose(){
    initLevel();
    showStartScreen();
    hideLooseScreen();
}

/**
 * Hides the start screen.
 */
function hideStartScreen(){
    startScreen.classList.add('hide');
    startScreen.classList.remove('show');
    startScreen.style.zIndex = -10;
}

/**
 * Start the game.
 * - Hides the start screen
 * - Creates a new World instance
 * - Stars background music
 */
function startGame(){
    hideStartScreen();
    world = new World(canvas, keyboard);
    AudioHub.playSound(AudioHub.backgroundMusic);
}

/**
 * Restart the game.
 * - Reinitializes the level
 * - Cretes a new World instance
 * - Hides win/loose screens
 */
function restartGame(){
    initLevel();
    world = new World(canvas, keyboard);
    hideWinScreen();
    hideLooseScreen();
}

/** 
 * Displays the win screen, stops all intervals, and plays the win sound.
 */
function showWinScreen(){
    winScreen.classList.add('show');
    winScreen.classList.remove('hide');
    winScreen.style.zIndex = 15;
    IntervalHub.stopEveryInterval();
    AudioHub.playSound(AudioHub.win);
}

/**
 * Hides the win screen.
 */
function hideWinScreen(){
    winScreen.classList.add('hide');
    winScreen.classList.remove('show');
    winScreen.style.zIndex = -15;
}

/**
 * Displays the lose screen, stop all intervals, and plays the lose sound.
 */
function showLooseScreen(){
    looseScreen.classList.add('show');
    looseScreen.classList.remove('hide');
    looseScreen.style.zIndex = 15;
    IntervalHub.stopEveryInterval();
    AudioHub.playSound(AudioHub.loose);
}

/**
 * Hides the lose screen. 
 */
function hideLooseScreen(){
    looseScreen.classList.add('hide');
    looseScreen.classList.remove('show');
    looseScreen.style.zIndex = -15;
}

/**
 * Toggles visibility of the control info UI (for mobile or keyboard users).
 */
function showControlls(){
    let controllsRef = document.getElementById('key-info')
    if (!isShowing){
        isShowing = true
        controllsRef.classList.add('show');
        controllsRef.classList.remove('hide');
    } else {
        isShowing = false;
        controllsRef.classList.add('hide');
        controllsRef.classList.remove('show');
    }
}

/**
 * Plays a click sound when the player clicks (e.g., on UI buttons).
 */
function mouseClick(){
    AudioHub.playSound(AudioHub.click);
}

//#region controlls with keyboard

/**
 * Listens to keydown events and updates the keyboard state accordingly.
 */
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

/**
 * Listens to keyup events and resets the keyboard state accordingly.
 */
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

//#endregion
//#region controlls with touch

/**
 * Touch control bindings for mobile UI.
 */
document.getElementById('mo-ui-left').addEventListener('touchstart', () => {keyboard.LEFT = true;});
document.getElementById('mo-ui-left').addEventListener('touchend', () => {keyboard.LEFT = false;});

document.getElementById('mo-ui-right').addEventListener('touchstart', () => {keyboard.RIGHT = true;});
document.getElementById('mo-ui-right').addEventListener('touchend', () => {keyboard.RIGHT = false;});

document.getElementById('mo-ui-throw').addEventListener('touchstart', () => {keyboard.SHIFT = true;});
document.getElementById('mo-ui-throw').addEventListener('touchend', () => {keyboard.SHIFT = false;});

document.getElementById('mo-ui-jump').addEventListener('touchstart', () => {keyboard.SPACE = true;});
document.getElementById('mo-ui-jump').addEventListener('touchend', () => {keyboard.SPACE = false;});

//#endregion