// Problem
// Move all 0s to the end of the array.
// The order of other numbers should stay the same.
// Input:
// [0, 1, 0, 3, 12]

// Output:
// [1, 3, 12, 0, 0]

let nums = [0, 1, 0, 3, 12]
let position;

function MoveZero(nums){

    for(let i=0; i< nums.length; i++){
        if(nums[i] === 0){
            position=i
            break;
        }
    }
  for(let i= position + 1; i< nums.length; i++){
    if(nums[i] !== 0 ){
        let tem = nums[i]
        nums[i] = nums[position]
        nums[position]= tem
        position++;
    }
  }
 return nums
}
console.log(MoveZero(nums)) // [ 1, 3, 12, 0, 0 ]




// function moveZeroes(nums) {
//   let j = 0;

//   for (let i = 0; i < nums.length; i++) {

//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }

//   while (j < nums.length) {
//     nums[j] = 0;
//     j++;
//   }
// }

// let nums = [0, 1, 0, 3, 12];

// moveZeroes(nums);

// console.log(nums);

