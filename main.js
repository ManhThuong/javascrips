/* vòng lặp while
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
*/

/* ví dụ về tìm số nguyên từ 1-99 (số nguyên là số chia hết cho 1)
let n = prompt(`Nhập số cần kiểm tra (1-99)`);
while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
  n = Number(prompt(`Không hợp lệ, nhập lại số n (1-99)`));
}
alert("Số bạn nhập " + n);*/

/* hàm do while: mã lệnh được thực hiện ít nhất 1 lần
cú pháp: do {
mã lệnh thực hiện ít nhất 1 lần
vòng lặp kiểm tra điều kiện
}while (điều kiện)*/

/*let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);*/

/* Vòng lặp vô hạn while(true)
let n = 1;
while (true) {
  alert(n);
  n++;
  if (n === 5) {
    break;
  }
}
  */

/*Vòng lặp for
for(khởi tạo; điều kiện;bước lặp){
}
------VD-------
for (let i = 1; i < 10; i++) {
  console.log(i);
}
---------------  
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
---------
 
let tong = 0;
for (i = 0; i < 30; i++) {
  tong += i;
}
console.log(`tổng là ` + tong);
*/

// let a = 3.1;
// let b = Number.isInteger(a);
// if (b) {
//   console.log(`a là số nguyên`, a);
// } else {
//   console.log(`a không phải số nguyên`, a);
// }

// =========== Giải bài tập js 15 - Tính n! dùng vòng lặp while và for=============
// let a = Number(prompt(`Nhập vào số nguyên`));
// while (!Number.isInteger(a) || a < 0) {
//   a = Number(prompt(`Mời bạn nhập lại`));
// }
// console.log(a);

// // vòng lặp for
// // let gt = 1;
// // for (let i = 1; i <= a; i++) {
// //   gt = gt * i;
// // }
// // console.log(gt);
// let i = 1;
// let gt = 1;
// while (i <= a) {
//   gt = gt * i;
//   i++;
// }
// console.log(gt);

// =========== Giải bài tập js 16 - Tính n! dùng vòng lặp while và for=============
