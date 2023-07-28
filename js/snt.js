let number = 49;
let flag = false; // gia su la snt
if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            //i la uoc cua number
            flag = true;
            break;
        }
    }
} else {
    flag = true;
}

if (flag) {
    console.log("khong la so nguyen to");
} else {
    console.log("la so nguyen to");
}