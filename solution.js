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

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex(num => num % 3 === 0)
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex(word => word.length <= 2)
};

// For Each

const logValuesTimes3 = () => {
  //
};

const logWordsWithExclamation = () => {
  //
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
};

const arrayWordsUpcased = () => {
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
};

const doSomeWordsHaveAnA = () => {
  //
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
