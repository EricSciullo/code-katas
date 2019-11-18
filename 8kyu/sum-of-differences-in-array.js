// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function sumOfDifferences(arr) {   
    if (arr.length <= 1) {
        return 0;
    }

    arr.sort((a, b) => b - a);
    
    let accumulator = 0;
    for (let i = 0; i < arr.length; i++) {
        if(i + 1 !== arr.length) {
            accumulator += arr[i] - arr[i + 1];
        }
    }

    return accumulator;
}
