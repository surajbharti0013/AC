// let pencilPrice = 10;
// let eraserPrice = 5;

// let totalPrice = pencilPrice + eraserPrice;

// console.log("The total price is : ", pencilPrice + eraserPrice,"Rupees.");
// console.log(`The total price is :  ${totalPrice}Rupees.`);

// let color = "green";

// if (color === "red") {
//   console.log("STOP");
// }
// if (color === "yellow") {
//   console.log("Slow down");
// }
// if (color === "green") {
//   console.log("Go");
// }

// let age = 23;
// if (age >= 18) {
//   console.log("you can vote");
// } else if (age == 23) {
//   console.log("you should vote");
// }

// let size = "L"

// if (size === "XL") {
//     console.log("Price is 250");
// }
//  else if (size === "L") {
//     console.log("Price is 200");
//   }
//   else if (size === "M") {
//     console.log("Price is 100");
//   }
//   else {
//     console.log("Price is 50");
//   }

/* Nested if else*/

// let marks = 79;

// if (marks >= 33 ){
//     if (marks >= 80) {
//       console.log("A+ grade")
//     }
//     else if (marks >= 70 || marks <= 79) {
//       console.log("A grade")
//     }

//     else {
//       console.log("Just pass class");
//     }
// }
// else {
//   console.log("Better luck next time");
// }

// let  str = 'apple';

// if((str[0] === 'a') && (str.length > 3))
// {
//   console.log("Its a good string")
// }
// else {
//   console.log("Its a bad string")
// }

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = firstName + lastName;
// alert(`Your first name is ${firstName} and your last name is ${lastName}, your full name is ${firstName} ${lastName} `)

/*Practice Questions JS Part 2*/

// let number = 20;
// if (number % 10 === 0) {
//   console.log("It is good number")
// }
// else {
//   console.log("It is bad number")
// }

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(`Your name is ${name} and your age is ${age}`);

// let quarter = 4;
// switch(quarter) {
//     case 1:
//     console.log("January, February, March");
//     break;
//     case 2:
//     console.log("April, May, June");
//     break;
//     case 3:
//     console.log("July, August, September");
//     break;
//     case 4:
//     console.log("October, November, December");
//     break; 
//     default:
//     console.log("Some error");
// }

// let text = "Suraj";
// if (text[0] === "a" || text[0] === "A") {
//   console.log("Golden String")
// }
// else {
//   console.log("Not Golden String")
// }

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// if ((num1 > num2) && (num1 > num3) ) {
//   console.log("Number 1 is greater")
// }
// else if ((num2 > num1) && (num2 > num3)) {
//   console.log("Number 2 is greater")
// }
// else {
//   console.log("Number 3 is greater")
// }

// let num1 = 32;
// let num2 = 47851;

// if ((num1%2) == (num2%2)) {
//   console.log("numbers have the same last digit which is",num1%10);
// }
// else {
//   console.log("numbers don't have the same last digit");
// }

/*Javascript part03*/

/*Trim method remove whitespacefrom both ends of string and return newone (not from center)*/
// let str = "    suraj bharti";
// let methodTrim = str.trim();
// console.log(methodTrim);

/*toUpperCase converts text/string to all upper case statement and toLowerCase converts text/string to all lower case statement*/
// let str = "SuRAj"
// let upperstatement = str.toUpperCase();
// console.log(upperstatement);
// let lowerstatement = str.toLowerCase();
// console.log(lowerstatement);

/*String method with argument(Arguments are some value which we pass to methods) */
// let str = "suraj";
// let findValue = str.indexOf("r");
// console.log(findValue)

/*Slice method helps you to selects specific part of sentence*//*If we provide any negative value then it will be converted to text.length -neg value*/

// let text = "helLO";
// let newStartText = text.slice(0,1);
// let startingWord = newStartText.toUpperCase();
// let remainingText = text.slice(1,text.length);
// let newRemainingText = remainingText.toLowerCase();
// console.log("New text is "+ startingWord+newRemainingText);
// console.log(`New text is ${startingWord}${newRemainingText}`);

