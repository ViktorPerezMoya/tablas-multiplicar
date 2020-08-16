const fs = require('fs');
const colors = require('colors');
module.exports.crearTxt = (base,data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`output-files/tabla-${base}.txt`,data,(error) => {
            if(error) reject(error);
            resolve('El archivo '+colors.green(`tabla-${base}.txt`)+' ha sido creado.');
        })
    });
}