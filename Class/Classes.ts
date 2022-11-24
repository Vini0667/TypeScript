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

class Person { /* O class serve para criar uma classe na qual pode ter atributos construtores e funções */
    name : string; // Este é um atributo, pois ele está na classe diferentemente de uma variável qualquer
    
    constructor (name : string) { // O construtor inicializa a variável (atributo) name com o nome passado
        this.name = name; // A clausula this faz referencia ao atributo name da classe não a variável name do construtor
    } // O construtor é inicializado no momento em que um objeto da classe é criado

    print () : void { // Aparentemente as funções em classes não ussam a palavra function
        console.log (`O name é: ${this.name}`);
    }
    
    public set nome (name : string) {
        this.name = name;
    } // O set atualiza um atributo com o valor informado

    public get nome () : string {
        return this.name;
    } // O get pega o valor armazenado no atributo
}

class Employee extends Person { // O extends informa que a classe Employee é um Person, ou seja é uma herança. Basicamente todos os atributos e funções de Person são implementados em Employee
    salary : number;
    constructor (name : string, salary : number) {
        super (name); // A clausula super faz referência a super-classe, ou seja a classe pai
        this.salary = salary;
    }

    print () : void { // É possivel fazer a sobrescrita da função da classe pai. Só é preciso reescrever a função com o mesmo nome
        super.print (); // É possivel chamar as funções da classe pai usando a clausula super
        console.log (`O salary é ${this.salary}`);
    }
}

let p1 = new Person ("Eduardo");
let emp1 = new Employee ("Goku", 1000); // O TypeScript faz um construtor automaticamente para receber o name, visto que é necessário passar um name para criar uma pessoa
// Logo também se faz necessario um name para criar um empregado

p1.nome = "Dudu"; // Para chamar o set é só usar o (objeto) obj.nomeDoAtributo e passar o valor com o sinal de '=';

console.log (p1.nome); // O get só é necessario colocar o obj.nomeDoAtributo e ele estara retornando uma string (neste caso)

p1.print ();
emp1.print ();

let p2 = {name : "Isabela"} as Person; // Desta forma você está falando que este objeto é uma pessoa

let p3 = <Person> {}; // Está forma de cria uma pessoa sem precisar passar os objetos necessários (Igual acima)

let p4 : Person = new Employee ("Luffy", 2000); // Este é o chamado polimorfismo, o objeto é do tipo Employee mas a variável de referencia é Person (Ou seja só acessa os atributos de Person)

p4.print (); // Tirando a função print que também tem na classe pai (super)