/*Replace:- Searches a value in the string & returns a new string with the value replaced and Repeat Method :- returns a string with the numbers of copies of a string */

// let str = "ILoveCoding";
// let newStr1 = str.replace("Love","Do");
// console.log(newStr1)
// let newStr2 = str.repeat(3);
// console.log(newStr2)
// let str = " help!"
// console.log((str.trim()).toUpperCase());

/*Arrays:- Linear collections of things. Arrays are mutable(changeable)*/

// let students = ["aman", "shradha", "suraj", "rohit"];
// console.log(students);
// console.log(students.length); // to find length of array
// console.log(students[0]); // to view what element is stored on zero(0th) index
// console.log(students[0][0]); // to view what element is stored on zero(0th) index and what is of 0th index.

// let newArray = [] // to create empty array

// let fruits = ["apple", "grapes", "mango"];
// console.log(fruits);

// fruits[0] = "banana";
// console.log(fruits);

// let cars = ["audi", "bmw", "maruti", "volvo"];
// cars.push("toyota");
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.unshift("toyota");
// console.log(cars);
// cars.shift();
// console.log(cars);

// console.log(cars)
// console.log(cars.indexOf("maruti")) // Shows value is on what index.

// console.log(cars.includes("maruti")) // Checks whether that element is present or not - gives value as true or false - true
// console.log(cars.includes("ferrari")) // Checks whether that element is present or not - gives value as true or false - false

// let start = ["january", "july", "march", "august"]
// console.log(start)
// console.log(start.length);
// start.shift();
// console.log(start)
// start.shift();
// console.log(start)
// start.unshift("june");
// console.log(start)
// start.unshift("july");
// console.log(start)

// let primary = ["red", "yellow", "blue"];
// console.log(primary);
// let secondary = ["orange", "green", "pink"];
// console.log(secondary);
// console.log(primary.concat(secondary)); // Adds two string
// console.log(primary.reverse());// reverse an array

/*Slice - copies a portion of array. Changes are done in copies*/
// let cars = ["audi", "bmw", "maruti", "volvo"];
// console.log(cars.length);
// console.log(cars.slice(2, 4)); // copy from 2nd index till 4th
// console.log(cars.slice(1)); // copy all from 1st index
// console.log(cars.slice(-2));

/*Splice - Changes are done in original array list. Splice : removes/replace/add elements in place. splice(start, deleteCount, item0...itemN)*/
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(colors)
// console.log(colors.splice(4))// Select all from index 4
// console.log(colors) //New changed array list
// console.log(colors.splice(0, 2)) //Delete 2 elements starting from 0 not including 2nd index
// console.log(colors)
// console.log(colors.splice(0, 1, "black", "grey"))// have to add text in place of zero th index and have to remove how many elements is 1
// console.log(colors)

/* Sort:- sort an array. Sort methods runs differently on strings and numbers*/
// let name = ["suraj", "rohit", "rajesh", "ashok", "umesh"];
// console.log(name.sort())

// let marks = [10, 31, 19, 54, 4]
// console.log(marks.sort())

// let start = ["january", "july", "march", "august"]
// console.log(start.splice(0, 2, "july", "june"))
// console.log(start)

// let tech = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"]
// console.log(tech.indexOf("javascript"))
// let reverseArray = tech.reverse();
// console.log(reverseArray.indexOf("javascript"))

// let game = [["x",null,"o"], [null,"x",null], ["o",null,"x"]]
// console.log(game);
// console.log(game[0][1]);
// game[0][1] = "o";
// console.log(game);

/* Qs1. Write a JavaScript program to get the first n elements of an array.[n can be any positive number].For example: for array[7,9,0,-2] and n=3 Print,[7,9,0] 

let array = [7, 9, 0, -2]
let n = 3;
let ans = array.slice(0, n)
console.log(ans)*/

