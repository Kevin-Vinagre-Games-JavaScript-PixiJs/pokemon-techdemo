class RenderEngine {

    constructor() {
        this.idbase = 0
        this.renderObjects = []

    }

    async addObject({ components }) {
        const imagem = new Image()
        imagem.src = components.sprite.image
        await imagem.decode()
        this.renderObjects.push({
            oid: this.idbase += 1,
            sprite: {
                image: imagem,
                offset: {
                    x: components.sprite.offset.x,
                    y: components.sprite.offset.y
                }
            },
            transform: {
                x: components.transform.x + components.sprite.offset.x,
                y: components.transform.y + components.sprite.offset.y
            }
        });
        return this.idbase
    }

    updateObject({ components }) {
        this.renderObjects.forEach(Renderobjects => {
            if (Renderobjects.oid === components.oid) {
                if (Renderobjects.transform.x !== components.x) Renderobjects.transform.x = components.transform.x
                if (Renderobjects.transform.y !== components.y) Renderobjects.transform.y = components.transform.y
            }
        })
    }

    removeObject({ oid }) {
        this.renderObjects = this.renderObjects.filter(components => components.oid !== oid);
    }

    clearRender() {
        if (this.idbase > 0) this.idbase = 0
        this.renderObjects.length = 0
    }

    render(context) {
        this.renderObjects.forEach(components => {
            context.drawImage(components.sprite.image, components.transform.x, components.transform.y)
        })
    }

}
const renderEngine = new RenderEngine()

export default renderEngine;