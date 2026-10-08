// 🔺 3Sum — LeetCode #15

// This is an important problem because it combines sorting + two pointers.

// Problem

// Find all unique triplets whose sum is 0.

// Example:

// nums = [-1, 0, 1, 2, -1, -4]

// Output:

// [[-1, -1, 2], [-1, 0, 1]]


function threeSum(nums) {

    // Store all valid triplets
    let result = [];


    // Sort the array first
    //
    // Example:
    // [-1, 0, 1, 2, -1, -4]
    //
    // becomes:
    // [-4, -1, -1, 0, 1, 2]
    nums.sort((a, b) => a - b);


    // Fix one number at a time
    for (let i = 0; i < nums.length - 2; i++) {

        // --------------------------------
        // Skip duplicate first numbers
        // --------------------------------
        //
        // Example:
        // [-1, -1, 0, 1]
        //
        // We don't want to process -1 twice.
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }


        // If the current number is already
        // greater than 0, then all numbers
        // after it will also be greater than 0.
        //
        // Therefore, their sum cannot be 0.
        if (nums[i] > 0) {
            break;
        }


        // LEFT pointer starts after i
        let left = i + 1;


        // RIGHT pointer starts at the end
        let right = nums.length - 1;


        // Use two pointers
        while (left < right) {

            // Calculate the sum of 3 numbers
            let sum = nums[i] + nums[left] + nums[right];


            // --------------------------------
            // CASE 1: Sum is 0
            // --------------------------------
            if (sum === 0) {

                // We found a valid triplet
                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);


                // Move both pointers
                left++;
                right--;


                // Skip duplicate LEFT values
                //
                // Example:
                // [-1, 0, 0, 0, 1]
                //
                // Don't create the same triplet again.
                while (
                    left < right &&
                    nums[left] === nums[left - 1]
                ) {
                    left++;
                }


                // Skip duplicate RIGHT values
                while (
                    left < right &&
                    nums[right] === nums[right + 1]
                ) {
                    right--;
                }


            // --------------------------------
            // CASE 2: Sum is too small
            // --------------------------------
            } else if (sum < 0) {

                // We need a BIGGER sum.
                //
                // Array is sorted,
                // so move LEFT forward.
                left++;


            // --------------------------------
            // CASE 3: Sum is too big
            // --------------------------------
            } else {

                // We need a SMALLER sum.
                //
                // Array is sorted,
                // so move RIGHT backward.
                right--;
            }
        }
    }


    // Return all unique triplets
    return result;
}


// Example
const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));






// 🧠 Step-by-Step

// Input:

// [-1, 0, 1, 2, -1, -4]

// First sort:

// [-4, -1, -1, 0, 1, 2]
// Step 1 — Fix -4
// [-4, -1, -1, 0, 1, 2]
//   ↑                ↑
//   i              right

// Now:

// left = -1
// right = 2

// Calculate:

// -4 + (-1) + 2 = -3

// Sum is negative.

// We need a bigger sum:

// left++

// Continue until no solution.

// Step 2 — Fix -1

// Now:

// [-4, -1, -1, 0, 1, 2]
//       ↑
//       i

// Set:

// left = 2
// right = 5

// So:

// -1 + (-1) + 2
// = 0

// 🎯 Found:

// [-1, -1, 2]

// Add it:

// result.push([-1, -1, 2]);
// Continue

// Move pointers:

// left++
// right--

// Now:

// -1 + 0 + 1
// = 0

// 🎯 Found:

// [-1, 0, 1]