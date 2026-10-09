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

// let nums = [0, 1, 2, 2, 3, 0, 4, 2];
// val = 2

// function removeElement(nums, val) {
// let left = 0;
  

//   for (let right = 0; right < nums.length; right++) {

//     if (nums[right] !== val) {
//       nums[left] = nums[right];
//       left++;
//     }

//   }

//   return left;
// }

// console.log(removeElement(nums, val))



/*
    LeetCode #27: Remove Element

    Input:
    nums = [0, 1, 2, 2, 3, 0, 4, 2]
    val = 2

    Goal:
    Remove all occurrences of 2 in-place.

    Expected result:
    First 5 elements = [0, 1, 3, 0, 4]
    Return value = 5
*/

// Original array
let nums = [0, 1, 2, 2, 3, 0, 4, 2];

// The value we want to remove
let val = 2;

function removeElement(nums, val) {

    // STEP 1:
    // 'left' points to the next position where
    // a number that is NOT equal to val should be placed.
    // Initially, we start at index 0.
    let left = 0;

    // STEP 2:
    // 'right' visits every element in the array,
    // starting from index 0 and ending at the last index.
    for (let right = 0; right < nums.length; right++) {

        // STEP 3:
        // Check whether the current number should be kept.
        //
        // If nums[right] === val, skip it.
        // If nums[right] !== val, keep it.
        if (nums[right] !== val) {

            // STEP 4:
            // Copy the number we want to keep
            // into the position indicated by 'left'.
            //
            // This can overwrite a removed value
            // or leave the number in its current position.
            nums[left] = nums[right];

            // STEP 5:
            // Move 'left' forward because we have
            // successfully placed one more valid number.
            left++;
        }

        // STEP 6:
        // The for loop automatically increases 'right'
        // and checks the next element.
    }

    // STEP 7:
    // 'left' equals the total count of elements
    // that are NOT equal to val.
    return left;
}

// Call the function and print the count of remaining elements.
console.log(removeElement(nums, val)); // Output: 5

// Print the modified array to see the remaining values.
console.log(nums); // [0, 1, 3, 0, 4, 0, 4, 2]