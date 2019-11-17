// https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(present => present).length;
}
