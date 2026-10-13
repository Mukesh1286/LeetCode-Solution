// This is LeetCode #643 — Maximum Average Subarray I. It is a great problem to learn the Sliding Window algorithm in JavaScript.
// The main idea is to find the average of a contiguous subarray of exactly k elements and return the maximum average.
// 1. Example
// nums = [1, 12, -5, -6, 50, 3];
// k = 4;


// We need to find the maximum average among all subarrays containing exactly 4 elements.
// The possible windows are:
// Window 1
// 1

// 12

// -5

// -6

// 50

// 3


// Sum = 1 + 12 − 5 − 6 = 2
// Average = 2 / 4 = 0.5

// Window 2
// 1

// 12

// -5

// -6

// 50

// 3


// Sum = 12 − 5 − 6 + 50 = 51
// Average = 51 / 4 = 12.75

// Window 3
// 1

// 12

// -5

// -6

// 50

// 3


// Sum = −5 − 6 + 50 + 3 = 42
// Average = 42 / 4 = 10.5

// Maximum average = 12.75

// 2. JavaScript solution with detailed comments

function findMaxAverage(nums, k) {

    // STEP 1:
    // Calculate the sum of the first k elements.
    // This creates our first window.
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    // STEP 2:
    // Initially, the first window has the maximum sum.
    let maxSum = sum;

    // STEP 3:
    // Start from index k because the first k elements
    // have already been added.
    for (let right = k; right < nums.length; right++) {

        // STEP 4:
        // Remove the element that leaves the window.
        // Its index is right - k.
        sum -= nums[right - k];

// // Remove the element that is leaving the window
// sum = sum - nums[right - k];



// // Add the new element entering the window
// sum = sum + nums[right];

        // STEP 5:
        // Add the new element entering the window.
        sum += nums[right];

        // STEP 6:
        // Save the largest window sum found so far.
        maxSum = Math.max(maxSum, sum);
    }

    // STEP 7:
    // Every window contains exactly k elements.
    // Average = sum / number of elements.
    return maxSum / k;
}

// Example
console.log(
    findMaxAverage([1, 12, -5, -6, 50, 3], 4)
);

// Output: 12.75



























// You already understand the diagram, so that's a good start! 👍 Your problem is the next step: how to convert the diagram into an algorithm and then into code.
// Don't worry. We can train this skill step by step. Since you're learning JavaScript and LeetCode, I'll teach you a repeatable method you can use for many array problems.
// Step 1: Follow this 5-step method for every problem

// 1. Understand the question
// What do I need to find: a sum, maximum, minimum, or length?




// 2. Solve it manually
// Take a small example and calculate the answer with a pen and paper.




// 3. Write the algorithm in English
// Write what happens first, next, and last. No JavaScript yet.




// 4. Convert each step into code
// Translate one English instruction into one or more JavaScript statements.




// 5. Dry run your code
// Check how every variable changes during each iteration.



// Step 2: Let's practice one problem together
// Problem: Find the maximum sum of k = 3 consecutive elements.
// Array: [2, 1, 5, 1, 3, 2]
// A. First, think like a human
// Ask yourself these three questions:
// - What do I need to find? The maximum sum.
// - How many elements should I select? Three consecutive elements.
// - What changes when I move the window? One element leaves, and another enters.
// This tells us that we need a fixed-size sliding window.
// B. Convert the idea into an algorithm
// Don't write code yet. Read these instructions:
// 1. Create a variable to store the current window sum.
// 2. Add the first three elements.
// 3. Store that sum as the maximum sum.
// 4. Move the window one position right.
// 5. Subtract the element that left the window.
// 6. Add the new element that entered the window.
// 7. Update the maximum sum if the new sum is larger.
// 8. Repeat until there are no more windows.
// 9. Return the maximum sum.
// This is the algorithm. Code is simply the way we tell the computer to perform these steps.
// C. Convert the algorithm into JavaScript
// Notice how each code section matches the steps above.
// function maxSumSubarray(arr, k) {

//     // Step 1: Store the current window sum
//     let windowSum = 0;

//     // Step 2: Calculate the first window
//     for (let i = 0; i < k; i++) {
//         windowSum += arr[i];
//     }

//     // Step 3: Store the initial maximum
//     let maxSum = windowSum;

//     // Step 4: Move the window
//     for (let i = k; i < arr.length; i++) {

//         // Steps 5 and 6: Remove old, add new
//         windowSum = windowSum + arr[i] - arr[i - k];

//         // Step 7: Update the maximum
//         maxSum = Math.max(maxSum, windowSum);
//     }

//     // Step 9: Return the answer
//     return maxSum;
// }

// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));
// // 9


// The result is 9, from the window [5, 1, 3].
// Step 3: Learn to identify the algorithm yourself
// Whenever you read a LeetCode problem, look for clues.
// If the question asks for…	Consider learning…
// Maximum sum of k consecutive elements	Fixed-size sliding window
// Longest or shortest substring satisfying a condition	Variable-size sliding window
// Find a pair in a sorted array	Two pointers
// Find whether an element exists quickly	Set or HashMap
// Maximum subarray sum with any length	Kadane's algorithm
// Explore every element in a matrix	Matrix traversal
// These are clues, not strict rules. You still need to check the full problem conditions.