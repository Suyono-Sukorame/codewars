function getAverage(marks) {
    // TODO: calculate the downward rounded average of the marks array
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    const average = Math.floor(sum / marks.length);
    return average;
}
console.log(getAverage([1, 2, 3, 4, 5]));