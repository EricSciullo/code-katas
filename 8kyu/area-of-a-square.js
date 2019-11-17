https://www.codewars.com/kata/area-of-a-square/train/javascript

function squareArea(A){
    const radius = 2 * A / Math.PI;
    const area = radius * radius;
    return Math.round(area * 100) / 100;
}
