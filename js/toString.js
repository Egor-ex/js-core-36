// === К СТРОКЕ ===


//ЧИИСЛО К СТРОКЕ
let value = 0;

//1й способ
let toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

//2й способ
toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);


//ЧИИСЛО К СТРОКЕ
value = 1;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

//2й способ
toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);


//Значение бесконечности К СТРОКЕ
value = Infinity;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

//2й способ
toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

//Не число К СТРОКЕ
value = NaN;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

//2й способ
toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

//--------------

//БУЛЕВОЕ (логическое) true к СТРОКЕ
value = true;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

//2й способ
toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);


//БУЛЕВОЕ (логическое) false к СТРОКЕ
value = false;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

//2й способ
toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

//--------------

//UNDEFINED к СТРОКЕ
value = undefined;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

//2й способ
toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

//--------------

//NULL к СТРОКЕ
value = null;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

//2й способ
toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);




