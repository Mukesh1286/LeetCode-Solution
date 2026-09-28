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
let nums = [2, 7, 11, 15] 
let target = 9;

function twoSum( nums, target){
    let map = new Map()

    for(let i=0; i< nums.length; i++){
        let rem = target - nums[i]

        if(map.has(rem)){
            return [map.get(rem), i]  //get
        }

        map.set(nums[i], i); //set
    }

}

console.log(twoSum(nums, target))
