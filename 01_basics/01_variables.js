const accountId = 144553
let accountEmail = "rekha@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "banglore"
let accountState;
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity ,accountState])
