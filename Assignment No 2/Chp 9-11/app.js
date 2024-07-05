//1

// var city = prompt("Enter your city name:");
// if(city==="Karachi" || city==="karachi"){
//     alert("Welcome to city of lights");
// }

//2

// var gender = prompt("Enter your gender:");
// if(gender==="male" || gender==="Male"){
//     alert("Good Morning Sir!");
// }
// if(gender==="female" || gender==="Female"){
//     alert("Good Morning Ma'am!");
// }

//3 

// var color = prompt("Enter the color of road traffic signal");
// if(color==="red"||color==="Red"){
//     alert("Must Stop");
// }
// if(color==="yellow"||color==="Yellow"){
//     alert("Ready to move");
// }
// if(color==="green"||color==="Green"){
//     alert("Move now");
// }

// var userInput1 = prompt("Enter the color of road traffic signal 1");
// var userInput2 = prompt("Enter the color of road traffic signal 2");
// var userInput3 = prompt("Enter the color of road traffic signal 3");
// document.write("<table border=1px>"+"<tr>"+"<th>"+"Signal Color"+"</th>"+"<th>"+"Message"+"</th>"+"</tr>"+"<tr>"+"<td>"+ userInput1+"</td>"+"<td>"+"Must Stop"+"</td>"+"</tr>"+"<tr>"+"<td>"+ userInput2+"</td>"+"<td>"+"Ready to move"+"</td>"+"</tr>"+"<tr>"+"<td>"+ userInput3+"</td>"+"<td>"+"Move now"+"</td>"+"</tr>"+"</table>"
// )
    
//4

// var carCurrentFuel = prompt("How much litre fuel remaining in the car?");
// if (carCurrentFuel === "0.25litres"){
//     alert("Please refill the fuel in your car");
// }                                                    

//5

//a.
var a = 4;
if (++a === 5) {
    alert("given condititon for variable is true");
}

//b.
var b = 82;
if (b++ === 83){
    alert("given condition of variable b is true");
}

//c.
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//d 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//e
if (true){
alert("True");
}
if (false){
alert("False");
}

//f
if("car" < "cat"){
    alert("car is smaller than cat");
}

//6

var subject1 = +prompt("enter the marks of first subject:");
var subject2 = +prompt("enter the marks of second subject:");
var subject3 = +prompt("enter the marks of third subject:");
var totalMarks = 300;
var marksObtained = subject1 + subject2 + subject3;
var percentage = marksObtained/totalMarks*100;
document.write("<h1>Mark Sheet</h1><br>",
    "Total Marks : ", totalMarks,"<br>",
    "Marks Obtained : ", marksObtained,"<br>",
    "Percentage : ", percentage,"<br>",
)    
if (percentage>=80){
    document.write()
}

//7

var secretNumber = 8;
var guess = +prompt("Guess secret number between 1 to 10:");
if (guess == secretNumber){
    alert("Bingo! Correct Answer")
} else if (guess+1 == secretNumber){
    alert("Close enough to the correct answer")
}
else{
    alert("try again!")
}

//8 

var givenNumber = +prompt("Enter any number:");
if (givenNumber%3 == 0){
    alert ("Your given number is divisible by 3");
}
else {
    alert("not a divisible by 3")
}

//9

var userInput = +prompt("Enter any number:");
if (userInput%2 == 0){
    alert (userInput +"is an even number");
}
else {
    alert(userInput+ "is an odd number")
}

//10

var temperature = +prompt("Enter your city temperature:");
if (temperature > 40){
    alert("It is too hot outside")
}else if (temperature > 30){
    alert("The weather today is Normal.")
}else if (temperature > 20){
    alert("Today's weather is cool.")
}else if (temperature > 10){
    alert("OMG! Today’s weather is so Cool.")
}

//11

var firstNumber = +prompt("Enter your first number:");
var secondNumber = +prompt("Enter your second number:");
var operation = prompt("Enter the operator you want to perform:")
if (operation== "+"){
    alert(firstNumber +"+" + secondNumber+"="+ (firstNumber+secondNumber));
}else if (operation== "-"){
    alert(firstNumber +"-" + secondNumber+"="+ (firstNumber-secondNumber));
}else if (operation== "*"){
    alert(firstNumber +"*" + secondNumber+"="+ (firstNumber*secondNumber));
}else if (operation== "/"){
    alert(firstNumber +"/" + secondNumber+"="+ (firstNumber/secondNumber));
}else if (operation== "%"){
    alert(firstNumber +"%" + secondNumber+"="+ (firstNumber%-secondNumber));
}