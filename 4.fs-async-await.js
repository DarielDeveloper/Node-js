//Async para utilizarlo hay 2 formas
//1-> Cambiar a emascript module, es decir cambiar la extension a .mjs
//2-> Envolver en una función autoinvocada


//IIFE - Inmedialy Involked Function Expression
const { readFile } = require('node:fs/promises');

(
  async () => {

    console.log('Leyendo el primer archivo');
    const text = await readFile('./archivo.txt', 'utf-8')

    console.log('primer texto: ' + text);


    console.log('Hacer cosas mientras lee el archivo');
  })();
