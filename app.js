//Verbal Questions
//Q1 - Parameters are the condtions you set in the function's parentheses when you're first creating the function. 
//-Arguments are what you pass into the parentheses when you call the function
//Q2 - Console.log will print whatever you pass into it directly. Return will give back the answer/outcome, but it's 
//in a sort of hold. To see/access the answer you'll need to console.log it or pass it into a variable and act
//upon the variable.
//Q3 Being able to return a value makes a function more versatile in its uses.

//Palindrome
//lowercase my string - for case sensitivity
//turn it into an array
//reverse it
//join it into a string
//check if new string matches original
///////using equality here will give true or false

function checkPalindrome(str) {
    let commonString = str.toLowerCase();
    let arrayString = commonString.split("");
    let reverseString = arrayString.reverse();
    let returnString = reverseString.join("");
    return commonString === returnString;  
}
const wordIsPalindrome = checkPalindrome("level");
console.log(wordIsPalindrome)
