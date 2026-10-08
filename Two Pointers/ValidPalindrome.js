// 🔤 Valid Palindrome — LeetCode #125

// Let's learn this with the same easy-comment style.

// Problem

// A string is a palindrome if it reads the same forward and backward.

// Example:

// "madam" → true

// "racecar" → true

// "hello" → false

// But LeetCode says:

// Ignore spaces, punctuation, and uppercase/lowercase differences.

// So:

// "A man, a plan, a canal: Panama"

// is:

// "amanaplanacanalpanama"

// Therefore:

// true


// function isPalindrome(s) {

//     s = s.toLowerCase();

//     s = s.replace(/[^a-z0-9]/g, "");
   
//     let left = 0;
//     let right = s.length - 1;


//     while (left < right) {
       
//         if (s[left] !== s[right]) {
//             return false;
//         }

//         left++;
//         right--;
//     }


//     return true;
// }


// // Example
// console.log(
//     isPalindrome("A man, a plan, a canal: Panama")
// );




function isPalindrome(s) {

    // Convert the string to lowercase
    // so A and a are treated as the same.
    s = s.toLowerCase();


    // Remove everything except:
    // a-z and 0-9
    //
    // Example:
    // "A man, a plan!"
    //
    // becomes:
    // "amanaplan"
    s = s.replace(/[^a-z0-9]/g, "");


    // Two pointers
    //
    // left  → starts from beginning
    // right → starts from end
    let left = 0;
    let right = s.length - 1;


    // Compare characters from both sides
    while (left < right) {

        // If left character and right character
        // are different, it is NOT a palindrome.
        if (s[left] !== s[right]) {
            return false;
        }


        // Move left pointer forward
        left++;


        // Move right pointer backward
        right--;
    }


    // If all characters matched,
    // it is a palindrome.
    return true;
}


// Example
console.log(
    isPalindrome("A man, a plan, a canal: Panama")
);