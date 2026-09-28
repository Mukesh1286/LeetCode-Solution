// 🟢 Problem 
// Given an array nums and a value val, remove all occurrences of val in-place.
// Example:
// nums = [3, 2, 2, 3]  , val = 3

// We want:
// [2, 2]
// Return:
// 2
// Because there are 2 elements remaining.

// nums = [3, 2, 2, 3]  
// val = 3

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2

function removeElement(nums, val) {
let left = 0;
  

  for (let right = 0; right < nums.length; right++) {

    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }

  }

  return left;
}

console.log(removeElement(nums, val))
