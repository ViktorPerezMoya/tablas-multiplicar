const argv = require('./configs/yargs').argv;
const colors = require('colors');
const { generarTabla } = require('./logica/multiplicar');
const { crearTxt } = require('./access_file/creartxt');
const comando = argv._[0];

switch(comando){
    case 'listar':
        console.log("========================".green);
        console.log(`La tabla del ${argv.base}`.green);
        console.log("========================".green);
        generarTabla(argv.base,argv.limite).then(data => console.log(data)).catch(err => console.log(err));
        break;
    case 'crear':
        generarTabla(argv.base,argv.limite).then(data => crearTxt(argv.base,data)).then(message => console.log(message)).catch(err => console.log(err));
        break;
    default:
        console.log('El comando no es reconocido.'.red);
        break;
}