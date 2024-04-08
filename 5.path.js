//Path es un modulo nativo que es para el control de las rutas de los archivos

const path = require('node:path');

//Barra separadora de carpeta según el SO
console.log(path.sep);

//Para unir rutas se utiliza join()
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

//Para obtener el nombre del fichero de una ruta 
const base = path.basename('/Estudios/JavaScript/readme.txt');
console.log(base);