// #1 Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10
// Parameters : height → triangle height
function leftTriangle(height: number) {
  let _star: string = ``;
  for (let i = 1; i < height; i++) {
    for (let j = 1; j <= i; j++) {
      _star += `0${j}`;
    }
    _star += `\n`;
  }
  return _star;
}
console.log(leftTriangle(4));

// #2 Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
let totalLooping: number = 15;
function fizzBuzz(n: number) {
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log(`FizzBuzz`);
      }
      console.log(`Fizz`);
    } else if (i % 5 === 0) {
      console.log(`Buzz`);
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(totalLooping);

// #3 Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”z
function bmi(weight: number, height: number) {
  let index: string = "";
  const result = weight / (height * height);
  if (result <= 18.5) {
    index = "less weight";
  } else if (result > 18.5 && result <= 24.9) {
    index = "ideal";
  } else if (result > 25 && result <= 29.9) {
    index = "overweight";
  } else if (result > 30 && result <= 39.9) {
    index = "very overweight";
  } else {
    index = "obesity";
  }
  return index;
}
console.log(bmi(65, 1.7));

// #4 Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
let listNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listEven: number[] = [];
function removeOddNumbers(listParameter: number[]) {
  for (let i of listParameter) {
    if (i % 2 === 0) {
      listEven.push(i);
    } else {
      continue;
    }
  }
  return listEven;
}
const evenNumbers = removeOddNumbers(listNumber);
console.log(evenNumbers);

// #5 Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]
let _string: string = `Hello World`;
function stringToArray(_inputString: string) {
  return _inputString.split(` `);
}
const cekHasil = stringToArray(_string);
console.log(cekHasil);
