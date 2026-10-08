// 🟨 LeetCode 189 — Rotate Array
// 📝 Problem
// Rotate the array to the right by k steps.
// Example:
// nums = [1, 2, 3, 4, 5, 6, 7]
// k = 3
// Move the last 3 numbers to the front:
// [1, 2, 3, 4, 5, 6, 7]
//             ↓
// [5, 6, 7, 1, 2, 3, 4]
// Answer:
// [5, 6, 7, 1, 2, 3, 4]








// Original array
let nums = [1, 2, 3, 4, 5, 6, 7];

// How many positions we want to rotate
let k = 3;


// Function to rotate the array
function rotateArray(nums, k) {

    // Store the length of the array
    // nums.length = 7
    let len = nums.length;


    // If k is bigger than the array length,
    // we only need the remainder.
    //
    // Example:
    // k = 10
    // len = 7
    //
    // 10 % 7 = 3
    //
    // So rotating 10 times is same as rotating 3 times.
    k = k % len;


    // If k becomes 0,
    // there is nothing to rotate.
    if (k === 0)
        return nums;


    // Take the LAST k elements
    //
    // nums = [1, 2, 3, 4, 5, 6, 7]
    // k = 3
    //
    // len - k = 7 - 3 = 4
    //
    // nums.slice(4)
    // = [5, 6, 7]
    //
    // We temporarily store them because
    // they need to come to the beginning.
    let arr = nums.slice(len - k);  //----------------->// len - k = 7 - 3 = 4


    // Move the remaining elements to the RIGHT
    //
    // We start from the END because
    // we don't want to overwrite values
    // that we still need.
    //
    // Before:
    // [1, 2, 3, 4, 5, 6, 7]
    //
    // After this loop:
    // [1, 2, 3, 4, 1, 2, 3]
    //
    
    // The first 4 values are still available
    // to be moved later.
    for (let i = len - 1; i >= k; i--) {

        // Move element k positions to the right
        nums[i] = nums[i - k];
    }


    // Now put the saved last k elements
    // at the beginning.
    //
    // arr = [5, 6, 7]
    //
    // nums becomes:
    // [5, 6, 7, 1, 2, 3, 4]
    for (let i = 0; i < k; i++) {

        nums[i] = arr[i];
    }


    // Return the rotated array
    return nums;
}


// Call the function
console.log(rotateArray(nums, k));


















// let nums = [1, 2, 3, 4, 5, 6, 7]
// let  k = 3

// function rotateArray(nums, k){

//     let len = nums.length;
//     k = k % len;

//     if(k===0)
//         return nums;

//     let arr = nums.slice(len - k);


//     for(let i=len-1; i>=k; i--){
//         nums[i] = nums[i-k];

//     }

//     for(let i=0; i<k; i++){
//         nums[i] = arr[i];
//     }

//     return nums;
// }

// console.log(rotateArray(nums, k))