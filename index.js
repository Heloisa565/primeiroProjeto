const http = require('http');
const hostname ='127.0.0.1';//Endereço do servidor
const port = 3000;// porta do servidor:
const server = http.createServer((req,res)=> {// Criando o servidor
    res.statusCode =200;// Status ok de resposta
    res.setHeader('Content-Type', 'text/plain');
res.end ('Olá, sou Heloisa, tenho 58 anos, aluna do curso de Desenvolvedor de Sistemas pelo Instituto Federal de Ubá. Embora o curso seja difícil e estou gostando muito.');
});
server.listen(port, hostname,()=>{ 
    console.log('/servidor rodando em http://${hostname}:${port}/');
})
