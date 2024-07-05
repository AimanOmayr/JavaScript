//1
// var multiArray=[[],[[],[]],[],[]];

//2
// var multiDimensionalArray =[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// for(var i=0;i<multiDimensionalArray.length;i++){
//     document.write(multiDimensionalArray[i],"<br>")
// }

//3
// for(var i=1;i<=10;i++){
//     document.write(i,"<br>")
// }

//4
// var userInput =+prompt("Enter a number for multiplication table:");
// var tableLength = +prompt("Enter length for the table:");
// document.write("Multiplication Table of " ,
//     userInput,"<br>")
// document.write("Length ",tableLength,"<br>","<br>")
// for (var i=1;i<=tableLength;i++){
//     document.write(userInput,"*",i,"=",userInput*i,"<br>")
// }

//5
// var fruits= ["apple","banana","mango","orange","strawberry"]
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i],"<br>")
// }
// document.write("<br>")
// for(var i=0;i<fruits.length;i++){
//     document.write("Element at index ",i," is ",fruits[i],"<br>")
// }

//6 (a)
// document.write("<h3>Counting:</h3>")
// for(var i=1;i<=15;i++){
//     document.write(i,",")
// }

// //6 (b)
// document.write("<br>","<h3>Reverse counting:</h3>")
// for(var i=10;i>=1;i--){
//     document.write(i,",")
// }

// //6 (c)
// document.write("<br>","<h3>Even:</h3>")
// for(var i=0;i<=20;i= i=i+2){
//     document.write(i,",")
// }

// //6 (d)
// document.write("<br>","<h3>Odd:</h3>")
// for(var i=1;i<=20;i= i=i+2){
//     document.write(i,",")
// }

// //6 (e)
// document.write("<br>","<h3>Series:</h3>")
// for(var i=2;i<=20;i= i=i+2){
//     document.write(i,"k",",")
// }

//7

// var bakeryArray=["cake","apple pie","cookie","chips","drinks","patties"]
// var userInput=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am:")
// var match = false;
// var search=userInput.toLowerCase();
// for(var i=0;i<bakeryArray.length;i++){
//     if(bakeryArray[i]===search){
//         match = true
//         document.write(userInput," is <b> available </b> at index ",i," in our bakery.")
//         break
//     }
// }
// if(match===false){
//     document.write("Sorry ",userInput," is <b>not available</b> in our bakery.")
// }

//8

// var A = [24, 53, 78, 91, 12];
// var flag = A[0];
// for (var i=0;i<A.length;i++){
//     if(A[i]>flag){
//         flag=A[i]
//     }
// }
// document.write("Array items: ",A,"<br>")
// document.write("The largest number is ",flag,"<br><br>")

//9

// var A = [24, 53, 78, 91, 12];
// var flag = A[4];
// for (var i=0;i>A.length;i++){
//     if(A[i]>flag){
//         flag=A[i]
//     }
// }
// document.write("Array items: ",A,"<br>")
// document.write("The smallest number is ",flag,"<br><br>")


//10

// for (var i=5;i<=100;i=i+5){
//     document.write(i," ",",")
// }

