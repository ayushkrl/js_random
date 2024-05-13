const accountId = 1789
let accountEmail = "abc@sharklasers.com"
var accountPassword = "12345"
let accountState;
accountCity = "Ranchi"

// accountId = 5 // not allowed
// Let and Var -> 
// scope - { }, scope naam ki chiz nahi thi phle, isslea Let mein scope laya gaya
// wrna ek jagah ka code doosre jagah par change ho jata cuz of Var

/* 
Prefer not to use var 
because of issue in Block Scope and functional Scope
*/

accountEmail = "123@123.com"
accountPassword = "555"
accountCity = "Jamshedpur"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

