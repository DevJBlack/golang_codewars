
// JavaScript codewars
// Return the number (count) of vowels in the given string.

// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

var vowelString = "Bob Ross can see the 4th dimension"; // -> 10

function vowelCounter(str) {
  let newStr = str.split('')
  let total = 0;
  newStr.forEach(item => {
    switch (item) {
      case 'a':
         total++
        break;
      case 'e':
         total++
        break;
      case 'i':
         total++
        break;
      case 'o':
         total++
        break;
      case 'u':
         total++
        break;
    }
  })
    return total
}

console.log(vowelCounter(vowelString));

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
	let vowels = "aeiou"
	let vowelsCount = 0;
	for(let i = 0; i < str.length; i++){
	  if (vowels.indexOf(str[i]) !== -1){
		vowelsCount++
	  }
	}
  
	return vowelsCount;
  }
  
   getCount("he");
  
  
   function getCount(str) {
	return str.split("").filter(i => "aeiouAEIOU".includes(i)).length;
   }
   
   console.log(getCount("edde"))
   
   
   
  
  // ------------------------------------------------------------------------------------------
  //Write a function that takes in a string
  //and return true if the string reversed
  //is the same forward otherwise return false
  
  //fn(str) = boolean
  
  //could a number be passed in
  //could a boolean be passed in
  //could the string be a sentence 
  //could the string have uppercase and lowercase characters
  
  
  //"mom" = true
  //"mother" = false
  //"racecar" = true
  //"hannah" = true
  
  
  ///Define a function(str) {} that takes in a string
  //create a variable called reversed
  //reverse the original string and store it in the reversed variable
  //compare the original string to the reversed string
  //if the strings are the same, return true
  //if they are not the same return false
  
  
  function pallyCheck(str){
	let reversed = str.split("").reverse().join("")
	if(reversed === str){
	  return true
	} else {
	  return false
	}
  }
  
  pallyCheck("mom")
  pallyCheck("mother")
  pallyCheck("racecar")
  pallyCheck("hannah")
  
  
  // have an array that contains numbers, they will either have and array of evens and one odd, or an array of odds with one even
  let even = [2,4,5,6]
  let newArr = []
  // Returning the array of evens
  function numEven(arr){
	for (let i = 0; i < arr.length; i++){
	  if (arr[i] % 2 === 0){
		 newArr.push(arr[i])
	  }
	}
	  return newArr
  }
  
  numOdd(odd)
  let odd = [1,3,4,5]
  let newArr = []
  // [1,3,4,5]
  // Returning the array of evens
  function numOdd(arr){
	for (let i = 0; i < arr.length; i++){
	  if (arr[i] % 2 !== 0){
		 newArr.push(arr[i])
	  }
	}
	  return newArr
  }
  
  numOdd(odd)
  
  
  // ------------------------------------------------------------------------------
  // only str
  // only alphabetic
  // non case
  // first
  
  // "bob" => 0
  // "APPLECORE" => 1
  // "hello" => 2
  //  "abcd" => No Repeats
  
  // fun(str)
  // split
  // loop through arr
  // loop check against first 
  // if only match,
  // return i of first
  
  function check (str){
	const splitStr = str.split("")
	for (let i = 0; i < str.length; i++){
	  for (j = i + 1; j < str.length; j++){
		if (splitStr[i] === splitStr[j] )
		return i
	  }
	}
	return " No Repeats"
  }
  
  // ---------------------------------------------------------------------------------
  
  // Hunters way of doing this problem
  // returns the letter verse the number
  
  function repeatedChar(str) {
	let strArr = str.split("")
	let obj = {}
   
	for(let i = 0; i < strArr.length; i++)
	  if(obj[arr[i]] >= 1){
		obj[arr[i]] += 1
	  }else {
		obj[arr[i]] = 1
	  }
	  for(let key in obj) {
		if(obj[key] > 1) {
		  return key
		}
	  }
	}
   
  
	// -------------------------------------------------------------------------------
  
  // fn(str) => Boolean
  
  // "mom" => true
  // "mother" => false
  // "racecar" => true
  // 1. Create a function that takes in a String
  // 2. Create a variable called reversed
  // 3. reverse the str passed in & store in reversed
  // 4. Check if original str is equal to reversed
  // 5. if true return true
  // 6. otherwise return false
  
  
  // FizzBuzz - Bob Ross edition
  // write a function that takes in one number.
  // Starting at 1, console log every number up to the number passed in.
  // If the number being logged is divisible by 3 log "Bob" instead.
  // If the number is divisible by 5 we will log "Ross" instead.
  // If they are divisible by both 3 and 5 we will log "Bob Ross"
  
  
  function fizzy(num){
	for(let i = 1; i <= num; i++){
	  if(i % 3 === 0 && i % 5 === 0){
		console.log("BobRoss")
	  } else if (i % 3 === 0){
		console.log("Bob")
	  } else if( i % 5 ===0 ){
		console.log("Ross")
	  } else {
		console.log( i )
	  }
	}
  }
  fizzy(20)
  
  
  
  // Challenge Mode
  // Use a "while" or "do while" loop
  
  function fizzy(num){
	let i = 1;
  
	while(i <= num){
	  if( i % 3 === 0 && i % 5 === 0){
		console.log("BobROSS")
	  } else if ( i % 3 === 0){
		console.log("Bob")
	  } else if ( i % 5 === 0) {
		console.log("Ross")
	  } else {
		console.log(i)
	  }
	  i++
	}
  }
  
  fizzy(25)
  
  // Write a function that takes in a String
  // if that string reversed is the same forwarded
  // console.log(true)
  // else if the string is not the same reversed as it is forward
  // console.log(false)
  
  function pallyCheck(str){
	let arrStr = str.split("");
	let reversed = [];
  
	for(let i = arrStr.length - 1; i >= 0; i-- ){
	  reversed.push(arrStr[i])
	}
	let reversedStr = reversed.join("")
	if(str === reversedStr){
	  console.log(true)
	} else {
	  console.log(false)
	}
  }
  
  pallyCheck("mother")
  
  function pallyCheck(str){
	return str === str.split("").reverse().join("")
  }
  
  pallyCheck("mother")
  
  // Swap Case
  // Below is a function that takes in a string and reverses the case of every character and returns the new string.
  // It is currently in a broken state and does not run properly.
  // It is possible to fix the code by only modifying the existing code, not adding new lines.
  
  //test data
  //"This Is An Example" becomes "tHIS iS aN eXAMPLE"
  //"boB rOss IS thE OrIgInAl GanGster" Becomes "BOb RoSS is THe oRiGiNaL gANgSTER"
  
  
  function caseReverse(str) {
	var strArray = str.split("");
	for (var i = 0; i < strArray.length; i++) {
	  if (strArray[i] === strArray[i].toUpperCase()) {
	   strArray[i] = strArray[i].toLowerCase();
	  } else {
		strArray[i] = strArray[i].toUpperCase();
	  }
	}
	return strArray.join("")
   }
   
   console.log(caseReverse("boB rOss IS thE OrIgInAl GanGster"));
  
  // Write a function that will return a boolean that tells us whether a number        that is passed in is a prime number or not.
  // A prime number can only be divisible by itself or 1
  // Note the type of arguments that will be passed in will only be whole numbers
  
  
  
  function prime(num){
	for(let i = 2; i < num; i++){
	  if(num % i === 0){
		return false
	  } 
	}
		return num > 1 
  }
  
  prime(7)
  
  
  // Find the largest Even number
  
  const listOfNums = [2, 5, 8, 23, 765, 2341, 757, 4332654, 143326, 5786, 678, 35, 27, 235, 765, 4];
  
  function largestEven(nums) {
   let largestEven = 0;
	for (let i = 0; i < listOfNums.length; i++) {
	  if (nums[i] % 2 === 0 && nums[i] > largestEven) {
		largestEven = nums[i];
	  }
	}
	  return largestEven;
  }
  
  largestEven(listOfNums);
  
  
  
  
  // Return the first character that is repeated in this string
  
  let str = "Coding is great"
  
  function firstRepeat(str) {
	let arr = str.split("");
	let obj = {};
  
	for(let i = 0; i < arr.length; i++) {
	  if(obj[arr[i]] >= 1) {
		return arr[i]
	  } else {
		obj[arr[i]] = 1
	  }
	}
  }
  
  firstRepeat(str)
  
  
  
  // firstRepeat(str)
  let str = "Coding is great"
  
  function firstRepeat(str) {
	let arr = str.split("");
	let obj = {};
  
	for(let i = 0; i < arr.length; i++) {
	  if(obj[arr[i]] >= 1) {
		obj[arr[i]] += 1
	  } else {
		obj[arr[i]] = 1
	  }
	}
	// console.log(obj)
	for(let key in obj){
	  if(obj[key] > 1) {
		return key
	  }
	}
  }
  
  // firstRepeat(str)
  
  //Repeat the number of strings N amount of times
  function repeatStr (n, s) {
	return (s).repeat(n);
  }
  
  repeatStr(3, "hello")

  function makeNegative(num) {
    if(num > 0){
    return num * -1
  } else {
    return num
  }
}

