const canvas = document.querySelector('canvas')

const context = canvas.getContext('2d')


canvas.width = 1024
canvas.height = 576

const collisionsMap = []

for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, i + 70))

}
class Boundary {

}

context.fillStyle = 'white'
context.fillRect(0, 0, canvas.width, canvas.height)

const mapImg = new Image()
mapImg.src = './assets/img/maps/IslandHouse_zoomed.png'

const playerImg = new Image()
playerImg.src = './assets/img/character/playerDown.png'

class Sprite {
    position
    image
    constructor({ position, velocity, image }) {
        this.position = position
        this.image = image
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({ position: { x: -15, y: -710 }, image: mapImg })

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}
function animate() {
    window.requestAnimationFrame(animate);
    background.draw(context);
    context.drawImage(playerImg,
        0,
        0,
        playerImg.width / 4,
        playerImg.height,
        ((canvas.width / 2) - (playerImg.width / 4) / 2),
        ((canvas.height / 2) - (playerImg.height / 4) / 2),
        playerImg.width / 4,
        playerImg.height)
    if (keys.w.pressed) background.position.y += 3
    if (keys.s.pressed) background.position.y -= 3
    if (keys.a.pressed) background.position.x += 3
    if (keys.d.pressed) background.position.x -= 3
}
animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break

    }
    console.log(keys);
})
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break

    }
})

