let x: number = 1;
let y: number = 0;
let z: number;
let sum: number = 0;

for (let i = 0; i <= 50; i++) {
    z = x + y;
    x = y;
    y = z;
    console.log(z);
    sum = sum + z;
}
console.log("Sum = " + sum);



