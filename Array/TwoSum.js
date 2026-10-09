// 📝 Problem
// Given an array and a target, find 2 numbers whose sum equals the target.
// Example:
// nums = [2, 7, 11, 15]
// target = 9
// 2 + 7 = 9
// Answer:
// [0, 1]
// Because 2 is at index 0 and 7 is at index 1.


// 0  1  2   2
// let nums = [2, 7, 11, 15] 
// let target = 9;

// function twoSum( nums, target){
//     let map = new Map()

//     for(let i=0; i< nums.length; i++){
//         let rem = target - nums[i]

//         if(map.has(rem)){
//             return [map.get(rem), i]  //get
//         }

//         map.set(nums[i], i); //set
//     }

// }

// console.log(twoSum(nums, target))



// Given array
let nums = [2, 7, 11, 15];

// Target sum
let target = 9;


function twoSum(nums, target) {

    // Create a Map to store:
    // number → index
    //
    // Example:
    // Map { 2 => 0, 7 => 1 }
    let map = new Map();


    // Loop through the array
    for (let i = 0; i < nums.length; i++) {

        // Find the number needed to reach target
        //
        // target = 9
        // nums[i] = 2
        // rem = 9 - 2 = 7
        let rem = target - nums[i];


        // Check whether the required number
        // already exists in the Map
        if (map.has(rem)) {

            // If found, return both indexes:
            // map.get(rem) = index of required number
            // i = index of current number
            return [map.get(rem), i];
        }


        // Store current number and its index
        //
        // Example:
        // map.set(2, 0)
        // Means number 2 is at index 0
        map.set(nums[i], i);
    }

    // Return an empty array if no pair is found
    return [];
}


// Call the function
console.log(twoSum(nums, target));

// Output: [0, 1]

// Time: O(n) — one loop through the array.
// Space: O(n) — the Map may store up to n elements.