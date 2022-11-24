// console.log -> Imprime algo na tela
// var -> Cria uma variavel
// let -> cria uma variavel temporaria
// document.createElement (`Nome da tag html`) -> Cria um elemento
// `` -> Usado como aspas para mensagens só que com format (Templayt String). Pode pular linhas sem concatenar com o +.
// + para concatenar
// const variavel constante

let h1 = document.createElement ('h1');

let num : number = 10; // Tipo numerico
let bool : boolean = true; // Boleano
let str : string = `Mensagem bonita`; 

h1.textContent = str;

document.body.appendChild (h1);

let num2 : number = 20;

// num += num2;

// num = num % num;

// console.log (num);

// Operadores -> += mais recebe | -= menos recebe | *= Vezes recebe | /= Divido recebe | %= Resto de divisão recebe.

console.log (str);

function func () : void { } // Cria funções -> function nomeDaFuncao (parametro1 : tipo, parametro2 : tipo...) : tipoRetorno {}

if (bool != null) {} // Cria if -> if (condição) { bloco de comandos } 
// Operadores Comparação -> '!' -> Negação (Operador não) | "!=" -> diferente | "!==" -> Exatamente diferente | "==" -> Igual | "===" -> Exatamente igual | "&&" Operador e; "||" Operador ou.

if (bool != undefined) {} // Tipo undefined

if (bool) {
    let i : number;
    for (i = 0; i < 3; i++) {
        console.log (i);
    }
}

let list : number[] = [1, 2, 3]; // Lista normal
let list2 : Array <number> = [1, 2, 3]; // Lista de Array (Ainda não sei a diferença da de cima)

let tuple : [string, number]; // Lista pré definida

tuple = ["Vinicius", 16]; // Só aceita os valores definidos acima

console.log (tuple[0].length);

enum Day {DOMINGO, SEGUNDA, TERÇA} // A enumeração são valores numericos, começando por 0 e vai até o número de valores.
/* 
* Pode-se alterar o valor do elemento enumerado colocando o valor desejado desta forma
** enum Day {DOMINGO = 4, SEGUNDA, TERÇA}
* Assim domingo fica com valor 4, segunda vale 5 e terça vale 6. 
*/

let day : Day = Day.DOMINGO;

console.log (`Dia: ${day} ${Day[0]} ${Day[1]} ${Day[2]}`); // Também é possivel mostrar o que está escrito na enumeração passando a posição desejada como no exemplo:
/* 
*
** Day[0] == DOMINGO, Day[1] == SEGUNDA e Day[2] == TERÇA.
*
*/

function add (v1 : number, v2 : number, v3 ? : number) : number {
    if (v3 !== undefined) {
       return v1 + v2 + v3;
    }
    return v1 + v2;
} // O '?' informa que este valor não é obrigatório

function add2 (v1 : any, v2 : any, v3 ? : any) : void {
    let var1 : any = 10;
} // O tipo any é um tipo indefinido e pode aceitar qualquer tipo

let varVoid : void = undefined; // O void também é um tipo primitivo

let var1 : any = `Olá`;

let stringLength : number = (<string> var1).length; //(<tipo> variavel) -> É um cast que comprova que a variavel é daquele tipo primitivo 
// Length é para medir o tamanho da string
let stringUpperCase : string = (<string> var1).toLocaleUpperCase ();


function add3 (v1 : string, ...v2 : number[]) : void {
    let sum : number = 0;
    for (let v3 = 0; v3 < v2.length; v3++) {
        sum += v2[v3];
    }
} // Os 3 pontos são um "método varArgs" que é passado um Array | Operadores ++ -> Incrementa +1 | -- Decrementa -1