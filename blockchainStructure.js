const { SHA512 } = require('crypto-js');
const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash= ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = '';
    }
    calculateHash(){

        return SHA256(this.index + this.previousHash + this.timestamp
            + JSON.stringify(this.data)).toString();
    } 
}
class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock(){
        return new Block(0, "01/01/2022","Genesis block" , "0");
    }
    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash= newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for(let i= 1; i< this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previouBlock = this.chain[i-1];

            
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previouBlock.hash){
                return false;
            }
        }
        return true;
    }
}
let savejeeCoin = new BlockChain();
savejeeCoin.addBlock(new Block(1, "01/01/2001", {amount: 4}));
savejeeCoin.addBlock(new Block(2, "02/02/2020", {amount: 10}));

//console.log(JSON.stringify(savejeeCoin, null, 4));
console.log('Is valid '+ savejeeCoin.isChainValid());