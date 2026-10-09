// 🧠 Problem - 
// You have a sorted array with duplicate numbers.
// Remove the duplicates in-place and return the number of unique elements.
// Example:
// [1, 1, 2]
// After removing duplicates:
// [1, 2]
// Return:
// 2


//1st element never be duplicate
//left = 0;
// start i=1 
//both element are same don’t update
//right ++
//left++
//update element right to left 
//number of element not duplicate left 1+1


// let nums = [1, 1, 1, 2, 2, 3, 3,];
// function removeDuplicates(nums) {

//     let left = 0;

//     for (let right = 1; right < nums.length; right++) {              

//         if (nums[left] !== nums[right]) {
//            left++;            //------------- increment left 
//           nums[left] = nums[right]
//         }
//     }

//     return left+1;

// }
// console.log(removeDuplicates(nums))



// let nums = [1, 1, 1, 2, 2, 3, 3];

// function removeDuplicates(nums) {

//     // Points to the last unique element
//     let left = 0;

//     // Check each next element
//     for (let right = 1; right < nums.length; right++) {

//         // If the current number is different
//         if (nums[left] !== nums[right]) {

//             left++; // Move to the next unique position

//             // Place the new unique number there
//             nums[left] = nums[right];
//         }
//     }

//     // Number of unique elements
//     return left + 1;
// }

// console.log(removeDuplicates(nums)); // 3
// console.log(nums); // [1, 2, 3, 2, 2, 3, 3]



/*
    LeetCode #26: Remove Duplicates from Sorted Array

    Input:
    [1, 1, 1, 2, 2, 3, 3]

    Expected unique elements:
    [1, 2, 3]

    Expected return value:
    3
*/

let nums = [1, 1, 1, 2, 2, 3, 3];

function removeDuplicates(nums) {

    // STEP 1:
    // Create a pointer named 'left'.
    // It points to the last position containing a unique number.
    // Initially, index 0 contains the first number, which is 1.
    let left = 0;

    // STEP 2:
    // Start the 'right' pointer at index 1.
    // We compare each number with the number at index 'left'.
    // Continue until we reach the end of the array.
    for (let right = 1; right < nums.length; right++) {

        // STEP 3:
        // Compare the last unique number with the current number.
        //
        // If both numbers are equal, the current number is a duplicate.
        // We do nothing and continue to the next iteration.
        //
        // If they are different, we have found a new unique number.
        if (nums[left] !== nums[right]) {

            // STEP 4:
            // Move 'left' one position forward.
            // This creates the next position for a unique number.
            left++;

            // STEP 5:
            // Copy the new unique number into the position at 'left'.
            //
            // Example:
            // nums[right] = 2
            // left becomes 1
            // nums[1] = 2
            //
            // The beginning of the array now contains [1, 2].
            nums[left] = nums[right];
        }

        // STEP 6:
        // The for loop automatically increments 'right'.
        // We continue checking the remaining numbers.
    }

    // STEP 7:
    // 'left' stores the INDEX of the last unique number.
    //
    // Array indexes start at 0, but the count starts at 1.
    // Therefore, the total number of unique elements is left + 1.
    return left + 1;
}

// STEP 8:
// Call the function and print the number of unique elements.
console.log(removeDuplicates(nums)); // Output: 3

// STEP 9:
// Print the modified array.
// Only the first 3 elements are relevant to the answer.
// The elements after index 2 can contain leftover values.
console.log(nums); // Output: [1, 2, 3, 2, 2, 3, 3]