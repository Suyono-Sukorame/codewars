function digPow(n, p) {
    const sum = String(n).split('').reduce((acc, digit, index) => acc + Math.pow(parseInt(digit), p + index), 0);
    const k = sum / n;

    return Number.isInteger(k) ? k : -1;
}

// Sample Test
console.log(digPow(89, 1));      // Output: 1
console.log(digPow(92, 1));      // Output: -1
console.log(digPow(695, 2));     // Output: 2
console.log(digPow(46288, 3));   // Output: 51