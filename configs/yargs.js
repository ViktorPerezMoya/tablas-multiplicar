const options = {
    base:{
        alias: 'b',
        demand: true,
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}
const argv = require('yargs')
                .command('listar','lista una tabla',options)
                .command('crear','crea un archivo txt con la tabla indicada por parametros',options)
                .help()
                .argv;

module.exports = {
    argv
}

