// Bài 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn, in ra các phần tử trong mảng.
// let arr = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
// //vong lap dem hang.
// for (i = 0; i < arr.length; i++) {
//     console.log(`row ${i}`);   // or ${i + 1}
//     //vong lap dem cac cot trong hang.
//     for (j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }



// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ, nếu một mảng chứa các ký tự['c', 's', 'c', '2', '6', '1']sau khi thực hiện đảo ngược sẽ là "162csc".
// let n = ['c', 's', 'c', '2', '6', '1'];
// cách 1:
// console.log(n.reverse().join(""));

// // cách 2:
// let ketqua = ""
// for (let i = n.length - 1; i >= 0; i--) {  // trong mang danh goi theo vi tri tu 0-9, nen phai tru di 1.
//     ketqua += n[i]
// }
// console.log(ketqua);



// Bài 3: Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.
// cach 1:
// let kytu = ["n", "3", "i", "8", "9"];
// for (i = 0; i < kytu.length; i++) {
//     if (parseInt(kytu[i]) === 0) {
//         console.log(kytu[i]);
//     } else if (!parseInt(kytu[i])) {
//         continue;
//     } else {
//         console.log(kytu[i]);
//     }
// }

// cach 2:
// let kytu = ["n", "3", "i", "8", "9"];
// for (let i = 0; i < kytu.length; i++) {
//     if (kytu[i] < 0 || kytu[i] >= 0) {
//         console.log(kytu[i]);
//     }
// }



// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi.
// let chuoi = prompt("hay nhap mot chuoi");
// let count = 0   // dem so luong từ
// chuoi = chuoi.split(" ")
// for (let i = 0; i < chuoi.length; i++) {
//     if (chuoi[i] != "") {
//         count++
//     }
// }
// console.log(count);



// Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
// cach 1:
// let chuoi1 = prompt("hay nhap chuoi 1")
// let chuoi2 = prompt("hay nhap chuoi 1")
// if (chuoi1 === chuoi2) {
//     console.log("hai chuoi giong nhau");
// } else {
//     console.log("hai chuoi khac nhau");
// }

// cach 2:
// let chuoi1 = prompt("hay nhap chuoi 1")
// let chuoi2 = prompt("hay nhap chuoi 1")
// if (chuoi1.length !== chuoi2.length) {   // neu do dai khac nhau, thi chac chan hai chuoi khong giong nhau
//     console.log("hai chuoi khong giong nhau");
// } else {
//     let check = true  // mac dinh chung dang giong nhau, di kiem tra tung ki tu cua chung
//     for (let i = 0; i < chuoi1.length; i++) {
//         if (chuoi1[i] !== chuoi2[i]) {
//             check = false
//             break;
//         }
//     }
//     let mess = check ? "giong nhau" : "khong giong nhau"  // toan tu 3 ngoi.
//     console.log(mess);
// }



// Bài 6: Viết chương trình nhập vào một mảng ký tự,
// tìm tất cả các ký tự trong mảng là(-) và thay thế các ký tự này bởi ký tự(_)
// let arr = ["a", "b", "c", "-", "c", "-", "d"];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "-") {
//         arr[i] = "_"
//     }
// }
// console.log(arr.join(""));

