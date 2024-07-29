//1

// let date = new Date();
// document.write(date,"<br><br>")

// //2

// let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let date1 = new Date();
// let result = month[date1.getMonth()];
// document.write("Current Month: ",result,"<br><br>")

//3

// let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// let date = new Date();
// document.write("Today is ",days[date.getDay()],"<br><br>")

//4

// let now = new Date();
// let birthday = new Date("7 28 2024")
// document.write(birthday+"<br><br>")
// if(birthday.getDay()===0||birthday.getDay()===6){
// document.write("It's Fun day")
// }
// else{
//     document.write("Working days!")
// }

//5

// let now = new Date();
// if(now.getDate()>=15){
//     document.write("Last days of the month")
// }else{
//     document.write("First fifteen days of the month")
// }

//6

// let date = new Date();
// let millisecond = Date.now()
// let min = (millisecond/(1000*60));
// document.write("Current Date: "+date+"<br>")
// document.write("Elapsed milliseconds since January 1 , 1970: "+millisecond+"<br>" )
// document.write("Elapsed minutes since January 1 , 1970: "+min+"<br><br>")

//7 

// let date = new Date();
// let hour = date.getHours();
// if(hour<12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

//8
// let laterDate = new Date("Dec 31 2020");
// document.write("Later date: "+laterDate,"<br><br>")

//9

// let date = new Date();
// let Ramadan= new Date("Mar 11 2024");
// let days= date-Ramadan;
// let pastDays=Math.floor(days/(1000*60*60*24))
// document.write(pastDays," days past since 1st Ramadan <br><br>")

//10

// let date = new Date();
// let beginningof2015=new Date("jan 1 2015");
// let differenceBetween=date-beginningof2015;
// let pastSeconds= Math.floor(differenceBetween/1000)
// document.write("on reference date "+date+"<br>")
// document.write(pastSeconds+" seconds has past since beginning of 2015")

//11

// let date = new Date();
// let hourAgo = date.getHours()y;
// hourAgo= hourAgo - 1
// document.write("Current date: "+date+"<br>")
// date.setHours(hourAgo);
// document.write("1 hour ago,it was "+date+"<br><br>")

//12

// let date = new Date();
// let year = date.getFullYear();
// year= year-100
// document.write("Current date: "+date+"<br>")
// date.setFullYear(year);
// document.write("100 years back,it was"+date+"<br><br>")

//13

// let userInput=+prompt("Enter your age : ")
// let date= new Date();
// let birthYear=date.getFullYear();
// birthYear=birthYear-userInput;
// document.write("Your age is : "+userInput+"<br>")
// document.write("Your birth year is "+birthYear+"<br><br>")

//14

// let userName = "Aiman Omayr"
// let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let date = new Date();
// let currentMonth=date.getMonth();
// let noOfUnits = 410;
// let chargePerUnit = 16;
// let latePaymentCharge=350;
// let afterDue= noOfUnits*chargePerUnit+latePaymentCharge;
// document.write("<h1>K-Electric Bill</h1>"+"<br>")
// document.write("User Name : "+userName+"<br>")
// document.write("Current Month : "+month[currentMonth]+"<br>")
// document.write("Number of units: "+noOfUnits+"<br>");
// document.write("Charges per unit: "+chargePerUnit+"<br><br>")
// document.write("Net Amount Payable(within Due Date): "+noOfUnits*chargePerUnit+"<br>")
// document.write("Late payment surcharge: "+latePaymentCharge+"<br>")
// document.write("Gross Amount Payable (after Due Date): "+afterDue+"<br><br>")