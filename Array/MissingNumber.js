// 🟨 LeetCode 268 — Missing Number
// 📝 Problem
// You are given an array containing n distinct numbers from 0 to n.
// One number is missing. Find it.
// Example
// [3, 0, 1]
// Numbers should be:
// 0  1  2  3
//       ↑
//     Missing
// Answer:
// 2


var missingNumber = function(nums) {
    let n = nums.length;

    let expectedSum = n * (n + 1) / 2;

    let actualSum = 0;

    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1]));    // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8


// Line-by-line explanation

// Step 1: Create the function

// var missingNumber = function(nums) {

// missingNumber is the function name.

// nums is the input array.

// Step 2: Find the array length

// let n = nums.length;

// For example:

// nums = [3, 0, 1];
// n = 3;

// The array has 3 elements, so the numbers should be from 0 to 3.

// Step 3: Calculate the expected sum

// let expectedSum = n * (n + 1) / 2;

// Formula:

// Sum=
// 2
// n(n+1)
// 	​


// For n = 3:

// 2
// 3(3+1)
// 	​

// =
// 2
// 12
// 	​

// =6

// The expected numbers are [0, 1, 2, 3], whose sum is 6.

// Step 4: Initialize the actual sum

// let actualSum = 0;

// We use actualSum to calculate the sum of the numbers present in the array.

// Step 5: Iterate through the array

// for (let i = 0; i < nums.length; i++) {
//     actualSum += nums[i];
// }

// This loop adds each array element to actualSum.

// Step 6: Find the missing number

// return expectedSum - actualSum;

// Subtract the actual sum from the expected sum to find the missing number.