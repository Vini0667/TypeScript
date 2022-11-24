/*
* Trabalhando com interfaces
*/

function printName (person : {name : string}) : void {
    console.log (person.name);    
} // Função que recebe um objeto que PRECISA NECESSARIAMENTE ter um NAME

let randomObj = {name : "Vini", age : 20}; // Criando um objeto
let randomObj2 = { age : 20};

printName (randomObj); // Chamada da função

interface Person {
    name : string;
} // Criando interface pessoa. Tem somente um nome

interface Employee extends Person {
    salary : number;
} // Interface do tipo empregado(a) que extende de pessoa (ou seja é uma pessoa)

let pe : Person = {name : "Maria"};
let emp : Employee = {name : "Eduarda", salary : 1000};

function printName2 (person : Person) : void {
    console.log (person.name);
}

printName2 (pe);
printName2 (emp);
printName (randomObj);
printName2 ({name : "Teste"} as Person); // "as" é como se fosse um cast provando que é uma pessoa (Person)

interface Person { // Pode-se criar uma nova interface com o mesmo nome colocando mais funções
    age ? : number;
} // Fala que pessoa pode ter um atributo age

interface Manager extends Employee {
    readonly bonus : number;
} // "readonly" é um atributo que não podera ser alterado, recebendo o valor fixo na criação do objeto
// O TypeScript fala na documentação que se usa o redonly para atributos e o const para variáveis

let manager : Manager = {name : "Leticia", salary : 2000, bonus : 20};