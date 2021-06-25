"use strict";

const remainder = 114;
const total = 314;

const calcRemainder = function (current, remainder) {
  return console.log(`Remaining: ${Math.round((current / remainder) * 100 * 100) / 100} %`);
};

calcRemainder(remainder, total);
