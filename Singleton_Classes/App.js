const User1 = require('./User1')
const User2 = require('./USER2');
const user1 = new User1()
const user2 = new User2()

user1.depositAmount(50)
user2.depositAmount(100)

user1.withdrawAmount(10)
user2.withdrawAmount(20)

console.log(`User one account
 balance is ${user1.getBalance()}`)
console.log(`User two account
balance is ${user2.getBalance()}`)