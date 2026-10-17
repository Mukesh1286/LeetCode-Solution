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


// var missingNumber = function(nums) {
//     let n = nums.length;

//     let expectedSum = n * (n + 1) / 2;

//     let actualSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         actualSum += nums[i];
//     }

//     return expectedSum - actualSum;
// };

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([0, 1]));    // 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8





function missingNumber(nums) {

    // Get the total number of elements
    let n = nums.length;

    // Calculate the expected sum from 0 to n
    let expectedSum = n * (n + 1) / 2;

    // Calculate the actual sum of array elements
    let actualSum = 0;

    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }

    // The difference is the missing number
    let missing = expectedSum - actualSum;

    return missing;
}

console.log(missingNumber([3, 0, 1]));       // 2
console.log(missingNumber([0, 1]));            // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0]));                // 1


// 3. Dry run step by step
// Input:
// nums = [3, 0, 1]


// Step 1: Calculate n.
// n = nums.length = 3


// Step 2: Calculate the expected sum.
// Expected numbers: 0, 1, 2, 3

// Expected sum = 3 × (3 + 1) / 2
//              = 12 / 2
//              = 6


// Step 3: Calculate the actual sum.
// Actual sum = 3 + 0 + 1
//            = 4


// Step 4: Subtract.
// Missing number = Expected sum - Actual sum
//               = 6 - 4
//               = 2


// Answer: 2
// 4. Another approach — XOR
// XOR is another way to solve this problem without using the sum formula.
// function missingNumber(nums) {

//     // Start with 0
//     let result = 0;

//     // XOR all expected numbers from 0 to n
//     for (let i = 0; i <= nums.length; i++) {
//         result = result ^ i;
//     }

//     // XOR all numbers present in the array
//     for (let i = 0; i < nums.length; i++) {
//         result = result ^ nums[i];
//     }

//     // Matching numbers cancel each other
//     // The missing number remains
//     return result;
// }

// console.log(missingNumber([3, 0, 1])); // 2


// For this problem, I recommend learning the sum formula solution first because it is easier to understand and explain in an interview.
// 5. Complexity
// 	Sum formula	XOR
// Time	\(O(n)\)	\(O(n)\)
// Extra space	\(O(1)\)	\(O(1)\)
// Both solutions assume the array contains distinct numbers from 0 to n, with exactly one number missing.