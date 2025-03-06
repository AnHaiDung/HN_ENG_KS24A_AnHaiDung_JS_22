const number = [];
let inputNumberpush = +prompt("nhập số bất kì")
number.push(inputNumberpush);
console.log(number);
let inputNumberunshift = +prompt("nhập số bất kì")
number.push(inputNumberunshift);
console.log(number);
let inputNumbersplice = prompt("nhập bất kì")
number.splice(1,0,`${inputNumbersplice}`);
console.log(number);
