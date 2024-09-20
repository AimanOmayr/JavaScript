//1

// let base = +prompt("Enter a base:");
// let value = +prompt("Enter a power of base:");
// function raise(){
//     let result = base;
//     for (let i=0;i<value;i++){
//         result*=base
//     }
//     return result
// }
// alert (raise())

// document.write("<br><br>")

//2

// let year = prompt("Enter a year to check is it leap year or not")
// function leapyear(){
//     if((year % 4 === 0 && year % 100 !== 0 ) || (year % 40 === 0)){
//         return year + " is a leap year!"
// }
// else{
//     return year + " is not a leap year!"
// }
// }
// alert(leapyear())

// document.write("<br><br>")

//3

// let a = +prompt("Enter the sides of triangle of a");
// let b = +prompt("Enter the sides of triangle of b");
// let c = +prompt("Enter the sides of triangle of c");

// function calculatesides(a, b, c) {

//     return (a + b + c) / 2;
// }

// function calculatearea() {
//     let s = calculatesides(a, b, c)
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c))
// }

// let area = calculatearea(a, b, c)
// document.write("The sides of triangle are " + calculatesides(a, b, c) + "<br>" + "The area of triangle is " + area.toFixed(2));

// document.write("<br><br>")

//4

// let marks1 = +prompt("Enter the marks of 1st subject:")
// let marks2 = +prompt("Enter the marks of 2nd subject:")
// let marks3 = +prompt("Enter the marks of 3rd subject:")

// function mainfunc(){
//     function average(marks1,marks2,marks3){
//         return (marks1 + marks2 + marks3) / 3;
//     }
//     function percentage(marks1,marks2,marks3){
//         let totalMarks = 300;
//         let obtMarks = marks1 + marks2 + marks3
//         return(obtMarks/totalMarks)*100;
//     }

//     let avrg = average(marks1,marks2,marks3);
//     let per = percentage(marks1,marks2,marks3)

//     alert("The average of marks is " + avrg);
//     alert("The percentage of marks is " + per);

// }
// mainfunc();

//5


function index(str,char){
    for(let i = 0;i< str.length;i++){
        if(str[i] === char){
            return "The index of a letter " + char + " from the given string is " + i;
        }
    }
    return -1;
} 
let str = prompt("Enter any string:");
let char = prompt("Enter a character:");
alert(index(str,char));

//6

// let string = prompt("Enter a string for delete the vowels");
// function deletevowels(string){
//     let vowels = "aeiouAEIOU";
//     let result = "";
//     for(let i=0 ; i<string.length; i++){
//         if(vowels.indexOf(string[i]) === -1){
//             result += string[i]
//         }
//     }
//     return result
// }
// alert(deletevowels(string))

//7

// let text = prompt("Enter any string to count pair of vowels")

// function countVowelsPair(text){
//     let count = 0;
//     let i= 0 ;
//     while( i < text.length -1){
//         let char1 = text[i].toLowerCase();
//         let char2 = text[i + 1].toLowerCase();
//         let vowelsPair = []
//         switch(true){
//             case(char1==="a")
//         }
//     }
// }