class Game {

    constructor({ canvas = document.querySelector('canvas') }) {
        this.canvas = canvas;
        this.canvas.width = 1024
        this.canvas.height = 576
        this.context = this.canvas.getContext('2d')
    }

    update() {

    }

    loop() {
        requestAnimationFrame(this.loop)
        this.update()
    }

}

const game = new Game()
game.loop()