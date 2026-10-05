class InputHandler {
    constructor() {
        this.keys = {
            w: { pressed: false },
            a: { pressed: false },
            s: { pressed: false },
            d: { pressed: false }
        }
        this.bindEvents()
    }

    bindEvents() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'w') this.keys.w.pressed = true
            if (e.key === 'a') this.keys.a.pressed = true
            if (e.key === 's') this.keys.s.pressed = true
            if (e.key === 'd') this.keys.d.pressed = true
        })

        window.addEventListener('keyup', (e) => {
            if (e.key === 'w') this.keys.w.pressed = false
            if (e.key === 'a') this.keys.a.pressed = false
            if (e.key === 's') this.keys.s.pressed = false
            if (e.key === 'd') this.keys.d.pressed = false
        })
    }
}

export default InputHandler