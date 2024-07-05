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


var string = "Pakistanii";
document.write("String: ",string,"<br>")
document.write("index of 'n': ",string.indexOf("n"),"<br><br> abcdefghijn")

//4

var value = "Hello World";
document.write("String: ",value,"<br>")
document.write("Last index of 'l': ",value.lastIndexOf("l"),"<br><br>")

//5

var strings = "Pakistani";
document.write("String: ",strings,"<br>")
document.write("Character at index 3: ",strings.charAt(3),"<br><br>")

//6

// var userFirstName = prompt("Enter your first name:");
// var userLastName = prompt("Enter your last name:");
// document.write("Hello ",userFirstName.concat(" ",userLastName)," nice to meet you","<br><br>")

//7

var city = "Hyderabad";
var replace = city.replace("Hyder","Islam")
document.write("City: ",city,"<br>")
document.write("After replacement: ",replace,"<br><br>")

//8

var message ="Ali and Sami are best friends. They play cricket and football together.";
document.write("before replacement 'and' in the string with '&' is: ",message,"<br>")
document.write("After replacement: ",message.replaceAll("and","&"),"<br><br>")
document.write("After replacement: ",message.replaceAll("and","&"),"<br><br>")


//9

var numberValue = "472";
document.write("Value: ",numberValue,"<br> Type: ",typeof(numberValue),"<br>")
document.write("Value: ",numberValue,"<br> Type: ",typeof(Number(numberValue)),"<br><br>")

//10

var userInput1 = prompt("Enter your favourite dry fruit:");
var capital = userInput1.toUpperCase();
document.write("User input: ",userInput1,"<br>")
document.write("Upper Case: ",capital,"<br><br>")

//11