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

let nums = [1, 2, 3, 4, 5, 6, 7]
let  k = 3

function rotateArray(nums, k){

    let len = nums.length;
    k= k% len;

    if(k===0)
        return nums;

    let arr = nums.slice(len - k);

    for(let i=len-1; i>=k; i--){
        nums[i] = nums[i-k];

    }

    for(let i=0; i<k; i++){
        nums[i] = arr[i];
    }

    return nums;
}

console.log(rotateArray(nums, k))