import Game from './core/Game.js'

const canvas = document.querySelector('canvas')

if (!canvas) {
    throw new Error('Canvas não foi encontrado')
}

const game = new Game(canvas)
game.loop()