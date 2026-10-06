import IslandHouse from "../scenes/IslandHouse.js";
import renderEngine from "../systems/rendering/render.system.js";
class Game {

    constructor({ canvas = document.querySelector('canvas') }) {
        this.canvas = canvas;
        this.canvas.width = 1024
        this.canvas.height = 576
        this.context = this.canvas.getContext('2d')
        this.activeScene = null
    }

    async start() {
        this.activeScene = new IslandHouse()
        await this.activeScene.start()
        this.loop()
    }

    loop() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.activeScene?.update();
        requestAnimationFrame(() => this.loop())
    }

}

const game = new Game()
game.start()