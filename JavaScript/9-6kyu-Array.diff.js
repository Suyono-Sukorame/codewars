function arrayDiff(a, b) {
    return a.filter(value => !b.includes(value));
}

// Sample Test
console.log(arrayDiff([1, 2], [1]));          // Output: [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));    // Output: [1,3]