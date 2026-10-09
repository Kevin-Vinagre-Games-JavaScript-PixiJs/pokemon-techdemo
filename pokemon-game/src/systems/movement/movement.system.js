import { getInputState } from "../input/input.system.js";
import renderEngine from "../rendering/render.system.js";

const keys = getInputState();

function movement({ player }) {
    if (keys.ArrowRight) player.components.transform.x -= 2;
    if (keys.ArrowLeft) player.components.transform.x += 2;
    if (keys.ArrowUp) player.components.transform.y += 2;
    if (keys.ArrowDown) player.components.transform.y -= 2;
    renderEngine.updateObject(player)
}

export { movement }
