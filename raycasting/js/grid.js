class Grid
{
    #width;
    #height;
    #data;

    blocks = [];

    constructor(canvas)
    {
        this.#width = canvas.width;
        this.#height = canvas.height;

        this.#data = WORLDMAP;
        this._createBlocks();
    }

    get data() { return this.#data; }

    get rows() { return this.#data.length; }
    get columns() { return this.#data[0].length; }
    get blockWidth() { return this.#width / this.columns; }
    get blockHeight() { return this.#height / this.rows; }

    _createBlocks()
    {
        let x,
            y = 0;

        this.blocks = [];

        this.#data.forEach((arr, i) => {
            x = 0;

            arr.forEach((char, j) => {
                if(char === 1) this.blocks.push(new Block(x, y, this.blockWidth));
                x += this.blockWidth;
            });

            y += this.blockHeight;
        });
    }

    draw(ctx)
    {
        this.blocks.forEach((block) => {
            block.draw(ctx);
        });
    }

}