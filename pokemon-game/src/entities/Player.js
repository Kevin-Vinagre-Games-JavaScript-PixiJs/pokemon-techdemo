class Player {
    constructor({ x, y, image, speed = 3 }) {
        this.x = x
        this.y = y
        this.image = image
        this.speed = speed
    }

    update(keys) {
        if (keys.w.pressed) this.y += this.speed
        if (keys.s.pressed) this.y -= this.speed
        if (keys.a.pressed) this.x += this.speed
        if (keys.d.pressed) this.x -= this.speed
    }

    draw(context, canvas) {
        context.drawImage(
            this.image,
            0,
            0,
            this.image.width / 4,
            this.image.height,
            canvas.width / 2 - this.image.width / 8,
            canvas.height / 2 - this.image.height / 8,
            this.image.width / 4,
            this.image.height
        )
    }
}

export default Player