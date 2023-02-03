#!/usr/bin/env node

const inquirer = require('inquirer')
const MemoryGame = require('./games/memory-game.js')

await menu()

async function menu() {
    let options = []
    options.push('Jogo da Memória')
    options.push('Sair')
    while(true) {
        let answer = await inquirer.prompt({
            message: 'Escolha uma das opções abaixo:',
            choices: options,
            loop: true,
            type: 'list',
            name: 'escolha'
        })
        console.clear()
        switch (answer.escolha) {
            case 'Jogo da Memória':
                await new MemoryGame().play()
                break
            default:
                return
        }
    }
}