'use strict';

const { bgBlue, bgRed, bgWhite } = require('chalk');
const STAR = 	"\u2605";
let redStrip = bgRed.bold(' ').repeat(34);
let whiteStrip = bgWhite.bold(' ').repeat(34);
// console.log(redStrip);
// console.log(whiteStrip);

let blueBlock1 = bgBlue.bold((" "+STAR).repeat(7)+" ");
let blueBlock2 = bgBlue.bold((STAR+" ").repeat(7)+STAR);
for(let i=0;i<7;i++) {
        if(i%2 === 0)
            console.log(blueBlock1+redStrip);
        else
            console.log(blueBlock2+whiteStrip);
}
let fullRedStrips = bgWhite.bold(' ').repeat(49);
let fullWhiteStrips = bgRed.bold(" ").repeat(49);

for(let i=0; i<3; i++) {
    console.log(fullRedStrips);
    console.log(fullWhiteStrips);
}