class Vector2D
{
    #x;
    #y;

    constructor(x, y)
    {
        this.#x = x;
        this.#y = y;
    }

    get x() { return this.#x; }
    get y() { return this.#y; }

    get magnitude()
    {
        return Math.sqrt(this.#x**2 + this.#y**2);
    }

    setX(x)
    {
        this.#x = x;
    }

    setY(y)
    {
        this.#y = y;
    }

    set(position)
    {
        this.#x = position.x;
        this.#y = position.y;
    }

    addX(x)
    {
        this.#x += x;
    }

    addY(y)
    {
        this.#y += y;
    }

    add(position)
    {
        this.#x += position.x;
        this.#y += position.y;
    }

    subtract(position)
    {
        this.#x -= position.x;
        this.#y -= position.y;
    }

    copy() { return new Vector2D(this.x, this.y); };

    isZero()
    {
        return (this.#x === 0 && this.#y === 0);
    }

    round()
    {
        //Rounds to 2 decimal places
        this.#x = Math.round(this.#x * 100) / 100;
        this.#y = Math.round(this.#y * 100) / 100;
    }
    
}