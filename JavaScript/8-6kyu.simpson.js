function simpson(n) {
    const a = 0;
    const b = Math.PI;
    const h = (b - a) / n;

    let sum = f(a) + f(b);

    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        sum += i % 2 === 0 ? 2 * f(x) : 4 * f(x);
    }

    return (h / 3) * sum;
}

// Function f(x)
function f(x) {
    return (3 / 2) * Math.sin(x) ** 3;
}

// Sample Test
console.log(simpson(290)); // Output: 1.9999999986
console.log(simpson(72));  // Output: 1.9999996367
console.log(simpson(252)); // Output: 1.9999999975
console.log(simpson(40));  // Output: 1.9999961668