// =======CHAPTER # 14- 16===========

// 1. Declare an empty array using JS literal notation to store
// student names in future.
// **********Answer

let studentName = [];
console.log(studentName);

//================================================================================================================

// 2. Declare an empty array using JS object notation to store
// student names in future
// **********Answer

let studentNamesObject = new Array();
console.log(studentNamesObject);
//================================================================================================================

// 3. Declare and initialize a strings array
// **********Answer

let newArray = ["Ali", "hina", "asma"];
console.log(newArray);
//================================================================================================================

// 4. Declare and initialize a numbers array.
// **********Answer

let newNum = [2, 3, 4, 5];
console.log(newNum);

//================================================================================================================

// 5. Declare and initialize a boolean array.
// **********Answer

let booleanArray = ["true", "false", "true", "false"];

console.log(booleanArray);


//================================================================================================================
// 6. Declare and initialize a mixed array.
// **********Answer
let mixedArray = ["alishba", 22, "karachi", 1999];
console.log(mixedArray);

//================================================================================================================
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// **********Answer

let qualifications = ["SSC", "BSC", "HSC", "BS", "BCOM", "MS", "M.PHIL", "PHD"];
console.log(qualifications);

//=================================================================================================================

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// qualifications in your browser like:
// **********Answer

let student_Names = ["Michael", "John", "Tony"];
let student_score = [320, 230, 480];
let totalMarks = 500;
for (let i = 0; i < student_Names.length; i++) {
    let percentage = (student_score[i] / totalMarks) * 100;
    console.log(`Score of ${student_Names[i]} is ${student_score[i]}. Percentage: ${percentage.toFixed(2)}%`);
}

//===================================================================================================================

// 9. Initialize an array with color names. Display the array
// elements in your browser.

// **********Answer

let colorsName = ["red", "blue", "green", "yellow"];
console.log(colorsName);
//=====================================================================================================================

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// **********Answer
let $colors = ["red", "blue", "green", "yellow"];
let new_color = prompt("What color do you want to add to the beginning?");
$colors.unshift(new_color);
console.log($colors);

// //==================================================================================================================

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// **********Answer

let color = ["red", "blue", "green", "yellow"];
let addColor = prompt("What color do you want to add to the end?");
color.push(addColor);
console.log(color);

//====================================================================================================================

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// **********Answer

let colorr = ["red", "blue", "green", "yellow"];
let color1 = prompt("Enter the first color to add at the beginning:");
let color2 = prompt("Enter the second color to add at the beginning:");
colorr.unshift(color1, color2);
document.write("Updated Array: " + colorr.join(", "));

//===================================================================================================================

// d. Delete the first color in the array. Display the updated
// array in your browser.

// **********Answer

let color_ = ["red", "blue", "green", "yellow"];
color_.shift(color_);
console.log(color_);
//===================================================================================================================

// e. Delete the last color in the array. Display the updated
// array in your browser.

// **********Answer:

let color_1 = ["red", "blue", "green", "yellow"];
color_1.pop(color_1);
console.log(color_1);
//========================================================================================================

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// **********Answer:

let color_s = ["red", "blue", "green", "yellow"];
let indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
let newColor = prompt("Enter the color name you want to add:");
color_s.splice(indexToAdd, 0, newColor);
document.write("Updated Array:  + colors.join(", " ) <br/>");

//=====================================================================================================================
// g. Ask the user at which index hx he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// **********Answer:

let colors = ["red", "blue", "green", "yellow"];
let userColor = prompt("At which index do you want to delete color(s)?");
colors.unshift(userColor);
let indexToDelete = parseInt(prompt("At which index do you want to delete color(s)?"));
let numberToDelete = parseInt(prompt("How many colors do you want to delete?"));
colors.splice(indexToDelete, numberToDelete);
document.write(colors.join(", "));

///================================================================================================================

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// **********Answer:

let scoreOfStd = [320, 230, 480, 120];
scoreOfStd.sort(function(a, b) {
    return a - b;
});
console.log(`Sorted Student Scores: ${scoreOfStd}`);



//===============================================================================================================

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// **********Answer:

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
console.log("Cities List: " + cities);
console.log("Selected Cities List: " + selectedCities);
//=========================================================================================


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// **********Answer:


var arr_1 = ["This", " is", " my", " cat"];
var singleString = arr_1.join("");
console.log(singleString);

//====================================================================================================
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// **********Answer:

let array = ["keyboard", "mouse", "printer", "monitor"];
for (let i = 0; i < array.length; i++) {
    document.write(`Out: <br> ${array[i]} <br>`);
}

//====================================================================================================

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// **********Answer:
let arr = [];
arr.push("keyboard");
arr.push("mouse");
arr.push("printer");
arr.push("monitor");

for (let i = arr.length - 1; i >= 0; i--) {
    document.write(`Out: <br> ${arr[i]} <br>`);
}


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// **********Answer:


let phone = ["Apple","Samsung","Motorola","Nokia","Sonay & Haier "];
document.write(phone);

//====================END================================================================= 