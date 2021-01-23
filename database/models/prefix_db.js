//primero requerimos el modulo
const mongoose = require('mongoose');
//luego creamos un nuevo esquema para los prefijos y lo almacenamos en una constante
const Guild = mongoose.Schema({
    id: String,
//en id ^^^^^^ almacenaremos una String(Cadena de Texto) en la cual pondremos la id del servidor. Para que tenga su propio prefijo
    prefix: String
//y aqui ^^^^^^ almacenaremos el prefix del servidor ><
});
module.exports = mongoose.model('Guild', Guild)
//Ponemos un nombre y llamamos a la variable Guild definida arriba con el nuevo esquema