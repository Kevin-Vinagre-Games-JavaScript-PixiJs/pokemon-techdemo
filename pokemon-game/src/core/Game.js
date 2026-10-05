import InputHandler from './InputHandler.js'
import Player from '../entities/Player.js'
import IslandHouseMap from '../world/IslandHouse.js'

class Game {
    constructor(canvas) {
        this.canvas = canvas
        this.canvas.width = 1024
        this.canvas.height = 576
        this.context = canvas.getContext('2d')

        this.input = new InputHandler()

        this.map = new IslandHouseMap({
            image: new Image(),
            collisions: collisions,
            offset: { x: -15, y: -710 }
        })

        this.map.image.src = './assets/img/maps/IslandHouse_zoomed.png'

        this.player = new Player({
            x: 0,
            y: 0,
            image: this.loadImage('./assets/img/character/playerDown.png')
        })
    }

    loadImage(src) {
        const img = new Image()
        img.src = src
        return img
    }

    update() {
        if (this.input.keys.w.pressed) this.map.offset.y += 3
        if (this.input.keys.s.pressed) this.map.offset.y -= 3
        if (this.input.keys.a.pressed) this.map.offset.x += 3
        if (this.input.keys.d.pressed) this.map.offset.x -= 3
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.map.draw(this.context)
        this.player.draw(this.context, this.canvas)
    }

    loop() {
        requestAnimationFrame(() => this.loop())
        this.update()
        this.draw()
    }
}

export default Game