makeNegative(86)

function highAndLow(numbers) {
  var numArr = numbers.split(" ");
  var sortedNumArr = numArr.sort(function(a, b) {
    return a - b;
  });
  return sortedNumArr[sortedNumArr.length - 1] + " " + sortedNumArr[0];
}


highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

function accum(s) {
	let letters = s.toLowerCase().split('')
	console.log(letters)
  for(let i = 0; i < letters.length; i++) {
    console.log(letters[i])
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
    console.log(letters[i])
  }
  return letters.join('-')
}

accum('eMlet')

// Cleaner Code
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

// 7 kyu Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"


// function getMiddle(string){
//   debugger;
//   var newString = "";
//   var strLn = string.length;
//   if(strLn%2 === 0){
//     newString = string[(strLn/2)-1] + string[strLn/2];
//     } else {
//     newString = string[Math.floor(strLn / 2)];
//   }
//   return newString;
// }

function getMiddle(s){
  return s.slice((s.length-1)/2, s.length/2+1);
}

// REVISED CODE (simplified)

function getMiddle(s){
  if(s.length % 2 === 0){
    return s[(s.length / 2) - 1] + s[s.length / 2];
    } else {
    return s[Math.floor(s.length / 2)];
  }
}


getMiddle("test"); // "es"
// getMiddle("testing"); // "t"
// getMiddle("middle"); // "dd"
// getMiddle("A"); // "A"




