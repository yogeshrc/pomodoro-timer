class PomoTimer {
    constructor() {
        this.count = 25
    }

    start() {
        this.pTimer = setInterval( _ => {
            console.log(this.count)
            this.count--
            if(this.count < 0) {
                clearInterval(this.pTimer)
                this.count = 25
            }
        }, 1000)
    }

    pause() {
        clearInterval(this.pTimer)
    }

    reset() {
        this.count = 25
    }
}

module.exports = new PomoTimer()
