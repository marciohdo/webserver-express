const http = require('http');

http.createServer((req, resp) => {

        resp.writeHead(200, { 'Contatne-Type': 'application/json' });

        let salida = {
            nombre: 'Marcio Heleno',
            edad: 32,
            url: req.url
        }
        resp.write(JSON.stringify(salida));
        //resp.write('Helo world');
        resp.end();
    })
    .listen(8080);

console.log('Verificando a porta 8080');