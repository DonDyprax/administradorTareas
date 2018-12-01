const mongoose = require('mongoose');
const { MemeSchema } = mongoose;

MemeSchema = new Schema({
    origen: {type:String, required:true},
    idioma: {type:String, required:true},
    anio: {type:String, required:true}
})

module.exports = mongoose.model('memes', MemeSchema);