var x = 1;
var y = 0;
var z;
var sum = 0;
for (var i = 0; i <= 50; i++) {
    z = x + y;
    x = y;
    y = z;
    console.log(z);
    sum = sum + z;
}
console.log("Sum = " + sum);
