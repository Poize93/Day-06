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
console.log("Task 3 Question 1")
var a="#"
sum=""
for(var i=0;i<=6;i++){
    
    sum=sum+a+""
    console.log(sum)
}   
console.log(".....//////.......///////.........////////.........///////")

console.log(" code to count the elements in the array . Don’t use length property")
    
var myarray=[11,22,33,44,55,66]
var i=0
count=0
while(myarray[i]!=undefined){
    count++;
    i++
}
console.log(count)
console.log(".....//////.......///////.........////////.........///////")

console.log("change the element that is currently “Mari” to “Munnabai”.")
let friends = [ "Mari", "MaryJane","“CaptianAmerica", "Munnabai","Jef" ,"AAK_Chandran" ]
for(var i=0;i<friends.length;i++){
    if(friends[i]==="Mari"){
        friends[i]="Munnabai"
    }
    
}
console.log(friends)


// Starting from the existing friends variable below, 





});