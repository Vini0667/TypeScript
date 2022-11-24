"use strict";
/*
* Trabalhando com interfaces
*/
function printName(person) {
    console.log(person.name);
} // Função que recebe um objeto que PRECISA NECESSARIAMENTE ter um NAME
let randomObj = { name: "Vini", age: 20 }; // Criando um objeto
let randomObj2 = { age: 20 };
printName(randomObj); // Chamada da função
let pe = { name: "Maria" };
let emp = { name: "Eduarda", salary: 1000 };
function printName2(person) {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName(randomObj);
printName2({ name: "Teste" }); // "as" é como se fosse um cast provando que é uma pessoa (Person)
// O TypeScript fala na documentação que se usa o redonly para atributos e o const para variáveis
let manager = { name: "Leticia", salary: 2000, bonus: 20 };
