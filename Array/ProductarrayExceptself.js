// 🟨 LeetCode 238 — Product of Array Except Self
// 📝 Problem
// For every position, return the product of all other numbers, except the number at that position.
// Example:
// Input:
// [1, 2, 3, 4]

// Output:
// [24, 12, 8, 6]
// Because:
// 1 → 2 × 3 × 4 = 24
// 2 → 1 × 3 × 4 = 12
// 3 → 1 × 2 × 4 = 8
// 4 → 1 × 2 × 3 = 6

function productExceptSelf(nums) {
  let result = [];

  // Left product
  let left = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left = left * nums[i];
  }

  // Right product
  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * right;
    right = right * nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));


// Step 1 — Left product
// nums:    1   2   3   4

// result:  1   1   2   6
// Why?
// index 0 → nothing on left → 1
// index 1 → 1            → 1
// index 2 → 1 × 2        → 2
// index 3 → 1 × 2 × 3    → 6
// So:
// result = [1, 1, 2, 6]
// Step 2 — Right product
// Now go right → left.
// 4 → right = 1
// 3 → right = 4
// 2 → right = 4 × 3 = 12
// 1 → right = 4 × 3 × 2 = 24
// Multiply left product × right product:
// [1,  1,  2,  6]
//  ×   ×   ×   ×
// [24, 12,  4,  1]

// = [24, 12, 8, 6]
// ________________________________________
// 🟨 STICKY NOTE
//        PRODUCT EXCEPT SELF

//        LEFT → RIGHT
//            ↓
//        Save left product

//        RIGHT → LEFT
//            ↓
//        Multiply right product

//        LEFT × RIGHT
//            ↓
//          ANSWER


// [1, 2, 3, 4]

// → [24, 12, 8, 6]

// Time  → O(n)
// Space → O(1) extra
// 🎯 Interview shortcut
// Remember:
// LEFT → SAVE → RIGHT → MULTIPLY
