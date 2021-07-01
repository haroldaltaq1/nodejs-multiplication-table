const { crearArchivo } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs')

console.clear();
console.log(argv);
console.log('base: yargs', argv.base);

let multiplicando = argv.base;
let listar = argv.listar;
let multiplicarHasta = argv.hasta;

crearArchivo(multiplicando, multiplicarHasta, listar)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.error(err));