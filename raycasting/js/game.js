class Game
{
    grid;
    player;

    constructor()
    {
        this.grid = new Grid(canvas_b);
        this.player = new Player(180, 180, this.scale/2);

        this.raycaster = new Raycaster(this.grid, this.player);
    }

    get scale()
    {
        return this.grid.blockWidth;
    }

    tick()
    {
        /*------------------Business Logic------------------*/
        this.player.turn(0.01);
        this.raycaster.tick(canvas_b, ctx_b);

        /*-----------------------GUI------------------------*/
        ctx_b.clearRect(0, 0, canvas_b.width, canvas_b.height);
        ctx_p.clearRect(0, 0, canvas_p.width, canvas_p.height);

        this.grid.draw(ctx_b);
        this.raycaster.draw2D(ctx_b);
        this.player.draw(ctx_b);

        this.raycaster.draw3D(canvas_p, ctx_p);
    }

}