const Service = require('egg').Service;

class UsersService extends Service {
    async index () {
        let users = await this.ctx.model.Users.find();
        let res = {};
        res.meta = { total: users.length };
        res.data = users;
        return res;
    }
    async show(uid) {
        let user = await this.ctx.model.Users.find({ uid })
        let res = {};
        res.data = user;
        return res;
    }
    async create(req) {
        if (!req) { return };
        let idg = await this.ctx.model.Idg.findOneAndUpdate({ modelname: 'counter' }, { $inc: { 'uid': 1 }}, { new: true });
        req.uid = idg.uid;
        let res = await this.ctx.model.Users.create(req);
        return res;
    }
    async update(uid, req) {
        let res = await this.ctx.model.Users.findOneAndUpdate({ uid },{ $set: req }, { new: true });
        return res;
    }
    async destroy(uid) {
        if (!uid) { return };
        let res = await this.ctx.model.Users.remove({ uid: { $in: uid.split(',') }});
        return res;
    }
}

module.exports = UsersService;