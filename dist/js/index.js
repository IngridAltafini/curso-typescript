"use strict";
// string, boolean, number...
let x = 10;
x = 25;
console.log(x);
//-INFERENCIA 
let y = 12;
//-ANNOTATION
let z = 12;
//-TIPOS BASICOS
let firstName = "Ingrid";
let age = 18;
const isAdmin = true;
//String != string
console.log(typeof firstName);
//-OBJECT
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase())
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
//-TUPLAS -> TUPLE
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
//myTuble = [true, false, true]
console.log(myTuple);
//-OBJECT LITERALS -> {PROP: VALUE}
const user = {
    name: "Ingrid",
    age: 18
};
console.log(user);
console.log(user.name);
//user.job = "Desenvolvedora"
//-ANY -> utilizado raramente, pois vai contra a 'filisofia' do typescript
let a = 0;
a = "teste";
a = true;
a = 2;
a = [];
//-UNION TYPE
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
//-ENUM
//--tamanho roupas(size: Medio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const roupa = {
    name: "Jaqueta",
    size: Size.M
};
console.log(roupa);
//LITERAL TYPES
let teste;
//teste = "outro valor"
teste = "autenticado";
teste = null;
//FUNCOES
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
//console.log(sum("12", true))
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Ingrid"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Ola ${greet} ${name}`);
        return;
    }
    console.log(`Ola ${name}`);
}
greeting("Ingrid");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplayNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplayNumbers(someNumbers));
