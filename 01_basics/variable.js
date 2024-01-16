const accountId=100;
let accountEmail="mashak@gmail.com";
var accountPassword="1234";

accountCity="talikoti"; //not recommended 
let accountSate;  //undefined

// accountId=167; //not Allowed,Assignment to constant variable.

accountEmail="intyaz@gmail.com";
accountPassword=12345;
accountCity="bengalore";

console.log(accountId);
/* prefer not to use var because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity,accountSate])