import Transform from "../components/Transform.js";
import Sprite from "../components/Sprite.js";

function createPlayer({ image, x, y }) {
    return {
        id: crypto.randomUUID(),
        components: {
            oid: null,
            transform: new Transform(x, y),
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

export default createPlayer