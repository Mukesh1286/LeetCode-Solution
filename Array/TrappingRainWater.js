// 🌧️ Trapping Rain Water — LeetCode #42

// This is an important array + two-pointer problem. Let's build the logic step by step.

// 1. Understand the problem
// height = [0,1,0,2,1,0,1,3,2,1,2,1]

// Imagine these numbers are building heights:

//           █
//       █   █
//       █   █
//   █   █   █
//   █ █ █ █ █ █
// ----------------
// 0 1 2 3 4 5 6 7 8 9 10 11

// After rain, water gets trapped between taller buildings.

// Output:

// 6


// function trap(height) {
//     let left = 0;
//     let right = height.length - 1;

//     let leftMax = 0;
//     let rightMax = 0;

//     let water = 0;

//     while (left < right) {

//         if (height[left] < height[right]) {

//             if (height[left] >= leftMax) {
//                 leftMax = height[left];
//             } else {
//                 water += leftMax - height[left];
//             }

//             left++;

//         } else {

//             if (height[right] >= rightMax) {
//                 rightMax = height[right];
//             } else {
//                 water += rightMax - height[right];
//             }

//             right--;
//         }
//     }

//     return water;
// }

// const height = [0,1,0,2,1,0,1,3,2,1,2,1];

// console.log(trap(height));



function trap(height) {

    // Two pointers:
    // left starts from the beginning
    // right starts from the end
    let left = 0;
    let right = height.length - 1;


    // Highest wall we have seen from the LEFT side
    let leftMax = 0;

    // Highest wall we have seen from the RIGHT side
    let rightMax = 0;


    // Total water collected
    let water = 0;


    // Keep checking until left and right meet
    while (left < right) {


        // If the LEFT wall is smaller,
        // we can calculate water for the LEFT side
        if (height[left] < height[right]) {


            // If current left wall is higher than
            // our previous highest left wall,
            // update leftMax
            if (height[left] >= leftMax) {

                leftMax = height[left];

            } else {

                // Current wall is smaller than leftMax.
                // So water can stay here.
                //
                // Example:
                // leftMax = 3
                // current height = 1
                //
                // water = 3 - 1 = 2

                water = water + leftMax - height[left];
            }


            // Move LEFT pointer one step forward
            left++;


        } else {


            // Otherwise, the RIGHT wall is smaller
            // or both walls are equal.
            // So calculate water for the RIGHT side.


            // If current right wall is higher than
            // our previous highest right wall,
            // update rightMax
            if (height[right] >= rightMax) {

                rightMax = height[right];

            } else {

                // Current wall is smaller than rightMax.
                // So water can stay here.
                //
                // Example:
                // rightMax = 3
                // current height = 1
                //
                // water = 3 - 1 = 2

                water += rightMax - height[right];
            }


            // Move RIGHT pointer one step backward
            right--;
        }
    }


    // Return total trapped water
    return water;
}


// Example input
const height = [0,1,0,2,1,0,1,3,2,1,2,1];


// Call the function
console.log(trap(height));

// // Output:
// // 6