// 🪣 Container With Most Water — LeetCode #11

// This is another very important Two Pointer problem.

// Problem

// You are given heights of vertical lines:

// height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

// Choose two lines that can hold the maximum amount of water.

// Output:

// 49



function maxArea(height) {

    // LEFT pointer starts from the beginning
    let left = 0;

    // RIGHT pointer starts from the end
    let right = height.length - 1;


    // Store the maximum water found
    let maxWater = 0;


    // Continue until both pointers meet
    while (left < right) {

        // --------------------------------
        // Calculate WIDTH
        // --------------------------------
        //
        // Example:
        // left = 0
        // right = 8
        //
        // width = 8 - 0 = 8

        let width = right - left;


        // --------------------------------
        // Find the smaller wall
        // --------------------------------
        //
        // Water can only rise up to
        // the height of the SMALLER wall.

        let currentHeight = Math.min(
            height[left],
            height[right]
        );


        // --------------------------------
        // Calculate current area
        // --------------------------------

        let currentArea = width * currentHeight;


        // Update maximum water
        if (currentArea > maxWater) {
            maxWater = currentArea;
        }


        // --------------------------------
        // Move the smaller wall
        // --------------------------------
        //
        // If LEFT wall is smaller,
        // move LEFT forward.
        //
        // If RIGHT wall is smaller,
        // move RIGHT backward.

        if (height[left] < height[right]) {

            left++;

        } else {

            right--;
        }
    }


    // Return the maximum water
    return maxWater;
}


// Example
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));