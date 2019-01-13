const { Blockchain , Transaction} = require('./blockchain');

let sahilCoin = new Blockchain();
sahilCoin.createTransaction(new Transaction('add1','add2',100));
sahilCoin.createTransaction(new Transaction('add2','add1',40));

console.log("Starting the mining...");
sahilCoin.minePendingTransactions("Sahil-address");

console.log("\n Balance of sahil is " + sahilCoin.getBalanceAddress('Sahil-address'));

console.log("Starting the mining...");
sahilCoin.minePendingTransactions("Sahil-address");
console.log("\n Balance of sahil is " + sahilCoin.getBalanceAddress('Sahil-address'));
