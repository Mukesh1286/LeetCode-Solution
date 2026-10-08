// 🔀 Merge Sorted Array — LeetCode #88

// This is another important Two Pointer problem.

// Problem

// You have two sorted arrays:

// nums1 = [1, 2, 3, 0, 0, 0]
// nums2 = [2, 5, 6]

// Here:

// m = 3  → valid elements in nums1
// n = 3  → elements in nums2

// We need:

// [1, 2, 2, 3, 5, 6]

function merge(nums1, m, nums2, n) {

    
    let i = m - 1;

    let j = n - 1;    
    let k = m + n - 1;


    // Continue until nums2 has been completely copied
    while (j >= 0) {

        if (i >= 0 && nums1[i] > nums2[j]) {

            nums1[k] = nums1[i];

            i--;

        } else {

            nums1[k] = nums2[j];

            j--;
        }

        k--;
    }
}


// Example
let nums1 = [1, 2, 3, 0, 0, 0];

let nums2 = [2, 5, 6];

let m = 3;
let n = 3;


merge(nums1, m, nums2, n);

console.log(nums1);



// function merge(nums1, m, nums2, n) {

//     // i points to the last valid element of nums1
//     //
//     // nums1 = [1, 2, 3, 0, 0, 0]
//     //              ↑
//     //              i = 2
//     let i = m - 1;


//     // j points to the last element of nums2
//     //
//     // nums2 = [2, 5, 6]
//     //              ↑
//     //              j = 2
//     let j = n - 1;


//     // k points to the LAST position of nums1
//     //
//     // nums1 has total 6 positions
//     // k = 5
//     let k = m + n - 1;


//     // Continue until nums2 has been completely copied
//     while (j >= 0) {

//         // Compare the current elements
//         //
//         // If nums1 has a bigger element,
//         // put nums1 element at position k.
//         //
//         // Otherwise put nums2 element at position k.
//         if (i >= 0 && nums1[i] > nums2[j]) {

//             nums1[k] = nums1[i];

//             // Move nums1 pointer backward
//             i--;

//         } else {

//             nums1[k] = nums2[j];

//             // Move nums2 pointer backward
//             j--;
//         }


//         // Move the result position backward
//         k--;
//     }
// }


// // Example
// let nums1 = [1, 2, 3, 0, 0, 0];

// let nums2 = [2, 5, 6];

// let m = 3;
// let n = 3;


// merge(nums1, m, nums2, n);

// console.log(nums1);