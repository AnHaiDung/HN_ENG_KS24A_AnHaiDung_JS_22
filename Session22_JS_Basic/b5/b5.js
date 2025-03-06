const myNumber = [1,4,7,8,3];
let totalEven= 0;
let totalOdd= 0;

for (let i = 0; i < myNumber.length; i++) {
    if(myNumber[i] % 2 === 0 ){
        totalEven += Number(myNumber[i]);
    }else{
        totalOdd += Number(myNumber[i]);
    }
}

console.log("Tổng các số chẵn: ",totalEven);
console.log("Tổng các số lẻ: ",totalOdd);
