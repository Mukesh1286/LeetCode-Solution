// 🧠 Problem - 
// You have a sorted array with duplicate numbers.
// Remove the duplicates in-place and return the number of unique elements.
// Example:
// [1, 1, 2]
// After removing duplicates:
// [1, 2]
// Return:
// 2


//1st element never be duplicate
//left = 0;
// start i=1 
//both element are same don’t update
//right ++
//left++
//update element right to left 
//number of element not duplicate left 1+1


let nums = [1, 1, 1, 2, 2, 3, 3,];
function removeDuplicates(nums) {

    let left = 0;

    for (let right = 1; right < nums.length; right++) {              

        if (nums[left] !== nums[right]) {
           left++;            //------------- increment left 
          nums[left] = nums[right]
        }
    }

    return left+1;

}
console.log(removeDuplicates(nums))
