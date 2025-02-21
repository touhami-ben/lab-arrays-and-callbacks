const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  let result = nums.every((num) => num > 2);
    return result
  
};

const isEveryWordShorterThan7 = (words) => {
  return words.every(word => word.length <7);
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => num < 5)
};

const arrayOddLengthWords = (words) => {
  return words.filter((word) => word.length % 2 === 1)
  
};

// Find

const firstValDivisibleBy4 = (nums) => {
  let answer = nums.find( num => num % 4 === 0);
  return answer;
};


const firstWordLongerThan4Char = (words) => {
  let result = words.find( word => word.length > 4);
  return result;
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex( num => num % 3 === 0)
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex(word => word.length < 2);
};



// For Each

const logValuesTimes3 = (nums) => {
   nums.forEach( (num) => num * 3)
   
};
// console.log(nums)

const logWordsWithExclamation = (words) => {
  words.forEach( word => `${word}!`)
  
};
// console.log(`words!`)

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num, index) => {
    return num**2 * index
  });
};

const arrayWordsUpcased = (words) => {
  return words.map((word) => {
    return word.toUpperCase()
  });
  
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num) => num % 7 === 0)
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => word.includes("a"))
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
