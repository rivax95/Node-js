// Requireds
const fs = require('fs')
const colores = require('colors');

let ListarTabla = (base, limite) => {
    let log = '';
    console.log('============================'.green);
    console.log(`===========Tabla de ${base}===========`.blue);
    console.log('============================'.green);
    return new Promise((resolve, reject) => {
        for (var i = 1; i <= limite; i++) {
            log += `${base} * ${i} = ${base*i} \n`
        }
        if (limite == 0) {
            reject(`No puedo calcular la tabla si el limite es 0`.red);
            return;
        }
        resolve(log);
    });
};

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero, PRINGAO'.red);
            return;
        }
        let data = ``;
        for (let i = 0; i <= limite; i++) {
            data += `${i}* ${base}= ${i*base}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`.green);
        });


    });

};
module.exports = {
    crearArchivo,
    ListarTabla
}