const BalanceHandler1 =  require("./BalanceHandler");
const BalanceHandler2 =  require("./BalanceHandler");

BalanceHandler1.add(20)
BalanceHandler1.add(10)

BalanceHandler2.add(30)
console.log(BalanceHandler1.sum())
