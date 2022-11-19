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
// Operadores Comparação -> '!' -> Negação (Operador não) | "!=" -> diferente | "!==" -> Exatamente diferente | "==" -> Igual | "===" -> Exatamente igual | "&&" Operador e; "||" Operador ou.
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
    Day[Day["DOMINGO"] = 0] = "DOMINGO";
    Day[Day["SEGUNDA"] = 1] = "SEGUNDA";
    Day[Day["TER\u00C7A"] = 2] = "TER\u00C7A";
})(Day || (Day = {})); // A enumeração são valores numericos, começando por 0 e vai até o número de valores.
/*
* Pode-se alterar o valor do elemento enumerado colocando o valor desejado desta forma
** enum Day {DOMINGO = 4, SEGUNDA, TERÇA}
* Assim domingo fica com valor 4, segunda vale 5 e terça vale 6.
*/
let day = Day.DOMINGO;
console.log(`Dia: ${day} ${Day[0]} ${Day[1]} ${Day[2]}`); // Também é possivel mostrar o que está escrito na enumeração passando a posição desejada como no exemplo:
/*
*
** Day[0] == DOMINGO, Day[1] == SEGUNDA e Day[2] == TERÇA.
*
*/
function add(v1, v2, v3) {
    if (v3 !== undefined) {
        return v1 + v2 + v3;
    }
    return v1 + v2;
} // O '?' informa que este valor não é obrigatório
function add2(v1, v2, v3) {
    let var1 = 10;
} // O tipo any é um tipo indefinido e pode aceitar qualquer tipo
let varVoid = undefined; // O void também é um tipo primitivo
let var1 = `Olá`;
let stringLength = var1.length; //(<tipo> variavel) -> É um cast que comprova que a variavel é daquele tipo primitivo 
// Length é para medir o tamanho da string
let stringUpperCase = var1.toLocaleUpperCase();
function add3(v1, ...v2) {
    let sum = 0;
    for (let v3 = 0; v3 < v2.length; v3++) {
        sum += v2[v3];
    }
} // Os 3 pontos são um "método varArgs" que é passado um Array | Operadores ++ -> Incrementa +1 | -- Decrementa -1
