class Map {
    constructor({ image, collisions, offset }) {
        this.image = image
        this.collisions = collisions
        this.offset = offset
        this.boundaries = []
        this.buildCollisions()
    }

    buildCollisions() {
        const tileSize = 48
        const rows = Math.ceil(this.collisions.length / 70)

        for (let i = 0; i < rows; i++) {
            const row = this.collisions.slice(i * 70, i * 70 + 70)

            row.forEach((symbol, j) => {
                if (symbol === 1025) {
                    this.boundaries.push({
                        x: j * tileSize + this.offset.x,
                        y: i * tileSize + this.offset.y,
                        width: 48,
                        height: 48
                    })
                }
            })
        }
    }

    draw(context) {
        context.drawImage(this.image, this.offset.x, this.offset.y)
    }
}

export default Map