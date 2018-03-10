// module.exports = app => {
//     const mongoose = app.mongoose;
//     const UserSchema = new mongoose.Schema({
//         userName: { type: String },
//         password: { type: String }
//     });
//     return mongoose.model('User', UserSchema, 'user');
// }

module.exports = app => {
    const mongoose = app.mongoose;
    const UsersSchema = new mongoose.Schema({
        uid: { type: Number, unique: true },
        name: { type: String, required: true},
        pass: { type: String, required: true },
        status: { type: String },
        time: { type: String },
    });
    return mongoose.model('Users', UsersSchema, 'web_admin');
}