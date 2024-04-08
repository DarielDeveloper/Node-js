//Modulo requerido
const fs = require('node:fs/promises');

//Captamos el argumento que se encuentra en esa posición para lista desde ese directorio
const folder = process.argv[2] ?? '.';

async function ls(folder) {

  let files
  try {
    //Lectura del directorio
    files = await fs.readdir(folder);
  } catch (error) {
    //Mensaje
    console.error(`Directorio ${folder} no existe, verifique`);
    //Salida del proceso
    process.exit(1);
  }

  // El map no para el proceso en el await, por lo que se hace en paralelo
  //Para hacerlo secuencial se utiliza el for (const iterator of object) {}
  const filesPromises = files.map(async file => {
    let stats;

    try {
      //Información del fichero o directorio
      stats = await fs.stat(file);
      const isDirectory = stats.isDirectory();
      const fileType = isDirectory ? 'd' : 'f';
      const fileSize = stats.size.toString();
      const fileModified = stats.mtime.toLocaleString();

      return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    } catch (error) {
      console.error(`No se pudo leer el fichero`);
      process.exit(1);
    }

  });
  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach(fileInfo => {
    console.log(fileInfo);
  })

}

ls(folder);
