class RenderEngine {

    constructor() {
        this.renderObjects = [];

    }

    addObject({ data }) {
        this.renderObjects.push(data);
    }

    removeObject({ data }) {
        this.renderObjects = this.renderObjects.filter(item => item !== data);
    }

    render(context) {
        this.renderObjects.forEach(Object => {
            context.drawImage(Object.image, Object.x, Object.y)
        })
    }

}
const renderEngine = new RenderEngine()

export default renderEngine;