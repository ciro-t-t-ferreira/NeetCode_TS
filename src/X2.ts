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
let inputs2: Array<Array<string>> = [
    ['anagram', 'naragam'],
    ['rat', 'car']
];

let answerKey2: Array<boolean> = [true, false];

for (let i: number = 0; i < answerKey2.length; i++){
    console.log(isAnagram(inputs2[i][0], inputs2[i][1]) == answerKey2[i]);
}

function isAnagram(s: string, t: string): boolean {
    let word: Array<string> = Array.from(s);
    let anagram : Array<string> = Array.from(t);

//since I cannot easily compare the content of the arrays I turn them back to words using join

    let sortedWord: string = word.sort().join('');
    let sortedAnagram: string = anagram.sort().join('');
    
    let isAnagram: boolean = sortedWord == sortedAnagram;

    return isAnagram;   

};