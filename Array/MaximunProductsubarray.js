// LeetCode: 152. Maximum Product Subarray

// Medium Array Dynamic Programming JavaScript

// 1. Problem Explanation

// Given an integer array nums, find a contiguous subarray (containing at least one number) that has the largest product, and return that product.

// Example 1:

// Input: nums = [2, 3, -2, 4]
// Output: 6

// Explanation:

// [2] → Product = 2

// [2, 3] → Product = 6

// [2, 3, -2] → Product = -12

// [3, -2, 4] → Product = -24

// The maximum product is 6, from the subarray [2, 3].

// Example 2:

// Input: nums = [-2, 0, -1]
// Output: 0

// Explanation: The maximum product is 0, from the subarray [0].




// function maxProduct(nums) {   

//     let maxProduct = nums[0];
//     let minProduct = nums[0];

//     let result = nums[0];
   
//     for (let i = 1; i < nums.length; i++) {

//         let current = nums[i];      
//         let oldMax = maxProduct;
//         let oldMin = minProduct;
       
        // maxProduct = Math.max(current,  current * oldMax, current * oldMin);
       
//         minProduct = Math.min(
//             current,
//             current * oldMax,
//             current * oldMin
//         );
    
//         result = Math.max(result, maxProduct);
//     }
    
//     return result;
// }


// // Example
// const nums = [2, 3, -2, 4];

// console.log(maxProduct(nums));



function maxProduct(nums) {

    // We keep two values:
    //
    // maxProduct = maximum product ending at current position
    // minProduct = minimum product ending at current position
    //
    // Why minProduct?
    // Because a negative number can turn the smallest
    // negative product into the biggest positive product.

    let maxProduct = nums[0];
    let minProduct = nums[0];

    // Store the final maximum answer
    let result = nums[0];


    // Start from the second element
    for (let i = 1; i < nums.length; i++) {

        let current = nums[i];


        // IMPORTANT:
        // Save old values before changing them.
        //
        // Example:
        // maxProduct = 6
        // minProduct = -2
        // current = -4
        //
        // We need both old values to calculate
        // the new max and min.
        let oldMax = maxProduct;
        let oldMin = minProduct;


        // There are 3 possible products:
        //
        // 1. Current number alone
        // 2. Current × previous maximum
        // 3. Current × previous minimum
        //
        // We take the biggest one.
        maxProduct = Math.max(
            current,
            current * oldMax,
            current * oldMin
        );


        // Take the smallest one.
        //
        // We need this because a negative number
        // can later turn this minimum into a maximum.
        minProduct = Math.min(
            current,
            current * oldMax,
            current * oldMin
        );


        // Update our final answer
        result = Math.max(result, maxProduct);
    }


    // Return the maximum product found
    return result;
}


// Example
const nums = [2, 3, -2, 4];

console.log(maxProduct(nums));