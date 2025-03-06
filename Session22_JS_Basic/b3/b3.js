let myNumber = prompt("nhập chuỗi số bất kì");

if (isNaN(Number(myNumber))) {
    console.log("Không hợp lệ");
} else {
    let reversedNumber = myNumber.split("").reverse().join("");
    console.log(reversedNumber);
}