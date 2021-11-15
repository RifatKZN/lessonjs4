'use  strict';

let number;
let obj = { единицы: 0, десятки: 0, сотни: 0 };

number = prompt("Введите число от 0 до 999!", 0);
if (number > 999) {
    obj = {};
    console.log("Число превышает 999", obj);
}
else if (number >= 0 && number.length > 0) {
    switch (number.length) {
        case 3:
            obj.сотни = parseInt(number[number.length - 3]);
        case 2:
            obj.десятки = parseInt(number[number.length - 2]);
        case 1:
            obj.единицы = parseInt(number[number.length - 1]);
            break;
        default:
            obj.единицы = parseInt(number[2]);
            obj.десятки = parseInt(number[1]);
            obj.сотни = parseInt(number[0]);
    }
    console.log("Объект", obj);
}
else
    console.log("Неверно введено число");

