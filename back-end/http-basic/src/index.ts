/* 
    MODULO HTTP
    para começar devemos importar o modulo http para manipúlações de requicões HTTP

    A sintaxe padrão de importação: import 'nome da variavel' from 'nome do modulo'

*/
import http from "http"
import fs from "fs" // o modulo fs serve para manipulação de arquivos como escrita e leitura 
import path from "path" // o modulo path serve para lidar com caminho de arquivos

const PORTA = 8080 // constante onde armazenaremos a porta da rede em que servidor irá operar 

// createServer é um método para criar um servidor que recebe uma função com 2 parâmetros (requisição , reposta)
const servidor = http.createServer((req , res) => { 

    // vamos criar uma condição para requisição realizada no servidor
    if (req.url == "/") { // se a url for http://localhost:8080/ então essa será a reposta

        // readFileSync -> é um método do fs para leitura de arquivo
        // resolve -> é usado para resolver uma sequência de segmentos de caminho para um caminho absoluto 
        const html = fs.readFileSync(path.resolve("./src/html/index.html")) // vamos armazenarar o html da pagina
        
        // writeHead é responsável por escrever o cabeçalho da resposta http
        res.writeHead(200, {'Content-Type': 'text/html'})
        req.method = "GET" // O método de solicitação podendo ser GET | POST | DELETE | PUT | PATCH... para saber mais http://gabsferreira.com/os-metodos-http-e-a-diferenca-entre-eles/
        res.write(html)  // write serve para dar como reposta o conteudo da requisição
        res.end() // end para indicar o fim da resposta liberando o servidor para atender outra requisição

    }
    if (req.url == "/data") { // se a url for http://localhost:8080/data então essa será a reposta

        const dataAtual = new Date() // criando um objeto Date para conseguir a data atual atraves do método toLocaleString
        
        // writeHead é responsável por escrever o cabeçalho da resposta http
        res.writeHead(200, {'Content-Type': 'text/html'}) // esse método recebe primeiro parâmetro sendo o cidgo de repsosta e segundo o tipo de resposta nesse caso um texto html
        req.method = "GET" // O método de solicitação podendo ser GET | POST | DELETE | PUT | PATCH... para saber mais http://gabsferreira.com/os-metodos-http-e-a-diferenca-entre-eles/
        res.write(`A data atual: ${dataAtual.toLocaleString()}`) // write serve para dar como reposta o conteudo da requisição
        res.end() // end para indicar o fim da resposta liberando o servidor para atender outra requisição

    }
    if (req.url == "/css/style.css") { // se a url for http://localhost:8080/css/style.css então essa será a reposta

        // readFileSync -> é um método do fs para leitura de arquivo
        const css = fs.readFileSync(path.resolve("./src/css/style.css")) // vamos armazenarar o css da pagina
        
        res.writeHead(200, {'Content-Type': 'text/css'}) // esse método recebe primeiro parâmetro sendo o cidgo de repsosta e segundo o tipo de resposta nesse caso um texto css
        req.method = "GET" // O método de solicitação podendo ser GET | POST | DELETE | PUT | PATCH... para saber mais http://gabsferreira.com/os-metodos-http-e-a-diferenca-entre-eles/
        res.write(css) // write serve para dar como reposta o conteudo da requisição
        res.end() // end para indicar o fim da resposta liberando o servidor para atender outra requisição

    }

})

// listen serve para inicar o servidor passando como parametro a PORTA e uma outra função que é executada quando servidor é iniciado
servidor.listen(PORTA , () => {

    // quando o servidor incia mostra a mensagem
    console.log(`servidor rodando na porta ${PORTA}, para acessar http://localhost:8080/`);

})