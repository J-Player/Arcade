import chalk from "chalk"

const colorText = {
    'black': chalk.blackBright,
    'blue': chalk.blueBright,
    'cyan': chalk.cyanBright,
    'green': chalk.greenBright,
    'magenta': chalk.magentaBright,
    'red': chalk.redBright,
    'white': chalk.whiteBright,
    'yellow': chalk.yellowBright,
}

const colorBg = {
    'black': chalk.bgBlackBright,
    'blue': chalk.bgBlueBright,
    'cyan': chalk.bgCyanBright,
    'green': chalk.bgGreenBright,
    'magenta': chalk.bgMagentaBright,
    'red': chalk.bgRedBright,
    'white': chalk.bgWhiteBright,
    'yellow': chalk.bgYellowBright,
}

/**
 * 
 * @param {String} text 
 * @param {colorText | undefined} color 
 * @param {colorBg | undefined} bg 
 */
export function colorString(text, color, bg) {
    if (colorText[color]) text = colorText[color](text)
    if (colorBg[bg]) text = colorBg[bg](text)
    return text
}
