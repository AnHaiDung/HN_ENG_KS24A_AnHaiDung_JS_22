let choice;
const prices = [];
do {
    choice= +prompt("mời bạn nhập: 1 - Nhập vào mảng, 2 - Hiển thị mảng, 3 - Thêm phần tử ,4 - Sửa phần thử, 5 - Xóa phần tử, 6 - Thoát"); 
    switch (choice) {
        case 1:
            let element = +prompt("nhập só phần tử cho mảng");
            for (let i = 0; i < element; i++) {
               prices[i] = prompt(`nhập phần tử thứ ${i}`);
            }
            break;
        case 2:
            console.log("Danh sách mảng: ",prices);
            alert("In thành công");
            break;
        case 3:
            let pricesIput = +prompt("mời bạn thêm phần tử cho mảng: ");
            prices.push(pricesIput);
            alert("Thêm phần tử thành công");
            break;
        case 4:
            const indexEdit = +prompt("Mời bạn nhập vị trí");
            const valueEdit = +prompt("Nhập phần tử mới: ");
            if(indexEdit < prices.length){
                prices[indexEdit] = valueEdit;
                alert("Cập nhật thành công");
            }else{
                alert("Vị trí không hợp lệ");
            }
            break;
        case 5:
            const indexDelete = +prompt("Nhập vị trí cần xóa: ");

            if(indexDelete < prices.length){
                prices.splice(indexDelete, 1);
                alert("Xóa thành công");
            }else{
                alert("Vị trí không hợp lệ");
            }
            break;
        case 6:
            console.log("kết thức chuong trình");
            break;
        default:
            console.log("không thuộc chứng năng");
            break;
    }
} while (choice !== 6);