/*Qs2. Write a JavaScript program to get the last n elements of anarray.[n can be any positive number]. Forexample: forarray[7,9,0,-2] and n=3 Print,[9,0,-2]

let array = [7, 9, 0, -2]
let n = 3;
let ans = array.slice(0, array.length - n)
console.log(ans)*/

/*Qs3. Write a JavaScript program to check whether a string is blank or not.

let str = prompt("Enter the sting");

if (str.length == 0) {
    console.log("string is empty");
}
else {
    console.log("string is not-empty");
}*/

/*Qs4. Write a JavaScript program to test whether the character at the given(character)index is lowercase.

let str = "SURAJ"
let idx = 3;
console.log("Text is lowercase")

if(str[idx] == str[idx].toLowerCase()) {
    console.log("Text is lowercase")
}
else {
    ("Text is not lowercase")
}*/

/*Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

let string = "              hello world        "
console.log(string.trim());*/

/*Qs6. Write a JavaScript program to check if an element exists in an array or not.

let arr = ['Strawberry', 'Chocolate', 'Raspberry', 'Vanilla', 'Double Chocolate Deluxe'];
console.log(arr.includes("Double Chocolate Deluxe"));*/

/*Javascript part04*/

// for ( let i = 1; i <= 5; i++ ) {
//     console.log(i)
// }

/* Print all odd numbers (1 to 15)*/

// for (let i = 1; i <= 15; i++) {
//     if (i%2 != 0){
//         console.log(i)
//     }  
// }

// for (let i = 1; i <= 15; i = i+2) {
//         console.log(i)    
// }

// console.log("**************************Backwards****************************");

// for (let i = 15; i >= 1; i = i-2) {
//     console.log(i)    
// }

/* Print all even numbers (2 to 10)*/

// for (let i = 2; i <= 10 ; i = i+2) {
//             console.log(i)    
//     }

/*Print multiple of 5*/
// let n = prompt("Enter your number")
// n = parseInt(n)
// for (let i = n; i <= n*10; i = i + n) {
//     console.log(i)
// }

/* Nested loop*/
// for (let i = 1; i<=3; i++) {
//     console.log(`${i} iteration`)
//     for(let j = 1; j<=3; j++) {
//         console.log(j)
//     }
// }

/* While loop*/
// let i = 1;
// while (i<=5) {
//     console.log(i);
//     i++;
// }

/*Favorite Movie Guess game*/

// const favMovie = "avatar"
// let guess = prompt("Enter your favMovie")

// while ((guess != favMovie) && (guess != 'quit')) {
//     console.log("wrong");
//     guess = prompt("Enter your favMovie")
    
// }
// if ((guess == favMovie)) {
//     console.log("You are Right")
// } else {
//     console.log("You quit")
// }

/*Break loop*/
// let i = 1;
// while (i<=5) {
//     if (i ==3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("we used break at 3");

/*Favorite movie Guess game using while loop*/

// const favMovie = "avatar"
// let guess = prompt("Enter your favMovie")

// while ((guess != favMovie)) {
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("Enter your favMovie")
// }
// if ((guess == favMovie)) {
//     console.log("Congrats!!")
// }

/* Arrays with loops*/

// let fruitsForward = ["mango", "apple", "banana", "litchi", "orange"];
// fruitsForward.push("pineapple")

// for (let i=0; i<fruitsForward.length; i++) {
//     console.log(i, fruitsForward[i]);
// }

/* For backward printing arrays with loops*/

// let fruitsBackwards = ["mango", "apple", "banana", "litchi", "orange"];
// fruitsBackwards.push("pineapple")

// for (let i=fruitsBackwards.length-1; i>=0; i--) {
//     console.log(i, fruitsBackwards[i]);
// }

let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder women", "flash"] ];

for(let i=0; i<heroes.length; i++) {
    console.log(`List #${i}`)
    for(let j=0; j<heroes[i].length; j++) {
        console.log(heroes [i] [j]);
    }
}