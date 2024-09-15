const accountId = 1234
let accountEmail = "kbhadouriya05@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2
/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId);

accountEmail = "hp@gmai.com"
accountPassword = "2121212121"
accountCity = "Bengluru"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])