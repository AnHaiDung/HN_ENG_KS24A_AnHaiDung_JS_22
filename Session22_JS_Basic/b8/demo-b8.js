
// // Khai báo mảng
// let numbers = [2,5,7,4,1,8,6,2,5,7];
// // Phân tách thành 2 mảng uniqueNumber, counts;
// let uniqueNumber = [];
// let counts = [];
// for (let i = 0; i < numbers.length; i++) {
//     let index = uniqueNumber.indexOf(numbers[i]);
//     if( index=== -1){
//         //Không tìm thấy
//         uniqueNumber.push(numbers[i]);
//         counts.push(1);
//     }else{
//         counts[index]++;
//     }
// }
// console.log(uniqueNumber);
// console.log(counts);
// // đi tìm minValue và maxCount
// let minValue = Number.MAX_VALUE;
// let maxCount = 0;
// for(let i=0; i< uniqueNumber.length; i++){
//     if(maxCount < counts[i]){
//         maxCount = counts[i];
//         minValue = uniqueNumber[i];
//     }else if(maxCount === counts[i] && minValue > uniqueNumber){
//         minValue = uniqueNumber[i];
//     }
// }
// // In ra minValue
// console.log(minValue);
// //
// let numbers =[2,5,7,4,1,8,6,2,5,7];
// let count = 0;
// let max_count = 0;
// let temp = 0;
// for (let i = 0; i < numbers.length; i++) {
//     count = 0;
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[i] === numbers[j]) {
//             count++;
//         }
//     }
//     if (max_count < count) {
//         max_count = count;
//         temp = numbers[i]
//     }
// }
// console.log(temp);
