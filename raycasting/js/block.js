class Block
{
    #width;
    #pos;

    constructor(x, y, width)
    {
        this.#width = width;
        this.#pos = new Vector2D(x, y);
    }

    get hitbox()
    {
        return new SAT.Box(new SAT.Vector(this.#pos.x, this.#pos.y), this.#width, this.#width).toPolygon();
    }

    draw(ctx)
    {
        ctx.save();

        ctx.fillStyle = "#000";
        ctx.fillRect(this.#pos.x, this.#pos.y, this.#width, this.#width);

        ctx.restore();
    }
}