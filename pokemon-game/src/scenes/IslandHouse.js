import renderEngine from "../systems/rendering/render.system.js";
import createPlayer from "../entities/Player.js";

class IslandHouse {
    async start() {
        const playerSpawPoint = { x: 0, y: 0 }
        await renderEngine.addObject({
            components: {
                sprite: {
                    image: new URL("../assets/img/maps/IslandHouse_zoomed.png", import.meta.url).href,
                    offset: {
                        x: -17,
                        y: -710
                    }

                },
                transform: {
                    x: 0,
                    y: 0
                }
            }
        })
        const player = createPlayer({
            image: new URL("../assets/img/character/playerDown.png", import.meta.url).href,
            x: playerSpawPoint.x,
            y: playerSpawPoint.y
        })
        player.components.oid = await renderEngine.addObject(player)
    }

    update() {

    }
}

export default IslandHouse