export default class Game {
    
    constructor(options) {
        this.name = options.name
    }

    async play() {
        throw new Error('Implementação de método é necessária!')
    }

    async reset() {
        throw new Error('Implementação de método é necessária!')
    }

}