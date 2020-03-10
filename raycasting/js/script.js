const canvas_b = document.getElementById("birdview");
const canvas_p = document.getElementById("playerview");
const ctx_b = canvas_b.getContext("2d");
const ctx_p = canvas_p.getContext("2d");

let GAME;

function init()
{
    GAME = new Game();
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

    init();
    tick();
}