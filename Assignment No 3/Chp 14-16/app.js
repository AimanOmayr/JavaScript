//1.

// var studentNames = [''];

//2.

// var futureStudentsName = new Array();

//3.

// var stringArray = ['Aiman','Omayr','Hello']

//4.

// var numberArray = [1,2,3,4,5,6]

//5.

// var booleanArray = [True,False]

//6.

// var mixedArray = [1,'Hamza', true , 32 , 'Mishkat Fatima' , false , 'three']

//7.

// var qualifications =['1)SSC','2)HSC','3)BCS','4)BS','5)BCOM','6)MS','7)M. Phil.','8)PhD'];
//  document.write('<h2>','Qualifications:','</h2>');
//  document.write(qualifications[0],'<br>',
//  qualifications[1],'<br>',
//  qualifications[2],'<br>',
//  qualifications[3],'<br>',
//  qualifications[4],'<br>',
//  qualifications[5],'<br>',
//  qualifications[6],'<br>',
//  qualifications[7],'<br>',)

//8.

// var student = ['Ansharah','Abiha','Arbish'];
// var score = [350,390,480];
// var totalMarks = 500
// document.write("Score of ", student[0] , " is " , score[0], '.', 
// 'Percentage is ', score[0]/totalMarks*100 , '%','</br>',
// "Score of ",student[1] , " is " , score[1], '.', 'Percentage is ', score[1]/totalMarks*100 , '%','</br>',
// "Score of", student[2] , " is " , score[2], '.Percentage is ', (score[2]/totalMarks)*100 , '%' ,'</br>','</br>');

//9.

// alert("There are total 5 colors")
// var colors =['Pink','Black','Blue','Red','Green']
// document.write(colors,'</br>');

//a.

// var begining = prompt("Which color you want to add in the begining?");
// colors.unshift(begining);
// document.write(colors , '</br>');

//b.

// var end = prompt("Which color you want to add in the end?");
// colors.push(end)
// document.write(colors , '</br>');

//c.

// colors.unshift('White','Purple');
// document.write(colors , '</br>');

//d.

// colors.shift(0);
// document.write(colors , '</br>');

//e.

// colors.pop();
// document.write(colors , '</br>');

// var againBegining = prompt("Enter any two colors which you want to add in the begining? Enter the first color:");
// var againBegining2 = prompt('Enter second color for the begining:');
// colors.unshift("beginingAgain");
// colors.unshift("beginingAgain2");
// document.write(colors , '</br>');

//f. 

// var indexColor = +prompt("At which index you want to add the color?");
// var colorName = prompt("Enter the name of color:");
// colors.splice(indexColor,0,colorName);
// document.write(colors , '</br>');

// //g.

// var indexDelete = +prompt("At which index you want to delete the color?");
// var numberDelete = +prompt("How many colors you want to delete?");
// colors.splice("indexDelete","numberDelete");
// document.write(colors , '</br>','</br>');

//10. 

// var studentScores = [320,230,480,120];
// document.write('Scores of Students : ',studentScores,'<br>');
// studentScores.sort()
// document.write('Ordered Scores of Students : ',studentScores);

//11.

// var citiesName = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
// document.write('Cities List :','<br>',citiesName,'<br>');

// var selectedCities = citiesName.slice(2,4);
// document.write('Selected cities list :','<br>',selectedCities,'<br><br><br>');

//12.

// var arr = ['This','is','my','cat'];
// document.write('Array :','<br>',arr,'<br>');
// var join = arr.join(" ");
// document.write('String :', '<br>',join,'<br><br><br>');

//13.

// var FIFO = ['Keyboard','Mouse','Printer','Monitor'];
// var returns = FIFO.slice();
// document.write("Devices:",'<br>',returns,'<br><br>');

// var TIFO = ['Keyboard','Mouse','Printer','Monitor',];
// var returns = TIFO.reverse();
// document.write("Devices:",'<br>',returns,'<br><br>');

//15.

// var phoneManufacturers = ['Apple','Samsung','Motorola','Nokia','Sony','Haier'];
// document.write('<label>','Phone Manufacturers : ','</label>',
// '<select>',
// '<option>',phoneManufacturers[0],'</option>',
// '<option>',phoneManufacturers[1],'</option>',
// '<option>',phoneManufacturers[2],'</option>',
// '<option>',phoneManufacturers[3],'</option>',
// '<option>',phoneManufacturers[4],'</option>',
// '<option>',phoneManufacturers[5],'</option>',
// '</select>')
