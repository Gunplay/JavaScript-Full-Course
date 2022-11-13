'use strict';

const usdCurr = 41;
const eurCurr = 39;

function convert( amount, currency) {
    console.log(currency * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);
