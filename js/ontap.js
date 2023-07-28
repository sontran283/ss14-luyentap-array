

// let n = 25;

// let check = true;

// for (let i = 2; i <= n / 2; i++) {
//     if (n % i == 0) {
//         console.log("ko phai ng to");
//         check = false;
//         break;
//     }
// }

// if (check == true) {
//     console.log("la ng to");
// }

// let N = 2;
// let count = 0

// while (count < 20) {
//     let check = true;
//     for (let i = 2; i <= N / 2; i++) {
//         if (N % i == 0) {
//             check = false;
//             break;
//         }
//     }
//     if (check == true) {
//         console.log(N);
//         count++; // da tim dc them 1 so ng to moi
//     }
//     N++;
// }

// BÀI 1: Viết chương trình hiển thị bình phương của số nguyên từ 2 🡪 N
// nhưng hiển thị các kết quả chia hết cho 2..N nhập từ người dùng.Nếu N < 2 hoặc N > 100, thông báo người dùng nhập lại.

// b1 cho nhap
// b2 check: dung thi lam tiep, sai thi nhap lai
// b3 lam tiep: hien thi binh phuong cua nhung so chia het ho 2
// let N
// do {
//     N = prompt("Nhap so N")
// } while (N < 2 || N > 100);

// for (let i = 2; i <= N; i++) {
//     if ((i * i) % 2 !== 0) {
//         console.log(`${i} ^ 2 = ${i * i}`)
//     }
// }

// BÀI 2: Viết chương trình hiển thị bình phương của số chẵn từ 2 🡪 N.
// N nhập từ người dùng.Nếu N < 2 hoặc N > 100, thông báo người dùng nhập lại.

// let N
// do {
//     N = prompt("Nhap so N")
// } while (N < 2 || N > 100);

// for (let i = 2; i <= N; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} ^ 2 = ${i * i}`)
//     }
// }

// BÀI 3: Viết chương trình hiển thị thay đổi 10 màu sắc ngẫu nhiên khi hiển thị console.log()
// b1: lam sao in ra dc mau khac mau binh thuong
// b2: random cho cai mau do khac di moi lan in

// for (let i = 1; i <= 10; i++) {
//     let color = 100 + Math.floor(Math.random() * 899)
//     console.log("%c nguyen van a", `color: #${color}`)
// }

// BÀI 6: Viết chương trình kiểm tra số N có phải là số hoàn hảo hay không ? N nhập từ browser
// let N = 7;
// let sum = 0;
// for (let i = 1; i < N; i++) {
//     if (N % i == 0) {
//         sum += i
//     }
// }

// if (sum == N) {
//     console.log("La so hoan hao");
// } else {
//     console.log("Ko hoan hao");
// }

// BÀI 7: In ra giai thừa của số nguyên dương N ? N nhập từ browser
// let N = 4;
// let tich = 1;
// for (let i = 1; i <= N; i++) {
//     tich *= i;
// }
// console.log(tich);

// BÀI 8: In ra dãy 20 số Fibonaci đầu tiên

// let a = 0;
// let b = 1;
// let x = 0;
// for (let i = 1; i <= 20; i++) {
//     x = a + b;
//     console.log(x);
//     a = b;
//     b = x
// }

let mang = [11, 23, 45, 8, 7]

let max = mang[0];
for (let i = 0; i < mang.length; i++) {
    if (mang[i] > max) {
        max = mang[i]
    }
}

for (let i = 0; i <= mang.length - 2; i++) {
    for (let j = i + 1; j <= mang.length - 1; j++) {
        if (mang[i] < mang[j]) {
            let temp = mang[i]
            mang[i] = mang[j]
            mang[j] = temp
        }
    }
}

console.log(max);
console.log(mang);