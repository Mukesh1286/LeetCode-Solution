// 🔲 Squares of a Sorted Array — LeetCode #977

// This is another Two Pointer problem. The tricky part is that the input is sorted, but negative numbers become large positive numbers after squaring.

// Example
// Input:
// [-4, -1, 0, 3, 10]

// Squares:
// [16, 1, 0, 9, 100]

// Output:
// [0, 1, 9, 16, 100]


function sortedSquares(nums) {

    // Create an array to store the answer
    let result = new Array(nums.length);


    // LEFT pointer starts at the beginning
    let left = 0;


    // RIGHT pointer starts at the end
    let right = nums.length - 1;


    // k tells us where to put the biggest square
    //
    // We start from the END because
    // the biggest square should go at the end.
    let k = nums.length - 1;


    // Continue until left and right meet
    while (left <= right) {

        // Square the LEFT value
        //
        // Math.abs() is not necessary here
        // because multiplying a negative number
        // by itself gives a positive number.
        let leftSquare = nums[left] * nums[left];


        // Square the RIGHT value
        let rightSquare = nums[right] * nums[right];


        // Compare the two squares
        if (leftSquare > rightSquare) {

            // LEFT square is bigger,
            // so put it at the current END position.
            result[k] = leftSquare;

            // Move LEFT pointer forward
            left++;

        } else {

            // RIGHT square is bigger,
            // so put it at the current END position.
            result[k] = rightSquare;

            // Move RIGHT pointer backward
            right--;
        }


        // Move result position backward
        k--;
    }


    // Return the sorted squares
    return result;
}


// Example
const nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));


// Complexity
// Time  → O(n)
// Space → O(n)