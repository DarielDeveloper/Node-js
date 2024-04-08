//Module fs para el control de lectura y escritura de fichero
//A partir de la version 16 Node recomienda en la importación poner el prefijo node:
const fs = require("node:fs");

//Para saber del archivo
const stats = fs.statSync("./archivo.txt")

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.size
);
//Para leer el conte
const text = fs.readFileSync("./archivo.txt", "utf-8");
console.log(text);