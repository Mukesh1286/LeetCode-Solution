// LeetCode 3: Longest Substring Without Repeating Characters
// Topic: Sliding Window + Set
// Difficulty: Medium
// Goal: Find the length of the longest substring that contains no repeated characters.
// 1. Understand the problem
// Example:
// Input: "abcabcbb"
// Output: 3


// Why is the answer 3?
// The longest substring without repeating characters is "abc".
// Example walkthrough
// a

// b

// c

// a

// b

// c

// b

// b


// "abc" has three unique characters: a, b, and c. When a appears again, the current window must move forward.

// Remember: A substring contains consecutive characters. You cannot skip characters.
// 2. JavaScript solution
// We use two pointers, left and right, to create a sliding window. A Set stores the characters currently inside the window.

function lengthOfLongestSubstring(s) {
    // Store unique characters in the current window
    let charSet = new Set();

    // Left pointer marks the start of the window
    let left = 0;

    // Store the maximum substring length
    let maxLength = 0;

    // Right pointer moves through the string
    for (let right = 0; right < s.length; right++) {
        // If the character already exists, shrink the window
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        // Add the current character to the window
        charSet.add(s[right]);

        // Calculate the current window length
        let windowLength = right - left + 1;

        // Update the maximum length
        maxLength = Math.max(maxLength, windowLength);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3