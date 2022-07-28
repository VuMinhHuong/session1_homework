// alert("Hello world");


// 1. Khai báo biến (khởi tạo)
// Từ khóa + tên biến = giá trị khởi tạo
// Từ khóa - var/let/const
// Ví dụ:
// let name = "Peter";
// var age = 18;
// const gender = "Male";

// 2. Phép gán
// Ví dụ: Trong tương lai không xa nào đó, mình muốn tuổi thằng
// Peter này tăng lên 20;
// age = 20;

//3. Câu lệnh in ra màn hình console (output)
// console.log("Hello world");
// console.log("Hello world 2");

// 4. Câu lệnh nhận input từ user
// prompt("Tên mày là gì?");
// let username = prompt("Tên mày là gì?");
 //Sau đấy thì mình muốn làm gì với user name thì làm
 // In tên người dùng ra màn hình console
// console.log(username);

//Ex1:
//Cho nguoi dung nhap vao so a
//Cho nguoi dung nhap vao so b
//Tinh tong a+b
//Sau do in ra man hinh console tong do
// let a = Number(prompt("Nhập vào số a:"));
// let b = Number(prompt("Nhập vào số b:"));
// let a = prompt("Nhập vào số a:");
// let b = prompt("Nhập vào số b:");
// let tong = Number(a)+Number(b);
// console.log(tong);

//Chuyển đồi kiểu dữ liệu --> Type conversion
// String (chuổi) --> Number (Số)

//How to + câu hỏi
//How to convert string to number in Javascript
// Nguồn:
// Stackoverflow, w3school, mdn

//5. Kiểu dữ liệu (Data types)
//Primitive (Dữ liệu nguyên thủy)
// String (Chuỗi), Number (Số), Booleam (tru/false), null, undefined ...

//Object (Đối tượng)
// Array (mảng), Object (đối tượng), Function (Hàm)

// 5.1 String
// Khai báo biến có kiểu dữ liệu là string
// quote
// let name = "Peter";
// let job = 'Spider man';
//backticks
// let company =`Avenger`;
//Nối chuỗi (String concatenation) --> +
// console.log(name + " " + job);

//Peter 's job is Spider man and he works at the Avenger
// console.log(name + " 's job is " + job + " and he works at the " + company);

//Ex2:
//Cho người dùng nhập vào name:
//In ra màn hình console câu "Hello" + name

// let name1 = prompt("Nhap ten cua ban");
// console.log("Hello "+name1);

//SEACH: Cách xuống dòng trong string (linebreak in string Javasctrip)
// console.log("Trưa nay nắng! Mặt trời gay gắt!\n");
// console.log("Bà lão bước chân khập khiễng đi\r");
// console.log("Cặp vé số sao nằng nặng quá!\n");
// console.log("Bao giờ được nghỉ tuổi về già?\r");

// console.log("Trưa nay nắng! Mặt trời gay gắt!\nBà lão bước chân khập khiễng đi\nCặp vé số sao nằng nặng quá!\nBao giờ được nghỉ tuổi về già?");

// console.log(`Trưa nay nắng! Mặt trời gay gắt!
// Bà lão bước chân khập khiễng đi
// Cặp vé số sao nằng nặng quá!
// Bao giờ được nghỉ tuổi về già?`);

//backticks - template string
// let name = "Peter";
// let age = 18;
// let school = `Rikkei Academy`;
// "Perer is 18 and Peter goes to school at Rikkei Academy";
// console.log(`${name} is ${age} and ${name} goes to school at ${school}`);

// 5.2 Number
// let number = 10;
// let number2 = 10.1;
// console.log(number);
// console.log(number2);
// console.log(10.1);
// console.log("10");

//Algorimic Operators (Toán tử)
// console.log(10+20);
// console.log(10-20);
// console.log(10*20);
// console.log(10/20);
// console.log(10%20);
// console.log(10**20);
// +, -, *, /, %(chia lấy dư), **(mũ)
// Math object (xử lý các phép tính toán trong toán học)
// Math.sqrt() (căn bậc 2) ...
