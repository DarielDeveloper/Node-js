const http = require('node:http');

const server = http.createServer((req, res) => {
  res.end(('Server iniciado'))

});

//Cuando se pone 0 el server busca un puerto aleatorio que no este en uso
server.listen(0, () => {
  console.log(`Server iniciado por el puerto ${server.address().port}`)
  console.log(`http://localhost:${server.address().port}/`)
})