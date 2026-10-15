// 🟨 Plus One — LeetCode 66
// Very easy idea: add 1 from the last digit.
// Example:
// [1, 2, 3]
// means 123.
// After plus one:
// [1, 2, 4]

let nums = [1, 2, 3]

function plusOne(digits){
    for(let i = digits.length - 1; i>=0; i--){
        if(digits[i] < 9){
            digits[i]++
            return digits

        }
        digits[i] = 0;
    }
    
    digits.unshift(1);

    return digits;

}
console.log(plusOne(nums))
console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 9]));
console.log(plusOne([9, 9, 9]));



// let nums = [1, 2, 3];

// function plusOne(digits) {

//     // Start from the last digit
//     for (let i = digits.length - 1; i >= 0; i--) {

//         // If the digit is less than 9, increment it
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits; // No carry needed
//         }

//         // If the digit is 9, change it to 0
//         digits[i] = 0;
//     }

//     // If all digits were 9, add 1 at the beginning
//     digits.unshift(1);

//     return digits;
// }

// console.log(plusOne(nums));       // [1, 2, 4]
// console.log(plusOne([1, 2, 3]));  // [1, 2, 4]
// console.log(plusOne([1, 2, 9]));  // [1, 3, 0]
// console.log(plusOne([9, 9, 9]));  // [1, 0, 0, 0]
