import { getInputState } from "../input/input.system.js";
import renderEngine from "../rendering/render.system.js";

const keys = getInputState();

function movement({ map }) {
    if (keys.d) map.components.transform.x -= 2;
    if (keys.a) map.components.transform.x += 2;
    if (keys.w) map.components.transform.y += 2;
    if (keys.s) map.components.transform.y -= 2;
    renderEngine.updateObject(map)
}

export { movement }
