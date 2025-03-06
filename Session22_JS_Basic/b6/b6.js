let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let findNumber = +prompt("nhập số cần tìm");
let count =0;

for (let i = 0; i < numbers.length; i++) {
    if(findNumber === Number(numbers[i])){
        count++
    }
}

if(count !=0 ){
    console.log(`số ${findNumber} xuất hiện ${count} lần trong mảng`);
}else{
    console.log(`số ${findNumber} không tồn tại trong mảng`)
}
