// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 /*1. Declare variables to store your first name, last name, marital status, country and age in multiple lines
2.  Declare variables to store your first name, last name, marital status, country and age in a single line*/
console.log("Question 3 and 4")
var name="Rahul"
var last_name="Sharma"
var marital_status="Unmarried" , country="India" , age=28

console.log(`Name: ${name}, ${last_name}
            ,Marital Status: ${marital_status}
            ,Country: ${country},
            age:${age}` )
console.log(".......//////.......///////........////////........///////...")            
 
 console.log("Question 6")
//  6. Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)
            
var a="Rahul"
console.log(`${a}
            ParseInt: ${parseInt(a)}
            Number:${Number(a)}
            +:${+a}`)
var b="34"
console.log(`${b}
            ParseInt: ${parseInt(b)}
            Number:${Number(b)}
            +:${+b}`)
            
var c=true
console.log(`${c}
            ParseInt: ${parseInt(c)}
            Number:${Number(c)}
            +:${+c}`)
});