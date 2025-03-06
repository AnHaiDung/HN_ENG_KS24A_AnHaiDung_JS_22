let numbers = [2,5,7,4,1,8,6];
let inputNumber = +prompt(" nhập số bất kì");
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if(inputNumber === numbers[i]){
        count++;
    }
}

if(count !== 0){
    console.log("Bingo");
}else{
    console.log("chúc bạn may mắn lần sau");
}