//1

// var userFirstName = prompt("Enter your first name:");
// var userLastName = prompt("Enter your last name:");
// var fullName=userFirstName + " " + userLastName;
// document.write("Hello ",fullName," nice to meet you","<br><br>")

//2

// var userFavouriteMobile=prompt("Enter your favourite mobile phone model:")
// document.write("My favourite phone is : ",userFavouriteMobile,"<br>")
// document.write("Length of string is: ",userFavouriteMobile.length, "<br><br>")

//3

// var string = "Pakistani";
// document.write("String: ",string,"<br>")
// document.write("index of 'n': ",string.indexOf("n"),"<br><br>")

//4

// var value = "Hello World";
// document.write("String: ",value,"<br>")
// document.write("Last index of 'l': ",value.lastIndexOf("l"),"<br><br>")

//5

// var strings = "Pakistani";
// document.write("String: ",strings,"<br>")
// document.write("Character at index 3: ",strings.charAt(3),"<br><br>")

//6

// var userFirstName = prompt("Enter your first name:");
// var userLastName = prompt("Enter your last name:");
// document.write("Hello ",userFirstName.concat(" ",userLastName)," nice to meet you","<br><br>")

//7

// var city = "Hyderabad";
// var replace = city.replace("Hyder","Islam")
// document.write("City: ",city,"<br>")
// document.write("After replacement: ",replace,"<br><br>")

//8

// var message ="Ali and Sami are best friends. They play cricket and football together.";
// document.write("before replacement 'and' in the string with '&' is: ",message,"<br>")
// document.write("After replacement: ",message.replaceAll("and","&"),"<br><br>")

//9

// var numberValue = "472";
// document.write("Value: ",numberValue,"<br> Type: ",typeof(numberValue),"<br>")
// document.write("Value: ",numberValue,"<br> Type: ",typeof(Number(numberValue)),"<br><br>")

//10

// var userInput1 = prompt("Enter your favourite dry fruit:");
// var capital = userInput1.toUpperCase();
// document.write("User input: ",userInput1,"<br>")
// document.write("Upper Case: ",capital,"<br><br>")

//11

// var userInput2 = prompt("Enter any word:");
// var firstLetter = userInput2.slice(0,1);
// var remainingLetter = userInput2.slice(1);
// var titleCase = firstLetter.toUpperCase()+remainingLetter.toLowerCase();
// document.write("User input: ",userInput2,"<br>")
// document.write("Title Case: ",titleCase,"<br><br>")

//12

// var num= "35.36";
// document.write("Number: ",num,"<br>");
// var newNum=num.replace(".","");
// document.write("Number: ",num,"<br>");
// document.write("Result: ",newNum,"<br><br>");

//13

// var input = prompt("Enter your name:");
// var charValue;
// var match=false;
// for(var i =0;i<input.length;i++){
//     charValue=input[i].charCodeAt(0)
//     if(charValue===33||charValue===44||charValue===46||charValue===64){
//         alert("Please enter a valid user name")
//         match=true
//     }
// }
// if(match===false){
//     alert("Hello"+" "+input)
// }

//14

// var menu = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Welcome to ABC Bakery Place your order here:")
// var caseSensitive = userInput.toLowerCase();
// var flag = false;
// for (var i = 0; i < menu.length; i++) {
//     if (caseSensitive === menu[i]) {
//         flag = true
//         alert(menu[i] + " is available at " + [i] + " in our bakery")
       
//     }
// }
// if (flag == false) {
//     alert("We are sorry! " + userInput + " is not available in our bakery")
// }

//15

// var password = prompt("Enter your password:")
// if (password.length < 6) {
//     alert("Password must contains 6 characters")
// } else {
//     if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//         alert("Password must starts from numbers");
//     } else {
//         var hasAlphabet = false;
//         var hasNumber = false;
//         for (var i = 0; i < password.length; i++){
//             var charCode = password.charCodeAt(i)
//             if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//                 hasAlphabet = true
//             } else if (charCode >= 48 && charCode <= 57) {
//                 hasNumber = true
//             }
//         }
//         if (hasAlphabet && hasNumber == true){
//             alert("valid password!")
//         }
//         else{
//             alert("Password must contain both alphabet and numbers!")
//         }
//     }
// }


//16

// let university = "University of Karachi";
// document.write(university,"<br><br>")
// let array = university.split("");
// for (var i=0;i<array.length;i++){
//     document.write(array[i],"<br>")
// }

//17

// let userInput3 = prompt("Enter a country:")
// document.write("User input: ",userInput3,"<br>")
// document.write("Last character of your input: ",userInput3.charAt(userInput3.length-1));

//18

// let stringValue = "The quick brown fox jumps over the lazy dog";
// let match1 = stringValue.match(/the/gi).length;
// document.write("There are ",match1," occurance(s) of word 'the'")