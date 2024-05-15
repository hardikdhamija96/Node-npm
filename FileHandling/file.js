const fs = require("fs");

// sync,,,
// fs.writeFileSync("./test.txt", "Hey there !")

// //Async 
// fs.writeFile("./test.txt", "Hello World!", (err)=>{

// })

// //Sync
// const result = fs.readFileSync("./contacts.txt","utf-8");

// //Async
// fs.readFile("./contacts.txt", "utf-8", (err,result)=>{
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// })

// console.log(result);

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", `\n Hey There`);


// copy a file
// fs.cpSync('./test.txt','./copy.txt');

// delete a file
// fs.unlinkSync("./test.txt")