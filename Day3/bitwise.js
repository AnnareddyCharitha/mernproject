let a = 5;   // 0101
let b = 3;   // 0011
console.log("a =", a, "b =", b);
console.log("----------------------");
console.log("a & b  =", a & b);     
console.log("a | b  =", a | b);     
console.log("a ^ b  =", a ^ b);     
console.log("~a     =", ~a);        
console.log("a << 1 =", a << 1);  
console.log("a >> 1 =", a >> 1);   
console.log("-a >>> 1 =", (-a) >>> 1);  
console.log("----------------------");
if (a & 1)
    console.log(a, "is Odd");
else
    console.log(a, "is Even");
let x = 10, y = 20;
console.log("Before swap: x =", x, "y =", y);

x = x ^ y;
y = x ^ y;
x = x ^ y;

console.log("After swap: x =", x, "y =", y);









