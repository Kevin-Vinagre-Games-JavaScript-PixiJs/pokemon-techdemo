class Sprite {
    constructor({ image, offset = { x: 0, y: 0 }, size = { width: 0, height: 0 } }) {
        this.image = image
        this.offset = { ...offset }
        this.size = { ...size }
    }
}

export default Sprite