let numbers = [7,5,2,4,1,8,6,2,5,7];
let count =0;
let maxCount =0;
let minValue =0;
 
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if(numbers[i] === numbers[j]){
            count++;
        }
    }
    if (maxCount < count || minValue > numbers[i]) {
        maxCount = count;
        minValue = numbers[i];
    }
    count = 0;
}
console.log(`${minValue}`);
