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
