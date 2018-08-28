/**
* Multiplicacion
*/
const fs = require('fs');
const colors = require('colors');
//Lista archivo de texto
let ListarArchivo = (numero, limite) =>{
    return new Promise((resolve,reject) =>{
      let data = '';

      if(!Number(numero)){
        reject('No es un numero');
        return;
      }

      for (let i =0; i<=limite ; i++){
        data += `${numero} * ${i} = ${numero * i}\n`;
      }
      resolve(data);
    });
}

//Crear archivo de texto
let CrearArchivo = (numero,limite) => {
  return new Promise((resolve, reject) => {
    let data = '';

    if(!Number(numero)){
      reject('No es un numero');
      return;
    }

    for (let i =0; i<=limite ; i++){
      data += `${numero} * ${i} = ${numero * i}\n`;
    }

    fs.writeFile(`tablas/tabla-x${numero}.txt`, data , (err) => {
      if(err){
        reject(err)
      }else{
        resolve(`tabla-x${numero}.txt`.green)
      };
    });
  })
}

module.exports = {
  CreaArchivo,
  ListarArchivo
}
