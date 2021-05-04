let moment = new Date().toLocaleTimeString();
let mongoose = require('mongoose')
const dotenv = require('dotenv').config();


module.exports = () => {

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((connection) => {
    console.info(
        `[OK] ${moment} Conexión a Mongo realizada con éxito ${connection}`
    );
    this.connection = connection;
})
.catch((error) => {
    console.error(
        `[ERROR] ${moment} Error al conectar con Mongo. No se ha podido establecer la conexión con el servidor\n[ERROR] ${moment} ${error}`
    );
});

}