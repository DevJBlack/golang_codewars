package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {

}

// MakeUpperCase is a function that when passed a string will convert it to upper case
func MakeUpperCase(str string) string {
	return (strings.ToUpper(str))
}

// Past takes in hours minutes and seconds and we need to convert it into milliseconds
func Past(h, m, s int) int {
	var sum int
	if h >= 1 && m >= 1 && s >= 1 {
		h = (h * 60 * 60 * 1000)
		m = (m * 60 * 1000)
		s = s * 1000
		sum += h + m + s
	} else if h <= 0 && m >= 1 && s >= 1 {
		m = (m * 60 * 1000)
		s = s * 1000
		sum += h + m + s
	} else if h >= 1 && m == 0 && s == 0 {
		h = (h * 60 * 60 * 1000)
		m = (m * 0)
		s = (s * 0)
		sum += h + m + s
	} else if m <= 0 && h >= 1 && s >= 1 {
		h = (h * 60 * 60 * 1000)
		s = s * 1000
		sum += h + m + s
	} else if s <= 0 && m >= 1 && h >= 1 {
		h = (h * 60 * 60 * 1000)
		m = (m * 60 * 1000)
		sum += h + m + s
	} else if h == 0 && m == 0 && s == 0 {
		h = (h * 0)
		m = (m * 0)
		s = (s * 0)
		sum += h + m + s
	}

	return sum
}

// Past2 the most effiecent way to do it
func Past2(h, m, s int) int {
	return (h*3600000 + m*60000 + s*1000)
}

func past3(h, m, s int) int {
	hour := h * 60 * 60 * 1000
	minute := m * 60 * 1000
	second := s * 1000

	return hour + minute + second
}

// CheckForFactor Divison reword
func CheckForFactor(base int, factor int) bool {
	return base%factor == 0
}

func checkForFactorTwo(base int, factor int) bool {
	var result bool = false
	if base%factor == 0 {
		result = true
	}
	return result
}

// AbbrevName a Two Word Name
func AbbrevName(name string) string {
	var s []string

	s = append(s, name)

	for _, nn := range s {
		spnn := strings.Split(nn, " ")
		firstName := spnn[0]
		lastName := spnn[1]
		fmt.Println(strings.ToUpper(firstName[0:1]) + "." + strings.ToUpper(lastName[0:1]))

	}

	return name
}

// AbbrevName1 Other ways to do it.
func AbbrevName1(name string) string {
	words := strings.Split(name, " ")
	return strings.ToUpper(string(words[0][0])) + "." + strings.ToUpper(string(words[1][0]))
}

// AbbrevName2 third way to do it
func AbbrevName2(name string) string {
	var parts []string
	for _, part := range strings.Split(name, " ") {
		parts = append(parts, strings.ToUpper(part[:1]))
	}
	return strings.Join(parts, ".")
}

////
func evenOrOdd(number int) string {
	if number%2 == 0 {
		return "Even"
	}
	return "Odd"
}

func opposite(value int) int {
	if value%2 == 0 {
		return 1 * value
	}
	return -1 * value

}

func positiveSum(numbers []int) int {
	result := 0
	for i := 0; i < len(numbers); i++ {
		if numbers[i] > 0 {
			result += numbers[i]
		}
	}
	return result
}

func positiveSums(numbers []int) (sum int) {
	for _, num := range numbers {
		if num > 0 {
			sum = sum + num
		}
	}
	return
}

func ppositiveSum(numbers []int) int {
	var result int
	for _, number := range numbers {
		if number >= 0 {
			result += number
		}
	}
	return result
}

func makeNegative(x int) int {
	if x >= 0 {
		return x * -1
	} else if x <= 0 {
		return x * 1
	} else {
		return x
	}

}

func makeMeNegative(x int) int {
	if x >= 0 {
		return -x
	}
	return x
}

func repeatStr(repititions int, value string) (result string) {
	for i := 0; i < repititions; i++ {
		result += value
	}
	return
}

func boolToWord(word bool) string {
	if word == true {
		return ("Yes")
	}
	return ("No")
}

func boooolToWord(word bool) string {

	var maybe string

	switch {
	case word == true:
		return "Yes"
	case word == false:
		return "No"
	}
	return maybe
}

func boolToWords(word bool) string {
	return map[bool]string{false: "No", true: "Yes"}[word]
}

func summation(n int) int {

	count := 0

	for i := 0; i <= n; i++ {
		count += i

	}
	return (count)

}

func solution(word string) string {
	var result = ""
	for _, c := range word {
		result = string(c) + result
	}
	return (result)
}

func squareSum(numbers []int) int {
	count := 0

	for _, v := range numbers {
		a := v * v
		count += a
	}
	return (count)
}

func ssquareSum(numbers []int) int {
	count := 0
	for _, v := range numbers {
		v *= v
		count += v
	}
	return (count)
}

func squareSums(numbers []int) int {
	sum := 0

	for i := 0; i < len(numbers); i++ {
		sum = sum + (numbers[i] * numbers[i])
	}

	return sum
}

func squaresSum(nums []int) (res int) {
	for _, val := range nums {
		res += val * val
	}
	return res
}

func removeChar(word string) string {
	return (word[1 : len(word)-1])
}

func removesChar(word string) string {
	return strings.Join(strings.Split(word, "")[1:len(strings.Split(word, ""))-1], "")
}

func removeChars(word string) string {
	var newWord = []rune(word)
	return string(newWord[1 : len(newWord)-1])
}

func isDivisible(n, x, y int) bool {
	return n%x == 0 && n%y == 0
}

func issDivisible(n, x, y int) bool {
	return n%x+n%y == 0
}

func isDivisibles(n, x, y int) bool {
	var out bool

	if n%x == 0 && n%y == 0 {
		out = true
	}

	return out
}

var greet = func() string { return "hello world!" }

func greets() string {
	b := "hello world!"
	return b
}

func getCount(strn string) int {
	count := 0

	vowels := []string{"a", "e", "i", "o", "u"}

	for _, vowel := range vowels {
		count += strings.Count(strn, vowel)
	}

	return count
}

func getCounts(str string) (count int) {
	for _, c := range str {
		switch c {
		case "a", "e", "i", "o", "u":
			count++
		}
	}
	return count
}

func getsCount(str string) int {
	count := 0
	for i := range str {
		switch str[i] {
		case "a", "e", "i", "o", "u":
			count++
		}
	}
	return count
}

func vowel() {
	//a, e, i, o, u
	devin := "My name is Devin and I love Golang!"

	count := 0

	for _, vow := range devin {

		if vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u" {
			count++
		}
	}
	fmt.Println("here are the vowels in the string", count)

}

func highAndLow(in string) string {
	d := strings.Fields(in)
	min := 0
	max := 0

	for i, s := range d {
		n, _ := strconv.Atoi(s)
		if i == 0 || n < min {
			min = n
		}
		if i == 0 || n > max {
			max = n
		}
	}

	return strconv.Itoa(max) + " " + strconv.Itoa(min)
}

func otherAngle(a int, b int) int {
	return 180 - (a + b)
}

func otherAngles(a int, b int) int {
	var c int
	c = 180 - a - b

	return (c)
}

func grow(arr []int) int {
	if len(arr) == 0 {
		return 1
	}
	return arr[0] * grow(arr[1:])
}

func grows(arr []int) int {
	x := 1
	for _, v := range arr {
		x *= v
	}
	return x
}


/////////////////////////////////////////////////////////////////
// JavaScript codewars
// Return the number (count) of vowels in the given string.

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