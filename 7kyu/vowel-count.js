// https://www.codewars.com/kata/vowel-count/train/javascript

function getCount(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    str.split('').forEach(letter => vowels.includes(letter) && count++);

    return count;
}
