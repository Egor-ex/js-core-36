console.log('variables');

console.log(student); //undefined

var student = "Egor";
console.log(student);

var count; //объявление переменной без инициализации
console.log(count); //undefined

count = 1;
console.log(count); //1
count = 2;
console.log(count); //2

//console.log(number); //Uncaught ReferenceError: Cannot access 'number' before initialization  at
let number = 30;
console.log(number);

let age; //объявление переменной без инициализации
console.log(age); //undefined

age = 18;
console.log(age);

age = 22;
console.log(age);


//const user; //Uncaught SyntaxError: Missing initializer in const declaration
//console.log(userName); //Uncaught ReferenceError: Cannot access 'userName' before initializationat

const userName = "Egor";
console.log(userName);

//userName = ""; //Uncaught TypeError: Assignment to constant variable.at
