var numbers = [];

for (var i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 10));
}


var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}

document.writeln("ناتج جمع الأعداد الزوجية: " + sum);
console.log("ناتج جمع الأعداد الزوجية: " + sum);
document.writeln("<br>");
var lessThanFiveSum = 0;
for (var i = 0; i < numbers.length; i++) {
  if (i < 5) {
    lessThanFiveSum += numbers[i];
  }
}

document.writeln("ناتج جمع الأعداد التي دليلها أصغر من 5: " + lessThanFiveSum);
console.log("ناتج جمع الأعداد التي دليلها أصغر من 5: " + lessThanFiveSum);
document.writeln("<br>");

let x = {
  name: "zhraa",
  number: "123456789",
  age: 25,
  email: "zhraa@example.com"
};

document.writeln(x);
document.writeln("<br>");
console.log(x);

var user = {
  name: "zhraa ali",
  number: 123456789,
  age: 25,
  email: "zhraa ali@example.com"
};

// طباعة العناصر الموجودة ضمن الغرض
console.log("اسم المستخدم: " + user.name);
console.log("رقم المستخدم: " + user.number);
console.log("عمر المستخدم: " + user.age);
console.log("بريد المستخدم الإلكتروني: " + user.email);

document.writeln("اسم المستخدم: " + user.name );
document.writeln("<br>");

document.writeln("رقم المستخدم: " + user.number);
document.writeln("<br>");
document.writeln("عمر المستخدم: " + user.age);
document.writeln("<br>");
document.writeln("بريد المستخدم الإلكتروني: " + user.email);