// 📝 Problem – Syncronius (step by step)
// Check whether an array contains any duplicate number.
// Example:
// [1, 2, 3, 1]
// 1 appears twice → true
// [1, 2, 3, 4]
// No duplicate → false

function containsDuplicate(nums) {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3]));


