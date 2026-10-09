class Sprite {
    constructor({ image,
        offset = { x: 0, y: 0 },
        size = { width: 0, height: 0 },
        crop = { x: 0, y: 0, width: 0, height: 0 } }) {
        this.image = image
        this.offset = { ...offset }
        this.size = { ...size }
        this.crop = { ...crop }
    }
}

export default Sprite