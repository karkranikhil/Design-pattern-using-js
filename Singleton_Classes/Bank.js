class Bank{
    constructor(){
      this.balance=0
    }
    add(amount){
      return this.balance+=amount
    }
    subtract(amount){
      return this.balance-=amount
    }
    sum(){
      return this.balance
    }
  }
module.exports = new Bank()