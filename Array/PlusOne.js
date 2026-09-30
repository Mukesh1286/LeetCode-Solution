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


// Line-by-line explanation
// Step 1: Create the function
// var plusOne = function(digits) {

// plusOne is the function name.

// digits is the input array.

// The function returns the array after adding one.

// Step 2: Start the loop from the last index
// for (let i = digits.length - 1; i >= 0; i--)

// Let's understand this loop:

// Suppose:

// digits = [1, 2, 3];

// Expression

	

// Meaning

	

// Value




// digits.length

	

// Total number of elements

	

// 3




// digits.length - 1

	

// Last index

	

// 2




// i >= 0

	

// Continue while index is non-negative

	

// true




// i--

	

// Decrease index by 1

	

// 2 → 1 → 0

// Array index visualization

// 1
// Index 0
// 2
// Index 1
// 3
// Index 2
// Start here

// The loop starts at index 2 (the last digit) and moves left toward index 0.

// Hindi: Loop array ke last element se start hota hai aur right se left ki taraf chalta hai.

// Step 3: Check whether the digit is less than 9
// if (digits[i] < 9) {

// This checks whether the current digit is smaller than 9.

// If the digit is less than 9, we can simply add 1.

// If the digit is 9, adding 1 requires carrying over to the previous digit.

// For example:

// 3 < 9 → true

// 8 < 9 → true

// 9 < 9 → false

// Step 4: Increment the digit
// digits[i]++;

// This increases the current digit by one.

// For example:

// digits = [1, 2, 3];

// The last digit is 3, which is less than 9.

// digits[i]++;

// The array becomes:

// [1, 2, 4]
// Step 5: Return the updated array
// return digits;

// Once we increment a digit that is less than 9, no further carry is needed. So we return immediately.

// Hindi: Agar current digit 9 se chhota hai, toh usmein 1 add karke array return kar dete hain.

// Step 6: Handle the digit 9
// digits[i] = 0;

// This line executes when the current digit is 9, because the if condition is false.

// For example:

// digits = [4, 3, 9];

// The last digit is 9. Adding one makes it 10, so we set that digit to 0 and carry 1 to the previous digit.

// [4, 3, 0]

// The loop then continues to the previous digit.

// Step 7: Handle all digits being 9
// digits.unshift(1);

// This line executes only if the loop finishes without returning. That means every digit was 9 and has been changed to 0.

// For example:

// [9, 9, 9]

// After the loop:

// [0, 0, 0]

// unshift(1) inserts 1 at the beginning:

// [1, 0, 0, 0]

// Finally:

// return digits;

// Returns the completed array.