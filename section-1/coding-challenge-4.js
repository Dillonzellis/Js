const startingBill = 275;

function TipCalculator(bill){
    bill >= 50 && bill <= 300 ? tip = 0.15 : tip = 0.2;
    return tipTotal = bill * tip;
}

console.log(`The bill was ${startingBill}, the tip was ${TipCalculator(startingBill)}, and the total value ${TipCalculator(startingBill) + startingBill}.`);

