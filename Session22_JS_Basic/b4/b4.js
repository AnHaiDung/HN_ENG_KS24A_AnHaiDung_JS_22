let myNumber = prompt("nhập chuỗi số bất kì");

if (isNaN(Number(myNumber))) {
    console.log("Không hợp lệ");
} else {
    let arrayNumber = myNumber.split("");
    let maxNumber;
    for (let i = 0; i < arrayNumber.length; i++) {
        maxNumber = Number(arrayNumber[i]);
        if (arrayNumber[i] > maxNumber){
            maxNumber = arrayNumber[i];
        } 
    }
    console.log(`${maxNumber} là số lớn nhất trong dãy số`);
}