class RenderEngine {

    constructor() {
        this.idbase = 0
        this.renderObjects = []

    }

    async addObject({ object }) {
        const imagem = new Image()
        imagem.src = object.image
        await imagem.decode()
        this.renderObjects.push({
            oid: this.idbase += 1,
            image: imagem,
            transform: {
                x: object.transform.x + object.offset.x,
                y: object.transform.y + object.offset.y
            }
        });
        return this.idbase
    }

    updateObject({ object }) {
        this.renderObjects.forEach(Renderobjects => {
            if (Renderobjects.oid === object.oid) {
                if (Renderobjects.transform.x !== object.x) Renderobjects.transform.x = object.transform.x
                if (Renderobjects.transform.y !== object.y) Renderobjects.transform.y = object.transform.y
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
            context.drawImage(Object.image, Object.transform.x, Object.transform.y)
        })
    }

}
const renderEngine = new RenderEngine()

export default renderEngine;