"use strict";
// console.log -> Imprime algo na tela
// var -> Cria uma variavel
// let -> cria uma variavel temporaria
// document.createElement (`Nome da tag html`) -> Cria um elemento
// `` -> Usado como aspas para mensagens só que com format (Templayt String). Pode pular linhas sem concatenar com o +.
// + para concatenar
// const variavel constante
let h1 = document.createElement('h1');
let num = 10; // Tipo numerico
let bool = true; // Boleano
let str = `Mensagem bonita`;
h1.textContent = str;
document.body.appendChild(h1);
let num2 = 20;
// num += num2;
// num = num % num;
// console.log (num);
// Operadores -> += mais recebe | -= menos recebe | *= Vezes recebe | /= Divido recebe | %= Resto de divisão recebe.
console.log(str);
function func() { } // Cria funções -> function nomeDaFuncao (parametro1 : tipo, parametro2 : tipo...) : tipoRetorno {}
if (bool != null) { } // Cria if -> if (condição) { bloco de comandos } 
// Operadores Comparação -> '!' -> negação (Operador não) | "!=" -> diferente | "==" -> igual | "===" -> exatamente igual | "&&" operador e; "||" operador ou.
if (bool != undefined) { } // Tipo undefined
if (bool) {
    let i;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
let list = [1, 2, 3]; // Lista normal
let list2 = [1, 2, 3]; // Lista de Array (Ainda não sei a diferença da de cima)
let tuple; // Lista pré definida
tuple = ["Vinicius", 16]; // Só aceita os valores definidos acima
console.log(tuple[0].length);
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
})(Day || (Day = {}));
let day = Day.MONDAY;
console.log(`Dia: ${day}`);
