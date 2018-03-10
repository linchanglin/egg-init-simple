const Service = require('egg').Service;

class WishsService extends Service {
    async index () {
        let wishs = await this.ctx.model.Wishs.find();
        let res = {};
        res.meta = { total: wishs.length };
        res.data = wishs;
        return res;
    }
    async show(wid) {
        let wish = await this.ctx.model.Wishs.find({ wid })
        let res = {};
        res.data = wish;
        return res;
    }
    async create(req) {
        if (!req) { return };
        let idg = await this.ctx.model.Idg.findOneAndUpdate({ modelname: 'counter' }, { $inc: { 'wid': 1 }}, { new: true });
        req.wid = idg.wid;
        req.created_at = this.ctx.helper.moment().unix();
        let res = await this.ctx.model.Wishs.create(req);
        return res;
    }
    async destroy(wid) {
        if (!wid) { return };
        let res = await this.ctx.model.Wishs.remove({ wid: { $in: wid.split(',') }});
        return res;
    }
}

module.exports = WishsService;