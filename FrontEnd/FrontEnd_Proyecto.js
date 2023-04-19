var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pelicula = new Schema({
    //Declaramos todos los objetos que vamos a guardar
    NOMBRE: String,
    NOMBART: String,
    INFOEXTART: String,
    IMAGEN: String,
    COMENTAR: {
        type: [String],
        default: []
    }
});
module.exports = mongoose.model('Pelicula', pelicula);