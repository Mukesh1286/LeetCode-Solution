// 🔄 Spiral Matrix — LeetCode

// Problem: Given a matrix, return all elements in spiral order.

// Example
// Input:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// Output:
// [1, 2, 3, 6, 9, 8, 7, 4, 5]






// 🧠 Logic — 4 Boundaries

// Think of the matrix like a box:

// top → → → → → right
// ↑                 ↓
// ↑                 ↓
// left ← ← ← ← ← bottom

// Maintain 4 variables:

// top = 0
// bottom = matrix.length - 1
// left = 0
// right = matrix[0].length - 1

// Then repeatedly do 4 steps:

// ➡️ Traverse left → right on top
// ⬇️ Traverse top → bottom on right
// ⬅️ Traverse right → left on bottom
// ⬆️ Traverse bottom → top on left

// After each traversal, move the boundary inward.

// Every round:
// →  top++
// ↓  right--
// ←  bottom--
// ↑  left++

function spiralOrder(matrix) {
    const result = [];

    let top = 0;
    let bottom = matrix.length - 1;
   
    let left = 0;
    let right = matrix[0].length - 1;


    while (top <= bottom && left <= right) {

        // 1. Left → Right ------------------>  // ➡️ Traverse left → right on top
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;

        // 2. Top → Bottom ------------------> // ⬇️ Traverse top → bottom on right
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;


        // 3. Right → Left -----------------> // ⬅️ Traverse right → left on bottom
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }

        // 4. Bottom → Top  --------------> // ⬆️ Traverse bottom → top on left
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;
        }
    }

    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(spiralOrder(matrix));