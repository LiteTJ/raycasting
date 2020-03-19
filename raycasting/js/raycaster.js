class Raycaster
{
    #resolution = 100;

    grid;
    player;
    rays;

    constructor(grid, player)
    {
        this.grid = grid;
        this.player = player;
        this.rays = [];
    }

    _createRays(resolution, canvas, ctx)
    {
        this.rays = [];

        let deltaAngle = this.player.span / resolution,
            angle = this.player.spanLeftAngle;

        for(let i = 0; i < resolution; i++)
        {
            let ray = new Ray(this.player.x, this.player.y, angle);
            angle += deltaAngle;

            let rayBlocked = false;

            while(!ray.isOutOfScreen(canvas) && !rayBlocked)
            {
                ray.move(this.grid.blockWidth / 16);

                this.grid.blocks.forEach(block => {

                    if(SAT.pointInPolygon(ray.hitbox, block.hitbox))
                    {
                        rayBlocked = true;
                    }
                });

            }

            ray.calcMagnitude(this.player.angle);
            this.rays.push(ray);
        }

    }

    tick(canvas, ctx)
    {
        //Field of view is around 135 degrees (or 2.36 rad) for a human
        this._createRays(this.#resolution, canvas, ctx);
    }

    draw2D(ctx)
    {
        this.rays.forEach(ray => {
            ctx.save();

            ctx.lineWidth = this.player.width * 0.1;
            ctx.strokeStyle = "#00ff00";
            ctx.beginPath();

            ctx.moveTo(ray.startPosition.x, ray.startPosition.y);
            ctx.lineTo(ray.position.x, ray.position.y);
            ctx.stroke();

            ctx.restore();
        });
    }

    draw3D(canvas, ctx)
    {
        let x = 0,
            deltaX = canvas.width / this.#resolution;

        this.rays.forEach(ray => {
            let length = canvas.height / ray.correctMagnitude * 20;

            ctx.save();

            ctx.globalAlpha = length / canvas.height; //The further away, the more opaque the line

            ctx.lineWidth = this.player.width * 0.1;
            ctx.strokeStyle = "#000";
            ctx.beginPath();

            ctx.moveTo(x, canvas.height/2 + length/2);
            ctx.lineTo(x, canvas.height/2 - length/2);
            ctx.stroke();

            ctx.restore();

            x += deltaX;
        });
    }
}