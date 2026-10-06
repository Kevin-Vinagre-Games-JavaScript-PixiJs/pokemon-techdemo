import renderEngine from "../systems/rendering/render.system.js";

class IslandHouse {
    async start() {
        await renderEngine.addObject({
            object: {
                image: new URL("../assets/img/maps/IslandHouse_zoomed.png", import.meta.url).href,
                x: 0,
                y: 0,
                offset: {
                    x: -17,
                    y: -710
                }
            }
        })
    }

    update() {

    }
}

export default IslandHouse