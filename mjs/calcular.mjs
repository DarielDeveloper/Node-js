/* Explicación de las extensiones en Node js */

//.js -> por defecto utiliza CommonJs
//.mjs -> para utilizar ES Modules
//.cjs -> para utilizar CommonJs

// Esta es forma moderna de exportar module
export function sum(a, b) {
  return a + b;

}
export function sub(a, b) {
  return a - b;

}
export function mult(a, b) {
  return a * b;

}