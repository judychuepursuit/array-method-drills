const { nums, words } = require("./data/data.js");

// Every: Determine if every number is greater than or equal to 2
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every(num => num.length >= 2);
};
// Determine if every word shorter than 7 characters
const isEveryWordShorterThan7 = () => {
  return words.every(word => word.length <= 7);
};

// Filter: Filter the array for numbers less than 5
const arrayLessThan5 = (nums) => {
  return nums.filter(num => num < 5);
};
// Filter words that have an odd length
const arrayOddLengthWords = () => {
return words.filter(word => word.length % 2 !==0);
};

// Find1: Find the first value divisible by 4
const firstValDivisibleBy4 = (nums) => {
  return nums.find(num => num % 4 === 0)
};

// find the first word that is longer than 4 characters
const firstWordLongerThan4Char = () => {
  return words.find(word => word.length >= 4)
};

// Find Index: find the index of the first number that is divisible by 3
const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex(num => num % 3 === 0)
};

// find the index of the first word that is less than 2 characters long
const firstWordIndexLessThan2Char = () => {
  return words.findIndex(word => word.length <= 2)
};

// For Each: console.log each value of the nums array multiplied by 3
const logValuesTimes3 = (nums) => {
  nums.forEach(nums => console.log(nums *3))
};

// console.log each word with an exclamation point at the end of it
const logWordsWithExclamation = (words) => {
  words.forEach(word => console.log(word + '!'));
};

// Map1. Make a new array of each number squared and then multiplied by their index number
const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num, index) => num ** 2 * index)
};

// Make a new array of all the words in all uppercase
const arrayWordsUpcased = (words) => {
  return words.map((word) => word.toUpperCase())
};

// Some: Find out if some numbers are divisible by 7
const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some(num => num % 7 == 0);
};

// Find out if some words have the letter `a` in them
const doSomeWordsHaveAnA = (words) => {
  return words.some(word => word.includes("a"));
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
