"use strict";
function print(val) {
    console.log(val);
}
print("Menssagem daora");
function printOrNot(flag = false) {
    let str = flag ? "Flag is true" : "Flag is false"; // Operador ternario
    // Consiste em
    // Uma variavel = condição ? se for verdadeiro : se for falso
    console.log(str);
}
printOrNot(true);
let sumAnonnymous = function (n1, n2) {
    console.log(`Sun: ${n1 + n2}`);
};
function suNotAnonnymous(n1, n2) {
    console.log(`Sun: ${n1 + n2}`);
}
suNotAnonnymous(2, 2);
let sumArrow1 = (n1, n2) => n1 + n2; // Esta é uma arrow function, ela retorna n1 + n2. Se usa o => para dizer que ira retornar algo
let objectArrow = (name, surname) => ({ name: name, surname: surname }); // Está função retornará um objeto com um name e um surname. Para retornar obj coloque em parenteses
console.log(objectArrow("Willian", "Suane"));
console.log(`-------------------------------------`);
function testThis() {
    return this; // Este this está fazendo referência ao objeto Window (Em tese)
}
console.log(testThis());
console.log(this); // Este this novamente está fazendo referência ao objeto Window
let objExample = {
    name: "Kakaroto",
    lastName: "Dos Eduardo",
    fullName: function () {
        return this;
    },
    fullName2: () => {
        // De acordo com a documentação do ecmaScript
        // Os Arrow Function irão procurar esse this pelo escopo léxico (lexical scope)
        // Ou sejá ele ira ultilizar o objeto que está incapsulando o objExample (Ou sejá o objeto pai)
        // Basicamente ele ira subir dois niveis
        return this;
    },
    thisExample: this
};
console.log(objExample.name);
console.log(objExample.fullName());
console.log(objExample.fullName2());
console.log(objExample.thisExample);
let lottery = {
    name: ["Gon", "Killya", "Leorio"],
    test: "Teste",
    createLoterryPicker: function () {
        console.log(`Fisrt level this: ` + this.name + ` ` + this.test);
        return () => {
            console.log(`Second level this: ` + this);
            let pickedPersonNumber = Math.floor(Math.random() * 3); // A função Math.floor retorna o menor número inteiro dentre o número 'x'
            // A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de números aleatórios; esta semente não pode ser escolhida ou reatribuída.
            // Basicamente está sendo usada a Math.floor para transformar o número random em inteiro, e está sendo multiplicado por 3 o Math.random para ele abrangir o intervalo de [0, 3[
            return { name: this.name[pickedPersonNumber] };
        };
    }
};
let personPicker = lottery.createLoterryPicker();
let pickedPerson = personPicker();
console.log(pickedPerson);