// Code wars problem 7

function findShort(s){
  //break string into an array of words
  //set shortest length to first word
  //compare to each other word 
  //reset if a shorter word is found
  //return the shortest
  s = s.split(' ');
  
  var shortest = s[0];
  console.log(s);
  
  for(var i = 0; i < s.length; i++){
    if(shortest.length > s[i].length){
      shortest = s[i];
    }
  }
  return shortest.length;
}

var string = "turns out random test cases are easier than writing out basic ones";

console.log(findShort(string));


// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = 'aeiou'
  let vowelsCount = 0;
  for(let i = 0; i < str.length; i++){
    if (vowels.indexOf(str[i]) !== -1){
      vowelsCount++
    }
  }

  return vowelsCount;
}

 getCount('he');


 function getCount(str) {
  return str.split('').filter(i => "aeiouAEIOU".includes(i)).length;
 }
 
 console.log(getCount('edde'))
 
 
 

// ------------------------------------------------------------------------------------------
//Write a function that takes in a string
//and return true if the string reversed
//is the same forward otherwise return false

//fn(str) = boolean

//could a number be passed in
//could a boolean be passed in
//could the string be a sentence 
//could the string have uppercase and lowercase characters


//'mom' = true
//'mother' = false
//'racecar' = true
//'hannah' = true


///Define a function(str) {} that takes in a string
//create a variable called reversed
//reverse the original string and store it in the reversed variable
//compare the original string to the reversed string
//if the strings are the same, return true
//if they are not the same return false


function pallyCheck(str){
  let reversed = str.split('').reverse().join('')
  if(reversed === str){
    return true
  } else {
    return false
  }
}

pallyCheck('mom')
pallyCheck('mother')
pallyCheck('racecar')
pallyCheck('hannah')


