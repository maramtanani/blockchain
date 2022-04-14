const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('3bbd04892931e4580ad0f600c8b22f72239070f81387216e77453016143f3c7f');
const myWalletAddress = myKey.getPublic('hex');

let savejeeCoin = new Blockchain();

const txt = new Transaction(myWalletAddress, ' Public key goes here', 10);
txt.signTransaction(myKey);
savejeeCoin.addTransaction(txt);


console.log('\n Starting the miner...');
savejeeCoin.minePendingTransactions(myWalletAddress);
console.log('\n Balance of xvaier is: ', savejeeCoin.getBalanceOfAddress(myWalletAddress));

/*
savejeeCoin.creatTransaction(new Transaction('address1', 'address2', 200));
savejeeCoin.creatTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner...');
savejeeCoin.minePendingTransactions('xaviers-address');
console.log('\n Balance of xvaier is: ', savejeeCoin.getBalanceOfAddress('xaviers-address'));
*/


/*
console.log('Mining block 1..');
savejeeCoin.addBlock(new Block(1, "01/01/2001", {amount: 4}));

console.log('Mining block 2..');
savejeeCoin.addBlock(new Block(2, "02/02/2020", {amount: 10}));

*/



//console.log(JSON.stringify(savejeeCoin, null, 4));
//console.log('Is valid '+ savejeeCoin.isChainValid());