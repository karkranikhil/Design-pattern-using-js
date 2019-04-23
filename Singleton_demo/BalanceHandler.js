let balance = 0 
const BalanceHandler={
  add(amount){
    return balance +=amount 
  },
  subtract(amount){
    if(amount<= balance){
      balance -=amount
    }
    else {
      return false
    }
  },
  sum(){
    return balance
  }
}
module.exports= BalanceHandler