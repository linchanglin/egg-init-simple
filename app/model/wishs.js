module.exports = app => {
    const mongoose = app.mongoose;
    const WishsSchema = new mongoose.Schema({
        wid: { type: Number, unique: true },
        type: { type: String, required: true},
        source: { type: String },
        college_id: { type: Number },
        college_name: { type: String },
        gender: { type: String, required: true },
        want_gender: { type: String, required: true },
        address: { type: String },
        wish: { type: String, required: true},
        wechat: { type: String, required: true},
        create_openid: { type: String },
        accept_openid: { type: String },
        if_accept: { type: Number, default: 0 },
        created_at: { type: Number, required: true },
    });
    return mongoose.model('Wishs', WishsSchema, 'wishs');
}