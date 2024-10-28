function fibonacci(n) {
    if (n <= 0) return 0; // Handle edge case
    if (n === 1) return 1; // The first Fibonacci number is 1
    if (n === 2) return 1; // The second Fibonacci number is also 1

    let a = 1; // F(1)
    let b = 1; // F(2)
    let result;

    for (let i = 3; i <= n; i++) {
        result = a + b; // F(n) = F(n-1) + F(n-2)
        a = b; // Move to the next Fibonacci number
        b = result; // Update the last Fibonacci number
    }

    return result; // Return the nth Fibonacci number
}

// Example usage:
console.log(fibonacci(43)); 
console.log(fibonacci(101)); 
console.log(fibonacci(227)); 
