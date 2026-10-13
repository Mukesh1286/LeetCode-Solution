// LeetCode 567: Permutation in String
// Topic: Sliding Window + Character Frequency
// Difficulty: Medium
// 1. Understand the problem
// You are given two strings, s1 and s2. Return true if s2 contains any permutation of s1; otherwise, return false.
// A permutation means the same characters in any order.
// Example:
// Input:  s1 = "ab"
//         s2 = "eidbaooo"

// Output: true


// Why? Because s2 contains "ba", which is a permutation of "ab".
// Visual example
// s1 =
// a

// b



// Check windows of length 2 in s2:
// e

// i

// d

// b

// a

// o

// o

// o


// The window "ba" matches the characters in "ab", so the answer is true.

// Important: The order does not matter, but the character counts must match exactly.
// 2. JavaScript solution
// We will use a fixed-size sliding window because every permutation of s1 must have exactly s1.length characters.

function checkInclusion(s1, s2) {
    // If s1 is longer, s2 cannot contain its permutation
    if (s1.length > s2.length) {
        return false;
    }

    // Store character frequencies for a-z
    let s1Count = new Array(26).fill(0);
    let windowCount = new Array(26).fill(0);

    // Count characters in s1 and the first window of s2
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        windowCount[s2.charCodeAt(i) - 97]++;
    }

    // Check whether both frequency arrays match
    function matches() {
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] !== windowCount[i]) {
                return false;
            }
        }
        return true;
    }

    // Check the first window
    if (matches()) {
        return true;
    }

    // Slide the fixed-size window across s2
    for (let right = s1.length; right < s2.length; right++) {
        // Remove the character leaving the window
        let left = right - s1.length;
        windowCount[s2.charCodeAt(left) - 97]--;

        // Add the new character entering the window
        windowCount[s2.charCodeAt(right) - 97]++;

        // If frequencies match, a permutation exists
        if (matches()) {
            return true;
        }
    }

    return false;
}

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false