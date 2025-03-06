let numbers = [2,1,7,1,1,8,6,2,2,7];
let arrNumber = [];

for (let i = 0; i < numbers.length; i++) {
    let index = arrNumber.indexOf(numbers[i]);
    if (index === -1) {
        arrNumber.push(numbers[i]);
    }
}
for (let i = 0; i < arrNumber.length; i++) {
    for (let j = 0; j < arrNumber.length-i; j++) {
        if(arrNumber[j] > arrNumber[j+1]){
            changeNumber = arrNumber[j];
            arrNumber[j] = arrNumber[j+1] ;
            arrNumber[j+1] = changeNumber
        }
    }
}
console.log(arrNumber);
