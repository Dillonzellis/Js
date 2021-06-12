
// #1
const dolphinsAvg = ((96+108+89) / 3)
const koalasAvg = ((88+91+110) / 3)

console.log(`Dolphins average = ${dolphinsAvg}`);
console.log(`Koalas average = ${koalasAvg}`);

// #2
if(dolphinsAvg > koalasAvg) {
    console.log(`Dolphins average is higher`);
} else if (dolphinsAvg === koalasAvg) {
    console.log(`There is a draw the scores are equal`);
} else {
    console.log(`Koalas average is higher`);
}

// Bonus #1
console.log(`Bonus #1 Dolphins average score is ${dolBonusAvg = ((97+108+101) /3)}`);
console.log(`Bonus #1 Koalas average score is ${koaBonusAvg = ((109+95+123) /3)}`);

if(dolBonusAvg > koaBonusAvg && dolBonusAvg >= 100)  {
    console.log(`Dolphins average is higher and above 100`);
} else if (dolBonusAvg === koaBonusAvg) {
    console.log(`There is a draw the scores are equal`);
} else if(dolBonusAvg < koaBonusAvg && dolBonusAvg >= 100) {
    console.log(`Koalas average is higher and above 100`);
} else { 
console.log(`the scores did not exceed the minimum(100)`);
}

// Bonus #2
if(dolBonusAvg > koaBonusAvg && dolBonusAvg >= 100)  {
    console.log(`Dolphins average is higher and above 100`);
} else if (dolBonusAvg === koaBonusAvg && dolBonusAvg >= 100 && koaBonusAvg >= 100) {
    console.log(`There is a draw the scores are equal and above 100`);
} else if(dolBonusAvg < koaBonusAvg && koaBonusAvg >= 100) {
    console.log(`Koalas average is higher and above 100`);
} else { 
console.log(`The scores did not exceed the minimum(100). No trophy was rewarded`);
}




