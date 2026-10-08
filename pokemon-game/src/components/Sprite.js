class Sprite {
    constructor({ image }) {
        this.image = image.sprite
        this.offset.x = image.offset.x
        this.offset.y = image.offset.y
        this.size.width = image.size.width
        this.size.height = image.size.height
    }
}

export default Sprite