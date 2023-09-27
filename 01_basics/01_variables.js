const account_Id = 134555;
let accountEmail = "ayushmishra9615@gmail.com";
var accountPassword = "12345";
accountCity = "Varanasi";
let accountState;


// account_Id = 2 // Not allowed

accountEmail = "hc@hc.com";
accountPassword = "54321";
accountCity = "Delhi";


console.log(account_Id);
console.table([account_Id,accountEmail, accountPassword, accountCity, accountState]);

/* 
    Prefer Not use to var
    because of issue in block scope and functional scope
*/