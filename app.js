/**
* Base Node FileSystem y Yargs
*/

const argv = require('./config/yargs').argv;
const {CrearArchivo} = require('./multiplicar/multiplicar');
const {ListarArchivo} = require('./multiplicar/multiplicar');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
  case 'listar':
    ListarArchivo(argv.base, argv.limite).then(message =>{
      console.log(message);
    }).catch(e =>{
      console.log(e.underline.red);
    });
  break;
  case 'crear':
    CrearArchivo(argv.base, argv.limite).then(archivo =>{
      console.log(`Archivo creado: ${archivo}`);
    }).catch(e => {
      console.log(e.underline.red);
    });
  break;
  default:
  console.log(`${comando}: command not found`.red);
}
// console.log(process.argv);
// let argumento = process.argv;
// console.log(argumento);
// let dato = argumento[2]
// let numero = dato.split('=')[1]
