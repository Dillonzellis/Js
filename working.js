"use strict";

const remainder = 110;
const total = 314;

const calcRemainder = function (current, remainder) {
  return console.log(Math.round((current / remainder) * 100 * 100) / 100);
};

calcRemainder(remainder, total);
