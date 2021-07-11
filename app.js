//Verbal Questions
//Q1 - Parameters are the condtions you set in the function's parentheses when you're first creating the function. 
//-Arguments are what you pass into the parentheses when you call the function
//Q2 - Console.log will print whatever you pass into it directly. Return will give back the answer/outcome, but it's 
//in a sort of hold. To see/access the answer you'll need to console.log it or pass it into a variable and act
//upon the variable.
//Q3 Being able to return a value makes a function more versatile in its uses.

/////Palindrome
//lowercase my string - for case sensitivity
//turn it into an array
//reverse it
//join it into a string
//check if new string matches original
///////using equality here will give true or false

// function checkPalindrome(str) {
//     let commonString = str.toLowerCase();
//     let arrayString = commonString.split("");
//     let reverseString = arrayString.reverse();
//     let returnString = reverseString.join("");
//     return commonString === returnString;  
// }
// const wordIsPalindrome = checkPalindrome("level");
// console.log(wordIsPalindrome);

////Check a List
//for loop to iterate through the array
//if/else statements to check for student and log messages
//outside block scopoe final return if all the loops fail to find student
function checkForStudent(studentName, arrayOfStudents) {
    for ( let i = 0; i < arrayOfStudents.length; i++)
        if (arrayOfStudents[i] === studentName) {
            return true;
        } 
    console.log(`${studentName}, was not one of the listed students.`);    
    return false;
}
const studentIncluded =  checkForStudent('Sally', ['Kyle', 'Ruby']);
console.log(studentIncluded);






////Sum Array
//declare a total as 0 so it can change
//write a for loop
//add i to total for each iteration
//return total
// function sumArray(anArray) {
//     let total = 0;
//     for (let i = 0; i < anArray.length; i++) {
//             total+=anArray[i];
//     }
//     return total;
// }
// const sum = sumArray([1, 2, 3, 4, 5, 6]);
// console.log(sum);