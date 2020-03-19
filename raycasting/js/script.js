const canvas_b = document.getElementById("birdview");
const canvas_p = document.getElementById("playerview");
const ctx_b = canvas_b.getContext("2d");
const ctx_p = canvas_p.getContext("2d");

let GAME, KEYS = [];

function init()
{
    for(let i = 0; i < 255; i++)
    {
        KEYS[i] = false;
    }

    GAME = new Game();

    //Set event handlers
    document.onkeyup = (e) => {
        KEYS[e.keyCode] = false;
    }

    document.onkeydown = (e) => {
        KEYS[e.keyCode] = true;
    }
}

function tick()
{
    GAME.tick();

    window.requestAnimationFrame(tick);
}

window.onload = () => {
    console.log("Hello world!");
    console.log("Tidy up Raycaster._createRays()");
    console.log("Tidy up Raycaster.draw3D()");
    console.log("Show instrucrtions via HTML. Arrow keys + A + W");
    console.log("Extension: Make this into a game. Collision detection of blocks.");

    init();
    tick();
}