// Requireds

const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite).then(resp => console.log(resp)).catch(err => console.log(err));
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite).then(archivo =>
                console.log(`Archivo ${archivo} creado con exito`)
            )
            .catch(Err =>
                console.log(`Se ha encontrado un Fallo : ${Err}`)
            );
        break;

    default:
        console.log('Comando no reconocido');
        break;

}
/* console.log(argv.limite + argv.base); */