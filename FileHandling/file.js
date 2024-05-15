const fs = require("fs");

// sync,,,
// fs.writeFileSync("./test.txt", "Hey there !")

//Async 
fs.writeFile("./test.txt", "Hello World!", (err)=>{

})

const result = fs.readFileSync("./contacts.txt","utf-8");

console.log(result);