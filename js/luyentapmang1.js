// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
// cách 1:
// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = prompt('Nhập phần tử thứ ' + (i + 1));
// }
// let count = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//         count++;
//     }
// }
// console.log(`so nguyen to lon hon or bang 10 la ${count} nguyen to`);

// cách 2:
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let value = parseInt(prompt(`Nhập vào số nguyên thứ ${i + 1} :`));
//     arr.push(value);
// }
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//         count++;
//     }
// }
// console.log(`Co ${count} so nguyen`);




// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau.
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
// let arr = [11, 22, 33, 44, 55, 66, 88, 77, 99, 100];
// let max = Math.max(11, 22, 33, 44, 55, 66, 88, 77, 99, 100);
// let index = arr.indexOf(max);
// console.log("Phần tử trong mang có giá trị lớn nhất là:" + index);




// Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
// let x = [2, 5, 8, 4, 9, 15];
// let max = x[0];
// let sum = 0;
// for (let i = 1; i < x.length; i++) {
//     if (x[i] > max) {
//         max = x[i]
//     }
//     sum = sum + x[i]
// } console.log(max + "la so lon nhat");
// console.log("TBC", sum / x.length);




// Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
// cách 1:
// let number = +prompt("Nhap vao so luong phan tu ban muon them:");
// let arr = [];
// for (let i = 0; i < number; i++) {
//     let element = +prompt(`Nhap vao gia tri cua phan tu thu ${i}`);
//     arr.push(element);
// }
// console.log(arr.reverse());

// cách 2:
// let arr = []; // tao mang de luu tru cac gia tri ng dung nhap vao la do nguyen
// let number = +prompt("nhap vao so luong phan tu ban muon them"); // quy dinh so phan tu, qd do dai cua mang
// //gia su number =5
// for (let i = 0; i < number; i++) {
//     let n = +prompt("nhap gia tri cho phan tu thu " + i); //lan 0 nhap n=4 , lan 1 nhap n=5
//     arr.push(n)
// }
// console.log(arr);  // in ra mang sau khi da them , lan i=1 in ra mang gom co 4-5
// console.log(arr.reverse()); //in ra mang dao nguoc.

// cách 3:
// let string = prompt("Nhap 1 day so cach nhau boi dau ',' ")
// let arr = string.split(",")
// console.log(arr.reverse());




// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.
// let number = +prompt('Nhập sô lượng bạn muốn kiểm  tra');
// let arr = [];
// for (let i = 0; i < number; i++) {
//     let element = +prompt('Nhập phàn tử bạn muốn kiểm tra')
//     arr.push(element);
// }
// let count = 0;
// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] < 0) {
//         count++
//     }
// }
// console.log(count);



// Bài 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không ?
// Nếu có thuộc mảng số nguyên thì
// in ra "Number X is in the array" còn lại in ra "Number X is not in the array".
// let arr = prompt("Nhập 10 số nguyên bất kỳ cách nhau bởi dấu ','");
// arr = arr.split(",");
// for (i = 0; i < arr.length; i++) {
//     arr[i] = +arr[i];
// }
// console.log(arr);
// let n = +prompt("Nhập vào số nguyên bạn muốn tìm");
// let flag = false;
// for (i = 0; i < arr.length; i++) {
//     if (n == arr[i]) {
//         console.log("Number X is in the array");
//         flag = true;
//     }
// }
// if (flag == false) {
//     console.log("Number X is not in the array");
// }




// Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//  Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không?
//  Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.
// Gợi ý: Việc xoá ở đây tức là dịch phần tử ở bên phải số đã nhập sang vị trí của số đó,
//  và gán 0 cho phần tử cuối cùng của mảng.

// cach 1:
// const a = 10;
// let arr = [];
// let arrDelete = [];
// for (let i = 0; i < a; i++) {
//     let n = +prompt(`Nhap phan tu thu ${i + 1} cua mang 10 phan tu`);
//     arr.push(n);
// }
// let num = +prompt("Nhap 1 so nguyen de kiem tra");
// let check = false;// giả sử không tồn tại
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//         // có tồn tại
//         check = true;
//     } else {
//         arrDelete.push(arr[i]);
//     }
// }
// if (check) {
//     // thực hiện xóa
//     arr = arrDelete;
// } else {
//     // thông báo không tồn tại
//     alert(`Giá trị ${num} không tồn tại trong mảng`)
// }
// console.log(arr);  // hiên thị mảng

// cach 2:
// console.log(arr);
// let num = +prompt("Nhap 1 so nguyen de kiem tra");
// let index = arr.indexOf(num);
// let arr1 = [];
// if (index != -1) {
//   // console.log("nam trong mang");
//   for (j = 0; j < arr.length; j++) {
//     if (j != index) {
//       arr1.push(arr[j]);
//     }
//   }
//   arr = arr1;
// } else {
//   console.log("khong nam trong mang");
// }
// console.log(arr);





// Bài 8: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
// cách 1:
// let arr = [];
// for (i = 0; i < 10; i++) {
//     let string = +prompt("hay nhap so");
//     arr.push(string);
// }
// for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let a = arr[i]
//             arr[i] = arr[j]
//             arr[j] = a
//         }
//     }
// }
// console.log(arr);

// cách 2:
// let arr = [];
// for (i = 0; i < 5; i++) {
//     let chuoi = +prompt(`Hãy nhập số nguyên theo thứ tự ${i + 1} đến 5`);
//     arr.push(chuoi);
// }
// for (i = 0; i < arr.length - 1; i++) {
//     for (j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let a = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = a
//         }
//     }
// }
// console.log(arr);





// Bài 9: Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử,
// gọi là mảng a và b.Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.Hiển thị mảng c.
// let a = [];
// let b = [];
// for (let i = 0; i < 10; i++) {
//     let number = Number(prompt(`nhap so thu ${i + 1} cua mang a`));
//     a.push(number);
// }
// for (let i = 0; i < 10; i++) {
//     let number = Number(prompt(`nhap so thu ${i + 1} cua mang b`));
//     b.push(number);
// }
// let c = a.concat(b);
// console.log(c);