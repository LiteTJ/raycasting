class Player
{
    #width;
    #pos;
    #angle; //Angle clockwise from North in radians

    constructor(x, y, width)
    {
        this.#width = width;
        this.#pos = new Vector2D(x, y);
        this.#angle = Math.PI * 0.8;
    }

    get width() { return this.#width; }
    get x() { return this.#pos.x; }
    get y() { return this.#pos.y; }

    get span()
    {
        return 135 * Math.PI/180;
    }

    get spanLeftAngle()
    {
        return this.#angle - this.span/2;
    }

    get spanRightAngle()
    {
        return this.#angle + this.span*2;
    }

    _getOffsetPosition(mag)
    {
        let offset = new Vector2D(
            mag * Math.sin(this.#angle),
            mag * Math.cos(this.#angle) * -1
            );

        let offsetPosition = this.#pos.copy();
        offsetPosition.add(offset);

        return offsetPosition;
    }

    turn(angle)
    {
        this.#angle += angle;
    }

    draw(ctx)
    {
        ctx.save();

        //Draw body
        ctx.fillStyle = "#0000ff";
        ctx.beginPath();
        ctx.arc(this.#pos.x, this.#pos.y, this.#width/2, 0, Math.PI*2);
        ctx.fill();

        //Draw direction pointer
        let offsetPos = this._getOffsetPosition(this.#width*2);

        ctx.lineWidth = this.#width * 0.1;
        ctx.strokeStyle = "#ff0000";
        ctx.beginPath();
        ctx.moveTo(this.#pos.x, this.#pos.y);
        ctx.lineTo(offsetPos.x, offsetPos.y);
        ctx.stroke();

        ctx.restore();
    }
}