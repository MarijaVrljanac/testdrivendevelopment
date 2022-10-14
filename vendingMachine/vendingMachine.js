// 6. Machine for buying snacks
// Using TDD create sofware for Machine for buying snacks. 
// Function getChangeVendingMachine accepts two parameters: totalPrice and paidAmount. 
// Array that is returned from function consists coins that machine must return (change value). 
// You have to handle edge cases, implement error handling and 
// write many tests to be sure that your machine works as expected.

function getChangeVendingMachine(totalPrice, paidAmount){
    if(paidAmount < totalPrice){
        throw new Error("Error payment!");
    }

    if(paidAmount == undefined || typeof paidAmount != "number"){
        throw new Error("Error paying with string");
    }

    const coins = [200, 100, 50, 20, 5, 2, 1];
    console.log(coins);
    let changeCoins = [];
    let difference = paidAmount - totalPrice;

    while(difference >= 0){
        for (let index = 0; index < coins.length; index++) {
            if(difference >= coins[index]){
                changeCoins.push(coins[index]);
                difference -= coins[index];   
                index--;       
            }                
        }
            console.log(changeCoins);
            return changeCoins;
    }
    return [];
}

getChangeVendingMachine(158, 400);

module.exports = {getChangeVendingMachine};
