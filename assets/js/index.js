'use strict';

/*1. Вычислить сумму первых N элементов последовательности, параметр N задает пользователь.
(1+2+3.....+N)*/

function getSum(numberElements) {
    let sum = 0;
    if (numberElements === 0) {
        return sum;
    }
    sum += numberElements;
    return sum + getSum(--numberElements);
}

/*2.
2.1 Создать объект Student, который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, содержащий информацию о факультете и кафедре.
2.3. Связать объекты между собой, т.е. прописать данные о факультете и кафедре для студента.
2.4 Реализовать функцию вывода на экран полной информации о студенте.*/

class Student {
    constructor(name, surname, isMale, phone, email, education) {
        this.name = name;
        this.student = surname;
        this.isMale = isMale;
        this.contacts = {};
        this.contacts.phone = phone;
        this.contacts.email = email;
        this.education;
    }
}

class Education {
    constructor(faculty, departament) {
        this.faculty = faculty;
        this.departament = departament;
    }
}

function printAllData(studentObj) {
    for (const item of Object.keys(studentObj)) {
        if (typeof studentObj[item] === 'object') {
            printAllData(studentObj[item]);
        } else {
            console.log(`${item}: ${studentObj[item]}`);
        }
    }
}

const student1 = new Student(
    'Student',
    'Studentovich',
    true,
    '+380966633222',
    'this@mail.ku'
);

student1.education = new Education('faculty1', 'departament1');

//printAllData(student1);

/* 3.
3.1 Создать числовой массив и проинициализировать его 25 элементами с помощью случайных чисел.
3.2 Вывести элементы с четными индексами.
3.3 Вывести только четные элементы
3.4 Вывести индексы нулевых элементов (элемент = 0)
3.5 Посчитать количество нулевых элементов*/

const ARRAY_SIZE = 25;
const numberArray = [];

for (let i = 0; i < ARRAY_SIZE; i++) {
    numberArray.push((Math.random() * 10).toFixed());
}

console.log(numberArray);

/**
 * @description 3.2 Вывести элементы с четными индексами.
 * @param {*} array
 * @returns array
 */
function getEvenIndexElement(array) {
    return array.filter((value, index) => {
        if (index % 2 === 0) {
            return value;
        }
    });
}

//console.log(getEvenIndexElement(numberArray));

/**
 * @description 3.3 Вывести только четные элементы
 * @param {*} array
 * @returns
 */
function getEvenElement(array) {
    return array.filter((value) => {
        if (value % 2 === 0) {
            return value;
        }
    });
}
//console.log(getEvenElement(numberArray));

/**
 * @description 3.4 Вывести индексы нулевых элементов (элемент = 0)
 * @param {*} array
 * @returns
 */

function getZeroElements(array) {
    let indexsOfZero = [];
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) === 0) {
            indexsOfZero.push(i);
        }
    }
    return indexsOfZero;
}

console.log(getZeroElements(numberArray));

//3.5 Посчитать количество нулевых элементов
const zeroElements = getZeroElements(numberArray).length;
console.log(zeroElements);

/*Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат файла, электронный номер) */

class Book {
    constructor(autor, title, publishYear, publisher) {
        this.autor = autor;
        this.title = title;
        this.publishYear = publishYear;
        this.publisher = publisher;
    }
}

class EBook extends Book {
    constructor(autor, title, publishYear, publisher, fileFormat, eNumber) {
        super(autor, title, publishYear, publisher);
        this.fileFormat = fileFormat;
        this.eNumber = eNumber;
    }
}
