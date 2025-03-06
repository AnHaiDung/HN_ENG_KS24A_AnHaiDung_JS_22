const numbers = [2,5,7,4,1,8,6,2,5,7];
let changeNumber =0;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length-i; j++) {
        if(numbers[j] > numbers[j+1]){
            changeNumber = numbers[j];
            numbers[j] = numbers[j+1] ;
            numbers[j+1] = changeNumber
        }
    }
}
console.log(numbers);
