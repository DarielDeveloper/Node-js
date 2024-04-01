// Module os es para el control del sistema operativo
const os = require('node:os');
console.log('Información del sistema operativo');
console.log(os.platform());
console.log(os.release());
console.log(os.arch());
console.log(os.cpus().length);
console.log(Math.floor(os.totalmem() / 1024 / 1024));