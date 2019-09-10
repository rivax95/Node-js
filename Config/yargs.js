const opts = {
    base: {
        demand: true, // requiere darle un valor para permitir ejecutar el comando
        alias: 'b', // para no tener que escribir el comando base entero se crea el alias
        describe: 'Base numerica para crear la multiplicacion', // discripcion de la base
        // default: 0 //para asignar un valor por defecto
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }

}
const argv = require('yargs').
command(`listar`, `Imprime en consola la tabla de multiplicar`, opts).
command(`crear`, 'Crea un archivo', opts).
help()
    .argv;

module.exports = {
    argv
}