// have an array that contains numbers, they will either have and array of evens and one odd, or an array of odds with one even
let even = [2,4,5,6]
let newArr = []
// Returning the array of evens
function numEven(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
       newArr.push(arr[i])
    }
  }
    return newArr
}

numOdd(odd)
let odd = [1,3,4,5]
let newArr = []
// [1,3,4,5]
// Returning the array of evens
function numOdd(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
       newArr.push(arr[i])
    }
  }
    return newArr
}

numOdd(odd)


// ------------------------------------------------------------------------------
// only str
// only alphabetic
// non case
// first

// "bob" => 0
// "APPLECORE" => 1
// "hello" => 2
//  "abcd" => No Repeats

// fun(str)
// split
// loop through arr
// loop check against first 
// if only match,
// return i of first

function check (str){
  const splitStr = str.split('')
  for (let i = 0; i < str.length; i++){
    for (j = i + 1; j < str.length; j++){
      if (splitStr[i] === splitStr[j] )
      return i
    }
  }
  return " No Repeats"
}

// ---------------------------------------------------------------------------------

// Hunters way of doing this problem
// returns the letter verse the number

function repeatedChar(str) {
  let strArr = str.split('')
  let obj = {}
 
  for(let i = 0; i < strArr.length; i++)
    if(obj[arr[i]] >= 1){
      obj[arr[i]] += 1
    }else {
      obj[arr[i]] = 1
    }
    for(let key in obj) {
      if(obj[key] > 1) {
        return key
      }
    }
  }
 

  // -------------------------------------------------------------------------------

// fn(str) => Boolean

// 'mom' => true
// 'mother' => false
// 'racecar' => true
// 1. Create a function that takes in a String
// 2. Create a variable called reversed
// 3. reverse the str passed in & store in reversed
// 4. Check if original str is equal to reversed
// 5. if true return true
// 6. otherwise return false



for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
  } else if (i % 3 == 0) {
      console.log("Fizz");
  } else if (i % 5 == 0) {
      console.log("Buzz");
  } else {
      console.log(i);
  }
}

function fizzBuzz(n) {
  for (let i = 1; i <= 15; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
  } else if (i % 3 == 0) {
      console.log("Fizz");
  } else if (i % 5 == 0) {
      console.log("Buzz");
  } else {
      console.log(i);
  }
  }
}

// FizzBuzz - Bob Ross edition
// write a function that takes in one number.
// Starting at 1, console log every number up to the number passed in.
// If the number being logged is divisible by 3 log 'Bob' instead.
// If the number is divisible by 5 we will log 'Ross' instead.
// If they are divisible by both 3 and 5 we will log 'Bob Ross'


function fizzy(num){
  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log('BobRoss')
    } else if (i % 3 === 0){
      console.log('Bob')
    } else if( i % 5 ===0 ){
      console.log('Ross')
    } else {
      console.log( i )
    }
  }
}
fizzy(20)



// Challenge Mode
// Use a 'while' or 'do while' loop

function fizzy(num){
  let i = 1;

  while(i <= num){
    if( i % 3 === 0 && i % 5 === 0){
      console.log('BobROSS')
    } else if ( i % 3 === 0){
      console.log('Bob')
    } else if ( i % 5 === 0) {
      console.log('Ross')
    } else {
      console.log(i)
    }
    i++
  }
}

fizzy(25)

// Write a function that takes in a String
// if that string reversed is the same forwarded
// console.log(true)
// else if the string is not the same reversed as it is forward
// console.log(false)

function pallyCheck(str){
  let arrStr = str.split('');
  let reversed = [];

  for(let i = arrStr.length - 1; i >= 0; i-- ){
    reversed.push(arrStr[i])
  }
  let reversedStr = reversed.join('')
  if(str === reversedStr){
    console.log(true)
  } else {
    console.log(false)
  }
}

pallyCheck('mother')

function pallyCheck(str){
  return str === str.split('').reverse().join('')
}

pallyCheck('mother')


// ====================
function PrintNumbers(n) {
  for(let i = 1; i <= n; i++){
      console.log(i)
  }
}