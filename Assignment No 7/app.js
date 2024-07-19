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

let date = new Date();
let check = date.getDay();
if(check==7||check==6){
document.write("It's Fun day")
}else{
    document.write("Working days!")
}