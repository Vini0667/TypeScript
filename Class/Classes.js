"use strict";
/*
* Atributos public, private e protected
* Como o nome sugere são modificadores de acesso
* public -> Todos as outras classes podem ter acesso
* private -> Somente a classe dona do atributo/função pode ter acesso
* protected -> Somente as classes filhas, ou que estejam no mesmo pacote podem acessar
* Por padrão o modificador de acesso é public
*/
/*
* Usa-se o '_' no começo de cada atributo privado
* Ex:
* private _name : string;
* É uma convenção do javascript
*/
class Person {
    constructor(name) {
        this.name = name; // A clausula this faz referencia ao atributo name da classe não a variavel name do construtor
    } // O contrutor é inicializado no momento em que um objeto da classe é criado
    print() {
        console.log(`O name é: ${this.name}`);
    }
    set nome(name) {
        this.name = name;
    } // O set atualiza um atributo com o valor informado
    get nome() {
        return this.name;
    } // O get pega o valor armazenado no atributo
}
class Employee extends Person {
    constructor(name, salary) {
        super(name); // A clausula super faz refencia a super-classe, ou seja a classe pai
        this.salary = salary;
    }
    print() {
        super.print(); // É possivel chamar as funções da classe pai usando a clausula super
        console.log(`O salary é ${this.salary}`);
    }
}
let p1 = new Person("Eduardo");
let emp1 = new Employee("Goku", 1000); // O TypeScript faz um construtor automaticamente para receber o name, visto que é necessario passar um name para criar uma pessoa
// Logo também se faz necessario um name para criar um empregado
p1.nome = "Dudu"; // Para chamar o set é só usar o (objeto) obj.nomeDoAtributo e passar o valor com o sinal de '=';
console.log(p1.nome); // O get só é necessario colocar o obj.nomeDoAtributo e ele estara retornando uma string (neste caso)
p1.print();
emp1.print();
let p2 = { name: "Isabela" }; // Desta forma você está falando que este objeto é uma pessoa
let p3 = {}; // Está forma de cria uma pessoa sem precisar passsar os objetos necessarios (Igual acima)
let p4 = new Employee("Luffy", 2000); // Este é o chamado polimorfismo, o objeto é do tipo Employee mas a variavel de referencia é Person (Ou sejá só acessa os atributos de Person)
p4.print(); // Tirando a função print que também tem na classe pai (super)
