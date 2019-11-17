// https://www.codewars.com/kata/mumbling/train/javascript

function accum(s) {
    let count = 0;
    let mumble = '';

    s.split('').forEach(letter => {
        mumble = `${mumble}${letter.toUpperCase()}${letter.toLowerCase().repeat(count)}-`;
        count++;
    });

    // remove ending hyphen
    mumble = mumble.slice(0, -1);
    return mumble;
}
