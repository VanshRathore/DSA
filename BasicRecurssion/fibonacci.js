const n = 5;
if (n == 0) {
    return 0;
}
const fib = [n+1];
fib[0] = 0;
fib[1] = 1;
for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);
