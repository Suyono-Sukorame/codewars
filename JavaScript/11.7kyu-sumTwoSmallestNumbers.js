function sumTwoSmallestNumbers(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers[0] + sortedNumbers[1];
}

// Sample Test
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));        // Output: 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));          // Output: 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));          // Output: 10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));          // Output: 24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));          // Output: 16