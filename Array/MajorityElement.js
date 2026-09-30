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
