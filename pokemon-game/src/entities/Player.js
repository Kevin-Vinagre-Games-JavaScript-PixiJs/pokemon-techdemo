import Transform from "../components/Transform";
import Sprite from "../components/Sprite";

function createPlayer({ image, x, y }) {
    return {
        id: crypto.randomUUID(),
        components: {
            tranform: new Transform(x, y),
            sprite: new Sprite({
                image,
                offset: {
                    x: 0,
                    y: 0,
                },
                size: {
                    width: 12,
                    height: 12
                }
            })
        }
    }
}