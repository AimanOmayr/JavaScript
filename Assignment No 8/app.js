//1

// function time(){
//     let date = new Date ()
//     document.write(date)
// }
// time(),"<br><br>"

//2

// let firstName = prompt("Enter your first name:")
// let lastName = prompt("Enter your last name:")
// function greet(firstName,lastName){
//     alert(`Hello ${firstName} ${lastName} have a nice day`)
// }
// greet(firstName,lastName),"<br><br>"

//3

// let firstNum = +prompt("Enter a first number:")
// let secondNum = +prompt("Enter a second number:")
// function sum(firstNum,secondNum){
//     let summ = firstNum + secondNum
//     alert("Sum of "+firstNum+" and "+secondNum+" is "+summ)
// }
// sum(firstNum,secondNum),"<br><br>"

//4

// let firstNumm = +prompt("Enter a first number:")
// let operator = prompt("Which operator you want to use?")
// let secondNumm = +prompt("Enter a second number:")
// function calculator(firstNumm,operator,secondNumm){
//     if (operator==="+"){
//         alert(`${firstNumm} + ${secondNumm} = ${firstNumm+secondNumm}`)
//     }
//     else if (operator==="-"){
//         alert(`${firstNumm} - ${secondNumm} = ${firstNumm-secondNumm}`)
//     }
//     else if (operator==="*"){
//         alert(`${firstNumm} * ${secondNumm} = ${firstNumm*secondNumm}`)
//     }
//     else if (operator==="/"){
//         alert(`${firstNumm} / ${secondNumm} = ${firstNumm/secondNumm}`)
//     }
//     else if (operator==="%"){
//         alert(`${firstNumm} % ${secondNumm} = ${firstNumm%secondNumm}`)
//     }
//     else{
//         alert("This operator is not available")
//     }
// }
// calculator(firstNumm,operator,secondNumm),"<br><br>"

//5

// let num = +prompt("Enter any number:");
// function square(num){
//     alert(num*num)
// }
// square(num),"<br><br>"

//6

// function factorial(){
//     var num = +prompt("Enter a number:")

//     if(num < 0){
//         alert("Error: Factorial is not defined for negative numbers")
//     }else{
//         var result = 1;
//         for(var i = 2 ; i <= num ; i++){
//             result*=i // (result= result * i)
//         }
//         alert("The factorial of "+ num +" is " + result)
//     }
// }
// factorial()

//7

// let startNum = +prompt("Enter a starting number:")
// let endNum = +prompt("Enter an ending number:")
// function counting(){
//     for (let i=startNum;i<=endNum;i++){
//         document.write(i+"<br>")
//     }
// }
// counting()
// document.write("<br><br>")

//8

// let base = +prompt("Enter a base:");
// let perpendicular = +prompt("Enter a perpendicular:")
// function calculateHypotenuse() {
//     function calculateSquare(x) {
//         return x * x
//     }
//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))

//     alert("The hypoteneus of right angle triangle with base " + base + " and perpendicular " + perpendicular + " is " + Math.floor(hypotenuse))
// }
// calculateHypotenuse()
// document.write("<br><br>")

//9

// let width = 30;
// let height = 15;
// function calculate(width,height){
//     return(width*height)
// }
// document.write("The area is "+ calculate(width,height) +"<br><br>")

//10

// function isPalindrome(str) {
//     var len = str.length;
//     for (var i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - i - 1]){//madam 5-1-1
//             return str+ " is not a palindrome"
//         }else{
//               return str+ " is a palindrome"
//         }
//     }
// }
// // document.write(isPalindrome("madam"))
// // document.write(isPalindrome("majkf"))
// alert(isPalindrome(prompt("Enter a word:")))

//11

// let sentence = "we are stuDying javascript"
// let words = sentence.split(" ")
// document.write(words)

// var titleCase = ""

// for(var i =0; i<words.length ; i++){
//     titleCase += words[i].charAt(0).toUpperCase()+ words[i].slice(1).toLowerCase()+ " "
// }
// document.write(titleCase)

//11

// function titleCase(str){
//     var str=prompt("enter any sentence:");
//     var words=str.split(" ");
//     var titleCase=" ";
//     for(i=0;i<words.length;i++){
//         titleCase +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+ " ";
//     }
//     return titleCase;
// }
// document.write(titleCase()+"<br><br>");

//12

// function findLongestString(){
//     let str = prompt("Enter a string:")
//     let words =str.split(" ")
//     let longestWord= ""
//     let maximumLength = 0;

//     for (let i=0 ; i<words.length ; i++){
//         if(words[i].length > maximumLength){
//             longestWord =words[i] 
//             maximumLength= words[i].length
//         }
//     }
//     return longestWord+ " is the longest word"
// }
// document.write(findLongestString()+"<br><br>")

//13

// var string = prompt("Enter a string");
// var ltr= prompt("Enter a letter");
// function countLetterOccurrence(str, letter){
//     var count = 0;
//     for(var i =0; i< str.length; i++){
//         if(str[i].toLowerCase()===letter.toLowerCase()){ //javascript,   a
//             count++
//         }
//     }
//  return count;
// }
// alert(countLetterOccurrence(string, ltr))

//14

let r = +prompt("Enter radius Value");
function circumfarance(radius){
    let pi = Math.PI
    let circum = 2*pi*radius
    return "The circumfarance of circle is " +circum;
}
function area(radius){
    let area = Math.PI*Math.pow(radius,2)
    return "The area of circle is " + area.toFixed(2);
}
document.write(circumfarance(r)+"<br>")
document.write(area(r)+"<br><br>");


