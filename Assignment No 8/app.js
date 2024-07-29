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

let num = +prompt("Enter any number:");
function square(num){
    alert(num*num)
}
square(num),"<br><br>"
