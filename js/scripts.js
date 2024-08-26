/* // const studentName = 'Ciccio';
// const studentAge = 28;
// const studentEmail = 'ciccio@pasticcio.com';

// const student = {
//     name: studentName,
//     age: studentAge,
//     email: studentEmail
// };

const name = 'Ciccio';
const age = 28;
const email = 'ciccio@pasticcio.com';

// const student = {
//     name: name,
//     age: age,
//     email: email
// };

const student = {
    name,
    age,
    email
};

console.log(student);

console.log('Nome dello studente (dot notation):', student.name);
console.log('Nome dello studente (parentesi quadre):', student['name']);

// const selectedKey = prompt('Quale info vuoi avere?');
// console.log('selectedKey', selectedKey, typeof selectedKey);

// console.log(selectedKey + ' dello studente (dot notation):', student.selectedKey);
// console.log(selectedKey + ' dello studente (parentesi quadre):', student[selectedKey]);

const newKey = prompt('Quale chiave vuoi aggiungere?');
console.log('newKey', newKey, typeof newKey);

const newValue = prompt('Che valore avrà?');
console.log('newValue', newValue, typeof newValue);

student.newKey = newValue;      // Crea la proprietà che si chiama 'newKey' e valorizzala con il valore di newValue
student[newKey] = newValue;     // Crea la proprietà che si chiama come il valore contenuto in newKey e valorizzala con il valore di newValue

console.log(student); */


/* const name = 'Alessio';
const age = 32;
const email =  'alessio@boolean.careers';

const newKey = prompt('Quale chiave vuoi aggiungere?');
console.log('newKey', newKey, typeof newKey);

const newValue = prompt('Che valore avrà?');
console.log('newValue', newValue, typeof newValue);

const alessio = {
    name: name,
    age: age,
    email: email,
    // newKey: newValue,
    [newKey]: newValue
};

console.log(alessio); */


// const cat = {
//     name: 'Felix',
//     color: 'red',
//     age: 5,
//     alive: true,
//     toys: [
//         'Palla',
//         'Pupazzo',
//         'Filo',
//     ],
// };

// console.log('cat', cat, typeof cat);

// // const name = cat.name;
// // const age = cat.age;
// // const toys = cat.toys;

// const { name, toys, age, test } = cat;

// console.log('name', name, typeof name);
// console.log('age', age, typeof age);
// console.log('toys', toys, typeof toys);
// console.log('test', test, typeof test);


// const cats = [
//     {
//         name: 'Gino',
//         age: 2
//     },
//     {
//         name: 'Pino',
//         age: 3
//     },
//     {
//         name: 'Lino',
//         age: 4
//     },
// ];

// for (let i = 0; i < cats.length; i++) {
//     let { age, name } = cats[i];

//     console.log('-------------------------');
//     console.log('cats[i].name', cats[i].name, typeof cats[i].name);
//     console.log('name', name, typeof name);

//     age = 7;
    
//     console.log('cats[i].age', cats[i].age, typeof cats[i].age);
//     console.log('age', age, typeof age);

//     console.log('-------------------------');
// }

// console.log('cats', cats, typeof cats);

/* 
    Le funzioni non sono nient'altro che BLOCCHI DI CODICE RIUTILIZZABILI. Riutilizzabili come? Richiamandoli tramite il nome della funzione

    Le funzioni possono:
    - avere O NON avere parametri
    - restituire O NON restituire qualcosa
*/

// const a = 7;
// const b = 12;

// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(a, b));

// console.log(sum(2, 3));

// console.log(sum(b, 3));

// console.log(sum(sum(4, 5), sum(3, 2)));

// /* Scrivendo così, dato che la funzione sum è stata definita con soli 2 argomenti, tutto quello che scriviamo dopo il secondo argomento (cioè 3) viene ignorato */
// console.log(sum(2, 3, 4, 5, ['a', 'b', 'c'], true, sum(1, 2)));


// console.log('-----------------------------------------');

// function sumWithArray(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum;
// }

// console.log(sumWithArray([1, 2, 3]));
// console.log(sumWithArray([10, 20, 30, 40, 50, 60]));
// console.log(sumWithArray([77]));
// console.log(sumWithArray([11, 22, 33]));

// function sumWithSpread(...numbers){
//     console.log('numbers', numbers, typeof numbers);

//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum;
// }

// console.log(sumWithSpread(1, 2, 3));

// console.log(sumWithSpread(4, 5));

// console.log(sumWithSpread(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



// /* 
//     Questa funzione mi deve eseguire un'operazione su tutti i numeri che le passo

//     ad es. devo poter dire alla funzione che voglio fare il prodotto dei numeri 3, 6, 9
//             e poi, in un'altra esecuzione, che voglio fare la somma dei numeri 5, 7, 9
// */
// function operationOnNumbers(operator, ...numbers) {
//     let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (operator == '+') {
//             result += numbers[i];
//         }
//         else if (operator == '*') {
//             result *= numbers[i];
//         }
//     }

//     return result;
// }

// const firstResult = operationOnNumbers('+', 1, 2, 3, 4, 5);
// console.log('firstResult', firstResult);
// const secondResult = operationOnNumbers('*', 6, 7, 8);
// console.log('secondResult', secondResult);


const studentA = {
    name: 'Mario',
    age: 22,
};

console.log('studentA PRE AGGIUNTA EMAIL', studentA);

// const studentAPlus = {
//     name: studentA.name,
//     age: studentA.age,
//     email: 'mario@boolean.careers'
// };

/* OPPURE */

const studentAPlus = {
    ...studentA,
    email: 'mario@boolean.careers'
};

/* QUESTA NON è UN'ALTERNATIVA VALIDA!!!!!!!! */
// const studentAPlus = studentA;
// studentAPlus.email = 'mario@boolean.careers';

console.log('studentAPlus', studentAPlus);
console.log('studentA POST AGGIUNTA EMAIL', studentA);






const arrA = [1, 2, 3];
console.log('arrA', arrA);
const arrB = [...arrA, 4];
console.log('arrB', arrB);