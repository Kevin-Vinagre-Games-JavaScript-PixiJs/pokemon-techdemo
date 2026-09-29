const canvas = document.querySelector('canvas')

const context = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

context.fillStyle = 'white'
context.fillRect(0, 0, canvas.width, canvas.height)

const mapImg = new Image()
mapImg.src = './assets/img/maps/IslandHouse_zoomed.png'

const playerImg = new Image()
playerImg.src = './assets/img/character/playerDown.png'

let loaded = 0;
function drawWhenReady() {
    loaded++;
    if (loaded === 2) {
        context.drawImage(mapImg, -15, -710);
        context.drawImage(playerImg,
            0,
            0,
            playerImg.width / 4,
            playerImg.height,
            ((canvas.width / 2) - (playerImg.width / 4) / 2),
            ((canvas.height / 2) - (playerImg.height / 4) / 2),
            playerImg.width / 4,
            playerImg.height)
    }
}
mapImg.onload = drawWhenReady
playerImg.onload = drawWhenReady


window.addEventListener('keydown', (e) => {
    console.log(e.key)
    switch (e.key) {
        case 'w':
            console.log("move up")
            break
        case 'a':
            console.log("move left")
            break
        case 's':
            console.log("move back")
            break
        case 'd':
            console.log("move right")
            break

    }
})

