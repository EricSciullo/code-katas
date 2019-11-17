// https://www.codewars.com/kata/sum-of-positive/train/javascript

function positiveSum(arr) {
    return arr.reduce((accumulator, currentValue) => {
        return currentValue > 0 ? accumulator + currentValue : accumulator + 0;
    }, 0);
}
