const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (multiplicando = 5, multiplicarHasta = 10, listar = false) => {
    try {
        let salida = '',
            consola = '';

        for (let i=1; i<=multiplicarHasta; i++) {
            salida += `${multiplicando} x ${i} = ${multiplicando * i}\n`;
            consola += `${multiplicando} ${ 'x'.green } ${i} ${ '='.green } ${multiplicando * i}\n`;
        }

        if (listar) {
            console.log('========================='.green)
            console.log('     Tabla del:'.green, colors.blue(multiplicando))
            console.log('========================='.green)
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${multiplicando}.txt`, salida);
        return `tabla-${multiplicando}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
}