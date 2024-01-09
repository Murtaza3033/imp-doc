// Q1: write a code in JavaScript for finding the smallest integer in a finite sequence of natural numbers.
// function findMin(arr) {
//   let min = Math.min(...arr);
//   return [min];
// }

// const numbersArray = [5, 2, 8, 1, 7];
// const result = findMin(numbersArray);
// console.log(result); 

// Q2: write a code in JavaScript to locates the first occurrence of the largest element in a finite list of integers where the integer in the list are not necessarity distinct.
// function indexOfLargestInteger(arr) {
//   if (arr.length === 0) {
//     // Return -1 for an empty array
//     return -1;
//   }

//   let maxInteger = null;
//   let maxIndex = -1;

//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];
//     if (Number.isInteger(currentElement)) {
//       if (maxInteger === null || currentElement > maxInteger) {
//         maxInteger = currentElement;
//         maxIndex = i;
//       }
//     }
//   }

// //   return maxIndex;
// // console.log(maxInteger);
// }
// const numbersArray = [3, 7, 1, 7, 5, 9, 10, 'notAnInteger', 15];
// const indexOfLargest = indexOfLargestInteger(numbersArray);
// console.log(indexOfLargest); // Output: 6

// Q3: write a code in JavaScript that locates the last first occurrence of the smallest element in a inite list of integers where the integer in the list are not necessarily distinct.
// function indexOfSmallestInteger(arr) {
//   if (arr.length === 0) {
//     // Return -1 for an empty array
//     return -1;
//   }

//   const minInteger = null;
//   let minIndex = -1;

//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];
//     if (Number.isInteger(currentElement)) {
//       if (minInteger === null || currentElement < minInteger) {
//         minInteger = currentElement;
//         minIndex = i;
        
//       }
//     }
//   }
  
//   return minIndex;
// console.log(maxInteger);
// }

// // Example usage:
// const numbersArray = [3, 7, 1, 7, 5, 9, 10, 'notAnInteger', 2];
// const indexOfSmallest = indexOfSmallestInteger(numbersArray);
// console.log(indexOfSmallest); // Output: 8

// Q4: write a code in lavaScript to find the longest word in English sentence (where a sentence is a sequence of symbols either a letter or a blank which can then be broken into alternating words and blanks.
// function findLongestWord(sentence) {
//   const words = sentence.split(/\s+/); // Split by spaces (including multiple spaces)
  
//   let longestWord = '';
//   for (const word of words) {
//     const cleanWord = word.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
//     if (cleanWord.length > longestWord.length) {
//       longestWord = cleanWord;
//     }
//   }

//   return longestWord;
// }

// // Example usage:
// const inputSentence = "This is a sample sentence with some long words.";
// const longestWord = findLongestWord(inputSentence);
// console.log(longestWord); // Output: "sentence"

// Q5: write a code in JavaScript that finds the first term of a sequence of integers that equals some previous term in the sequence.
// function findFirstRepeatingTerm(sequence) {
//   const set = new Set();

//   for (const num of sequence) {
//     if (set.has(num)) {
//       return num; // Found the first repeating term
//     }
//     set.add(num);
//   }

//   return null; // If no repeating term is found
// }

// const sequence = [2, 5, 8, 5, 7, 1, 10];
// const firstRepeatingTerm = findFirstRepeatingTerm(sequence);
// console.log(firstRepeatingTerm); // Output: 5

// Q6: write lavaScript code to fertnie a given string.
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }


// const inputString = "Hello, World!";
// const reversedString = reverseString(inputString);
// console.log(reversedString); // Output: "!dlroW ,olleH"

// Q7: write lavascript code for function that takes an array ef numbers and returns a new array with only the even numbers.
// function filterEvenNumbers(numbers) {
//   return numbers.filter(num => num % 2 === 0);
// }

// const numbersArray = [1, 2, 3, 4, 5, 6];
// const evenNumbersArray = filterEvenNumbers(numbersArray);
// console.log(evenNumbersArray); // Output: [2, 4, 6]

// Q8: write a javascript code to find The largest element in passed array.
// function findMax(arr) {
//   let max = Math.max(...arr);
//   return [ max];
// }


// const numbersArray = [5, 2, 8, 1, 7];
// const result = findMax(numbersArray);
// console.log(result); // Output: [8]
 
// Q9: write a lavascript code to check if a given number is prime.
// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// const numToCheck = 13;
// console.log(isPrime(numToCheck)); // Output: true

// Q10: write JavaScript code to calculate the factorial of a given number.
// function factorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);  
//   }
// }


// const numForFactorial = 5;
// const result = factorial(numForFactorial);
// console.log(result); // Output: 120

// function findLargestElement(array) {
//     if (!Array.isArray(array) || array.length === 0) {
//        return null;
//     }
   
//     let largestElement = array[0];
   
//     for (let i = 1; i < array.length; i++) {
//        if (array[i] > largestElement) {
//          largestElement = array[i];
//        }
//     }
   
//     return largestElement;
//    }
   
//    let array = [34, 56, 1, 100, 99];
//    let largest = findLargestElement(array);
//    console.log(largest); // Output: 100
