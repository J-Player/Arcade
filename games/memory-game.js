import chalk from 'chalk'

const inquirer = require('inquirer')
const chalk = require('chalk')
const Game = require('./game.js')

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

class MemoryGame extends Game {
    
    constructor() {
        super({name: 'Jogo da Memória'})
        this.colors = [
            chalk.redBright('Vermelho', 'red'),
            chalk.greenBright('Verde', 'green'),
            chalk.blueBright('Azul', 'blue'),
            chalk.yellowBright('Amarelo', 'yellow')
        ]
        this.sequence = []
        this.options = []
        for (const color of this.colors) {
            this.options.push(color)
        }
        this.options.push('Desistir')
    }
    
    randomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)]
    }
    
    async displaySequence(delay = 1000) {
        for (let i = 0; i < this.sequence.length; i++) {
            console.log(`${this.sequence[i]} (${i + 1} de ${this.sequence.length})`)
            await sleep(delay)
            console.clear()
        }
    }
    
    async play() {
        await this.reset()
        while (true) {
            this.sequence.push(this.randomColor())
            await this.displaySequence()
            let hits = 0
            for (let i = 0; i < this.sequence.length; i++) {
                let answer = await inquirer.prompt({
                    message: `Qual é a cor? (${i + 1} de ${this.sequence.length})`,
                    choices: this.options,
                    type: 'list',
                    name: 'resposta'
                })
                if ((answer.resposta === this.options[this.options.length - 1]) || (answer.resposta !== this.sequence[i])) {
                    console.log(`${chalk.redBright('GAME OVER! A sequência correta é:')}`)
                    console.log(`${this.sequence.join(' => ')}`)
                    console.log(`Você acertou ${hits} de ${this.sequence.length}.`)
                    let n = 3
                    console.log(`Retornando ao lobby...`)
                    await sleep(5000)
                    return
                }
                hits++
                console.clear()
            }
        }
    }
    
    async reset() {
        console.clear()
        this.sequence.length = 0
    }
    
}

module.exports = MemoryGame