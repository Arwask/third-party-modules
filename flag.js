'use strict';

const chalk = require('chalk');

let redStrip = chalk.bgRed.bold(' ').repeat(34);
let whiteStrip = chalk.bgWhite.bold(' ').repeat(34);
// console.log(redStrip);
// console.log(whiteStrip);

let blueBlock1 = chalk.bgBlue.bold(` * * * * * * *  `);
let blueBlock2 = chalk.bgBlue.bold(`* * * * * * * * `);
for(let i=0;i<7;i++) {
        if(i%2 === 0)
            console.log(blueBlock1+redStrip);
        else
            console.log(blueBlock2+whiteStrip);
}
let fullRedStrips = chalk.bgWhite.bold(' ').repeat(50);
let fullWhiteStrips = chalk.bgRed.bold(" ").repeat(50);

for(let i=0; i<3; i++) {
    console.log(fullRedStrips);
    console.log(fullWhiteStrips);
}