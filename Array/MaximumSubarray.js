// 1. Problem in simple words
// Given an array of positive and negative numbers, find the contiguous subarray whose sum is maximum.
// Example:
// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// The best subarray is:[4, -1, 2, 1]
// Sum:4 + (-1) + 2 + 1 = 6
// So the answer is:
// 6

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
max = -Infinity
sum = 0

function MaxSubArray(nums){

   for(let i=0; i<nums.length; i++){

    sum = sum + nums[i];
    max = Math.max(max, sum)

    if(sum < 0){
        sum = 0
    }
   } 

return max

}
console.log(MaxSubArray(nums))




// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// // Store the maximum subarray sum found so far.
// // Start with -Infinity so even an all-negative array works.
// let max = -Infinity;

// // Store the sum of the current subarray.
// // Start at 0 because we have not added any numbers yet.
// let sum = 0;

// function MaxSubArray(nums) {

//   // Visit every element of the array from left to right.
//   for (let i = 0; i < nums.length; i++) {

//     // STEP 1:
//     // Add the current element to the running sum.
//     sum = sum + nums[i];

//     // STEP 2:
//     // Compare the running sum with the maximum sum found so far.
//     // Keep whichever value is greater.
//     max = Math.max(max, sum);

//     // STEP 3:
//     // If the running sum becomes negative, discard it.
//     // A negative sum would only reduce the sum of a future
//     // subarray, so start fresh from the next element.
//     if (sum < 0) {
//       sum = 0;
//     }
//   }

//   // Return the largest subarray sum found.
//   return max;
// }

// // Call the function and print the answer.
// console.log(MaxSubArray(nums)); // Output: 6


function maxSubArray(nums) {

  // STEP 1:
  // Initialize currentSum with the first element.
  // It stores the maximum sum of a subarray ending
  // at the current position.
  let currentSum = nums[0];

  // STEP 2:
  // Initialize maxSum with the first element.
  // It stores the largest subarray sum found so far.
  let maxSum = nums[0];

  // STEP 3:
  // Start from index 1 because index 0 is already used
  // to initialize currentSum and maxSum.
  for (let i = 1; i < nums.length; i++) {

    // STEP 4:
    // We have two choices:
    //
    // Choice 1: Start a new subarray from nums[i].
    // Choice 2: Extend the previous subarray by adding nums[i].
    //
    // Math.max() chooses whichever gives the larger sum.
    currentSum = Math.max(
      nums[i],
      currentSum + nums[i]
    );

    // STEP 5:
    // Compare the current subarray sum with the best sum
    // found so far. Keep the larger value.
    maxSum = Math.max(maxSum, currentSum);
  }

  // STEP 6:
  // Return the maximum contiguous subarray sum.
  return maxSum;
}

// Test the function.
console.log(
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);

// Output: 6


// Time- O(n) — one loop through the array
// Extra space- O(1) — only two main variables


// function maxSubArray(nums) {
//   let currentSum = nums[0];
//   let maxSum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);

//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

