'use strict';

// #1
const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

// #2
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

// console.log(`Dolphins1 average scores: ${avgDolphins1}`);
// console.log(`Koalas1 average scores: ${avgKoalas1}`);

// console.log(`Dolphins2 average scores: ${avgDolphins2}`);
// console.log(`Koalas2 average scores: ${avgKoalas2}`);

// #3
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Scores were not sufficient enough for a winner`);
    }
}

// #4
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);

