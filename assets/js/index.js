'use strict';

/*1. Вычислить сумму первых N элементов последовательности, параметр N задает пользователь.

(1+2+3.....+N)*/
function getSum(array, numberElements) {
    if (numberElements <= 0 || numberElements > array.length) {
        throw new RangeError('bed number');
    }
    let sum = 0;
    for (let i = 0; i < numberElements; i++) {
        sum += array[i];
    }
    return sum;
}

//console.log(getSum([1, 2, 3, 4, 5, 6, 7], 6));

/*2.
2.1 Создать объект Student, который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, содержащий информацию о факультете и кафедре.
2.3. Связать объекты между собой, т.е. прописать данные о факультете и кафедре для студента.
2.4 Реализовать функцию вывода на экран полной информации о студенте.*/
const student = {
    name: 'Student',
    surname: 'Studentovich',
    isMale: true,
    contacts: {
        phone: '+380966633222',
        email: 'this@mail.ku',
    },
};

const faculty = {
    faculty: 'premudrostey',
    departament: 'mega depart',
};

student.education = faculty;

function getAllData(studentObj) {
    const {
        name,
        surname,
        isMale,
        contacts: { phone, email },
        education: { faculty, departament },
    } = student;
    console.log(
        `Name: ${name}\nSurname: ${surname}\nGender: ${
            isMale ? 'male' : 'female'
        }\nPhone: ${phone}\nEmail: ${email}\nFaculty: ${faculty}\nDepartament: ${departament}`
    );
}
//etAllData(student);

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

function printEvenIndexElement(array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            console.log(array[i]);
        }
    }
}

//printEvenIndexElement(numberArray);

function printEvenElement(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}

//printEvenElement(numberArray);

function getZeroElements(array) {
    let numberOfZero = 0;
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) === 0) {
            console.log(i);
            numberOfZero++;
        }
    }
    return numberOfZero;
}

//console.log(`Number of zero elements ${numberOfZero}`);

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
