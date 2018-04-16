'use strict';

// console.log('It is \u001b[31mnot\u001b[39m easy to use \u001b[32mhardcoded \u001b[1mANSI\u001b[39m\u001b[22m codes!');

const { bgBlue, bgRed, bgWhite, bgBlack, blue } = require('chalk');
const STAR = 	"\u2605";
const STAR_MARGIN = " "
const STAR_PADDING = " ";
let redStrip = bgRed.bold(' ').repeat(34);
let whiteStrip = bgWhite.bold(' ').repeat(34);


let blueBlock1 = bgBlue.bold((STAR_PADDING+STAR).repeat(7)+STAR_MARGIN.repeat(2));
let blueBlock2 = bgBlue.bold((STAR+STAR_PADDING).repeat(7)+STAR+STAR_MARGIN);
for(let i=0;i<7;i++) {
        if(i%2 === 0)
            console.log(blueBlock1+redStrip);
        else
            console.log(blueBlock2+whiteStrip);
}
let fullRedStrips = bgWhite.bold(' ').repeat(50);
let fullWhiteStrips = bgRed.bold(" ").repeat(50);

for(let i=0; i<3; i++) {
    console.log(fullRedStrips);
    console.log(fullWhiteStrips);
}
