module.exports = app => {
    const mongoose = app.mongoose;
    const IdgSchema = new mongoose.Schema({
        modelname: { type: String },
        wid: { type: Number, default: 0 },
        uid: { type: Number, default: 0 },
        nid: { type: Number, default: 0 },
        tid: { type: Number, default: 0 },
    });
    return mongoose.model('Idg', IdgSchema, 'IdGenerator');
}