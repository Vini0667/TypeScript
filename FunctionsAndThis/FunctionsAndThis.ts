function print (val : string) : void {
    console.log (val);
}

print ("Menssagem daora");

function printOrNot (flag : boolean = false) : void {
    let str = flag ? "Flag is true" : "Flag is false"; // Operador ternário
    // Consiste em
    // Uma variável = condição ? se for verdadeiro : se for falso
    console.log (str);
}

printOrNot (true);

let sumAnonnymous = function (n1 : number, n2 : number) : void { // Uma função anônima
    console.log (`Sun: ${n1 + n2}`);
};

function suNotAnonnymous (n1 : number, n2 : number) : void {
    console.log (`Sun: ${n1 + n2}`);
}

suNotAnonnymous (2, 2);

let sumArrow1 = (n1 : number, n2 : number) => n1 + n2; // Esta é uma arrow function, ela retorna n1 + n2. Se usa o => para dizer que irá retornar algo

let objectArrow = (name : string, surname : string) => ({name : name, surname : surname}); // Está função retornará um objeto com um name e um surname. Para retornar obj coloque em parênteses

console.log (objectArrow ("Willian", "Suane"));

console.log (`-------------------------------------`);

function testThis () {
    return this; // Este this está fazendo referência ao objeto Window (Em tese)
}

console.log (testThis ());
console.log (this); // Este this novamente está fazendo referência ao objeto Window

let objExample = {
    name : "Kakaroto",
    lastName : "Dos Eduardo",
    
    fullName : function () { // Nesta função ele faz referência ao objExample
        return this;
    },

    fullName2 : () => { // Nesta função ele faz referência a Window
        // De acordo com a documentação do ecmaScript
        // Os Arrow Function irão procurar esse this pelo escopo léxico (lexical scope)
        // Ou seja ele irá utilizar o objeto que está encapsulando o objExample (Ou seja o objeto pai)
        // Basicamente ele irá subir dois niveis
        return this;
    }, 

    thisExample : this
};

console.log (objExample.name);
console.log (objExample.fullName ());
console.log (objExample.fullName2 ());
console.log (objExample.thisExample);

let lottery = {
    name : ["Gon", "Killya", "Leorio"], // Os nomes estão em um Array
    test : "Teste",
    createLoterryPicker : function () { // Função para verificar o this e retorna uma função
        console.log (`Fisrt level this: ` + this.name + ` ` + this.test);
        return () => {
            console.log (`Second level this: ` + this);
            let pickedPersonNumber = Math.floor (Math.random () * 3); // A função Math.floor retorna o menor número inteiro dentre o número 'x'
            // A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de números aleatórios; esta semente não pode ser escolhida ou reatribuída.

            // Basicamente está sendo usada a Math.floor para transformar o número random em inteiro, e está sendo multiplicado por 3 o Math.random para ele utilizar o intervalo de [0, 3[

            return {name : this.name[pickedPersonNumber]};
        }
    }
}

let personPicker = lottery.createLoterryPicker ();
let pickedPerson = personPicker ();

console.log (pickedPerson);