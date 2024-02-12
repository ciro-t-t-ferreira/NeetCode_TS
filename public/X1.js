"use strict";
/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/
let examples = [
    [1, 2, 3, 1],
    [1, 2, 3, 4],
    [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
];
let answerKey = [true, false, true];
examples.forEach(function (example) {
    console.log(containsDuplicate(example));
    //console.log(checksAnswer(i, containsDuplicate(example)));    
});
function checksAnswer(i, answer) {
    return answerKey[i] == answer;
}
function containsDuplicate(nums) {
    let isDuplicate = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                isDuplicate = nums[i] == nums[j];
                if (isDuplicate) {
                    break;
                }
            }
        }
    }
    ;
    return isDuplicate;
}
;
