function fibonacci(count) {
    if (count == 1 || count == 2)
        return 1;
    return fibonacci(count - 1) + fibonacci(count - 2);
}
var count = 50;
var sumFibonacci = 0;
for (var i = 0; i <= count; i++) {
    console.log(fibonacci(i));
    sumFibonacci = sumFibonacci + fibonacci(i);
}
console.log("Sum = " + sumFibonacci);
