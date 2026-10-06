class RenderEngine {

    constructor() {
        this.idbase = 0
        this.renderObjects = []

    }

    async addObject({ object }) {
        const imagem = new Image()
        imagem.src = object.image
        await image.decode()
        this.renderObjects.push({
            oid: this.idbase += 1,
            image: imagem,
            x: object.x,
            y: object.y
        });
        return this.idbase
    }

    updateObject({ object }) {
        this.renderObjects.forEach(Renderobjects => {
            if (Renderobjects.oid === object.oid) {
                if (Renderobjects.x !== object.x) Renderobjects.x = object.x
                if (Renderobjects.y !== object.y) Renderobjects.y = object.y
            }
        })
    }

    removeObject({ oid }) {
        this.renderObjects = this.renderObjects.filter(object => object.oid !== oid);
    }

    clearRender() {
        if (this.idbase > 0) this.idbase = 0
        this.renderObjects.length = 0
    }

    render(context) {
        this.renderObjects.forEach(Object => {
            context.drawImage(Object.image, Object.x, Object.y)
        })
    }

}
const renderEngine = new RenderEngine()

export default renderEngine;