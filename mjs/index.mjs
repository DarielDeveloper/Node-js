/* Explicación de las extensiones en Node js */


//.js -> por defecto utiliza CommonJs
//.mjs -> para utilizar ES Modules
//.cjs -> para utilizar CommonJs

import { sum, sub, mult } from "./calcular.mjs";
console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mult(1, 2));