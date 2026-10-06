import renderEngine from "../systems/rendering/render.system.js";

class IslandHouse {
    async start() {
        await renderEngine.addObject({
            object: {
                image: "../assets/img/IslandHouse_zoomed.png",
                x: 0,
                y: 0
            }
        })
    }

    update() {

    }
}

export default IslandHouse