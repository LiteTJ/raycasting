class Player
{
    #width;
    #pos;
    #speed;
    #rotation;
    #angle; //Angle clockwise from North in radians

    constructor(x, y, width)
    {
        this.#width = width;
        this.#pos = new Vector2D(x, y);
        this.#speed = 3;
        this.#rotation = 0.5/Math.PI;
        this.#angle = Math.PI * 0.8;
    }

    get width() { return this.#width; }
    get x() { return this.#pos.x; }
    get y() { return this.#pos.y; }
    get angle() { return this.#angle; }

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

    tick(scale)
    {
        let speed = this.#speed * scale/24;

        if(KEYS[37]) this.#pos.addX(-speed);
        if(KEYS[38]) this.#pos.addY(-speed);
        if(KEYS[39]) this.#pos.addX(speed);
        if(KEYS[40]) this.#pos.addY(speed);

        //A key
        if(KEYS[65])
        {
            this.turn(-this.#rotation);
        }

        //D key
        if(KEYS[68])
        {
            this.turn(this.#rotation);
        }
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