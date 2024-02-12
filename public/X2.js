"use strict";
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/
let inputs2 = [
    ['anagram', 'naragam'],
    ['rat', 'car']
];
let answerKey2 = [true, false];
for (let i = 0; i < answerKey2.length; i++) {
    console.log(isAnagram(inputs2[i][0], inputs2[i][1]) == answerKey2[i]);
}
function isAnagram(s, t) {
    let word = Array.from(s);
    let anagram = Array.from(t);
    //since I cannot easily compare the content of the arrays I turn them back to words using join
    let sortedWord = word.sort().join('');
    let sortedAnagram = anagram.sort().join('');
    let isAnagram = sortedWord == sortedAnagram;
    return isAnagram;
}
;
