import renderEngine from "../systems/rendering/render.system.js";
import createPlayer from "../entities/Player.js";
import { movement } from "../systems/movement/movement.system.js";

class IslandHouse {
    player = null
    async start({ canvas }) {

        const playerSpawPoint = {
            x: canvas.width / 2 - 25,
            y: canvas.height / 2
        }
        this.player = createPlayer({
            image: new URL("../assets/img/character/playerDown.png", import.meta.url).href,
            x: playerSpawPoint.x,
            y: playerSpawPoint.y
        })

        await renderEngine.addObject({
            components: {
                sprite: {
                    image: new URL("../assets/img/maps/IslandHouse_zoomed.png", import.meta.url).href,
                    offset: {
                        x: -17,
                        y: -710
                    },
                    size: {
                        width: canvas.width,
                        height: canvas.height
                    }

                },
                transform: {
                    x: 0,
                    y: 0
                }
            }
        })
        this.player.components.oid = await renderEngine.addObject(this.player)
    }

    update() {
        movement({ player: this.player });
    }
}

export default IslandHouse