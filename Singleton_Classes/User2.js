const bank = require('./Bank');

//const bank = new Bank();

class User2 {
  depositAmount(amount){
    return bank.add(amount)
  }
  withdrawAmount(amount){
    return bank.subtract(amount)
  }
  getBalance(){
    return bank.sum()
  }
}
module.exports = User2;