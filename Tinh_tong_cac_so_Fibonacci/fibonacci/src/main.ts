function fibonacci(count: number): number {
    if(count == 1 || count == 2) return 1;
    return fibonacci(count - 1) + fibonacci(count - 2);
}
let count: number = 50;
let sumFibonacci: number = 0;

for (let i = 0; i <= count; i++) {
    console.log(fibonacci(i));
    sumFibonacci = sumFibonacci + fibonacci(i);
}
console.log("Sum = " + sumFibonacci);



