// 🎯 Two Sum II — LeetCode #167

// This is one of the most important Two Pointer problems.

// The main difference from normal Two Sum is:

// The array is already sorted.

// Example
// numbers = [2, 7, 11, 15]
// target = 9

// We need:

// 2 + 7 = 9

// Output:

// [1, 2]

function twoSum(numbers, target) {

    // LEFT pointer starts from the beginning
    let left = 0;

    // RIGHT pointer starts from the end
    let right = numbers.length - 1;


    // Continue until left and right meet
    while (left < right) {

        // Add the two numbers
        let sum = numbers[left] + numbers[right];


        // --------------------------------
        // CASE 1: We found the target
        // --------------------------------
        if (sum === target) {

            // LeetCode wants 1-based indexes
            // So we add 1 to both indexes.
            return [left + 1, right + 1];
        }


        // --------------------------------
        // CASE 2: Sum is too small
        // --------------------------------
        if (sum < target) {

            // We need a BIGGER sum.
            //
            // Because the array is sorted,
            // move LEFT forward.
            //
            // Example:
            // [2, 7, 11, 15]
            //  2 + 15 = 17
            //
            // If sum was too small,
            // increasing left gives a bigger number.
            left++;

        } else {

            // Sum is too BIG.
            //
            // We need a smaller number,
            // so move RIGHT backward.
            right--;
        }
    }


    // No pair found
    return [];
}


// Example
const numbers = [2, 7, 11, 15];

const target = 9;

console.log(twoSum(numbers, target));