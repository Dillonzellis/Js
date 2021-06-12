'use strict';

// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100

function caclTip(bill) {
    let tip;
    let tipTotal;

    if(bill >= 50 && bill <= 300) {
        tip = 0.15
    } else {
        tip = 0.2;
    } 
    return tipTotal = bill * tip;
}

// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below

const bill = [125, 555, 44];
console.log(`Bill : ${bill}`);
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before

const tips = [caclTip(bill[0]), caclTip(bill[1]), caclTip(bill[2])]
console.log(`Tips : ${tips}`);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

const total = [caclTip(bill[0]) + bill[0], caclTip(bill[1]) + bill[1], caclTip(bill[2]) + bill[2]];
console.log(`Totals: : ${total}`);

// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 