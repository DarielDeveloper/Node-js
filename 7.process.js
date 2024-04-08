//process Es un objeto global de Node que gestiona el proceso actual de ejecución

//argv son los argumentos que van a recibir la linea de comando
console.log(process.argv);

//Controlando el proceso y salida
//Con 0 todo salio ok
//Con 1 cuando salio algo mal y para evitar que el proceso se quede en ejecución
process.exit(0);

//Para escuchar los eventos del proceso
process.on('exit', () => {
  //
})

//Para saber de donde se esta ejecutando
process.cwd()

//Para el control de las variables de entorno
process.env