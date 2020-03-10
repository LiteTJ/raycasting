class Ray
{
    #dir;
    #startPos;
    #currentPos;

    constructor(x, y, dir)
    {
        this.#startPos = new Vector2D(x, y);
        this.#currentPos = this.#startPos.copy();
        this.#dir = dir
    }

    get startPosition() { return this.#startPos; }
    get position() { return this.#currentPos; }

    get magnitude()
    {
        let start = this.#startPos.copy(),
            end = this.#currentPos.copy();

        start.subtract(end);

        return start.magnitude;
    }

    //Hitbox for the current position (point)
    get hitbox()
    {
        return new SAT.Vector(this.#currentPos.x, this.#currentPos.y);
    }

    isOutOfScreen(canvas)
    {
        return ((this.#currentPos.x < 0) || (this.#currentPos.x > canvas.width)
            ||
            (this.#currentPos.y < 0) || (this.#currentPos.y > canvas.height))
    }

    move(mag)
    {
        let offset = new Vector2D(
            mag * Math.sin(this.#dir),
            mag * Math.cos(this.#dir) * -1
            );

        this.#currentPos.add(offset);
    }
}