// 📝 Problem – Syncronius (step by step)
// Check whether an array contains any duplicate number.
// Example:
// [1, 2, 3, 1]
// 1 appears twice → true
// [1, 2, 3, 4]
// No duplicate → false

// function containsDuplicate(nums) {
//     let set = new Set();

//     for (let num of nums) {
//         if (set.has(num)) {
//             return true;
//         }
//         set.add(num);
//     }

//     return false;
// };

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3]));


function containsDuplicate(nums) {
    // Step 1: Create an empty Set
    let set = new Set();

    // Step 2: Visit each number in the array
    for (let num of nums) {

        // Step 3: Check if the number already exists
        if (set.has(num)) {
            // Number is repeated
            return true;
        }

        // Step 4: Store the number in the Set
        set.add(num);
    }

    // Step 5: No duplicate was found
    return false;
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1]));   // true
console.log(containsDuplicate([1, 2, 3, 4]));   // false
console.log(containsDuplicate([1, 1, 1, 3, 3])); // true
