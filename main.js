const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index,timestamp,data,prevHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calculateHash;
    }

    calculateHash(){
       return SHA256(this.index + this.prevHash + this.timestamp + JSON.stringify(this.data)).toString;
    }
}

class Blockchain {
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, '01/01/1996', "Genesis Block", '0');
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let sahilCoin = new Blockchain();
sahilCoin.addBlock(new Block(1, "02/01/1996", { amount: 5}));
sahilCoin.addBlock(new Block(2, "04/01/1996", { amount: 1}));

console.log(JSON.stringify(sahilCoin,null,4));
