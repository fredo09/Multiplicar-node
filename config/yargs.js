/**
* CONFIGURACION DEL YARGS
*/
let opts = {
  base:{
    demand:true,
    alias: 'b'
  },
  limite:{
    alias: 'l',
    default:10
  }
};

const argv = require('yargs')
.command('listar', 'Imprime el resultado de una tabla de multiplicar', opts )
.command('crear','Crea Archivo con contenido de tablas de multiplicar', opts ).help().argv;


module.exports = {
  argv
}
