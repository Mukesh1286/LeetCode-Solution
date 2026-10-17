// 🟨 Majority Element — LeetCode 169

// https://www.youtube.com/watch?v=1l3LAkRdfDk

// Problem in easy words
// Find the number that appears more than n / 2 times.
// Example:
// [2, 2, 1, 1, 1, 2, 2]
// 2 appears 4 times.
// Array length = 7
// 7 / 2 = 3.5
// 2 appears more than 3.5 times.
// ✅ Answer = 2


function majorityElement(nums) {
  let count = 0;
  let candidate = 0;

  for (let num of nums) {

    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));


// 🟨 Sticky Note
// ┌─────────────────────────┐
// │     MAJORITY ELEMENT    │
// ├─────────────────────────┤
// │                         │
// │ candidate = number      │
// │ count = strength        │
// │                         │
// │ SAME      → count++     │
// │ DIFFERENT → count--     │
// │                         │
// │ count === 0             │
// │      ↓                  │
// │ new candidate           │
// │                         │
// │ ⭐ Answer = candidate    │
// │                         │
// │ Time  → O(n)            │
// │ Space → O(1)            │
// └─────────────────────────┘




function majorityElement(nums) {

    // Store the possible majority element
    let candidate = 0;

    // Store the number of votes for the candidate
    let count = 0;

    // Traverse every element in the array
    for (let i = 0; i < nums.length; i++) {

        // If the vote count becomes 0,
        // choose the current element as a new candidate
        if (count === 0) {
            candidate = nums[i];
        }

        // If the current element matches the candidate,
        // increase the candidate's vote count
        if (nums[i] === candidate) {
            count++;
        }

        // If the current element is different,
        // cancel one vote for the candidate
        else {
            count--;
        }
    }

    // Return the final candidate
    // The problem guarantees that a majority element exists
    return candidate;
}

// Test case 1
console.log(majorityElement([3, 2, 3])); 
// Output: 3

// Test case 2
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); 
// Output: 2

// Test case 3
console.log(majorityElement([1, 1, 1, 2, 3])); 
// Output: 1
