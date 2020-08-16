const argv = require('yargs')
                .command('listar','lista un tabla de multiplicar',{
                    base: {
                        alias: 'b',
                        demand: true,
                    },
                    limite:{
                        alias: 'l',
                        default: 10,
                    }
                })
                .help()
                .argv;

const { generarTabla } = require('./logica/multiplicar');
const { crearTxt } = require('./access_file/creartxt');
const fs = require('fs');


generarTabla(argv.base,argv.limite)
.then(data => crearTxt(argv.base,data))
.then(data => console.log(data))
.catch(err => console.log(err));