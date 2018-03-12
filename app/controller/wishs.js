const Controller = require('egg').Controller;

const createRule = {
    type: { type: 'string' },
    source: { type: 'string', required: false },
    college_id: { type: 'number', required: false },
    college_name: { type: 'string', required: false },
    gender: { type: 'string' },
    want_gender: { type: 'string' },
    address: { type: 'string', required: false },
    wish: { type: 'string' },
    wechat: { type: 'string' },
    create_openid: { type: 'string', required: false },
    accept_openid: { type: 'string', required: false },
    if_accept: { type: 'number', required: false },
    created_at: { type: 'number', required: false }
}

class WishsController extends Controller {
    
    async index() {
        const ctx = this.ctx;
        const res = await ctx.service.wishs.index();
        ctx.body = res;
        ctx.status = 200;
    }
    async show() {
        const ctx = this.ctx;
        let id = ctx.params.id;
        const res = await ctx.service.wishs.show(id);
        ctx.body = res;
        ctx.status = 200;
    }
    async create() {
        const ctx = this.ctx;
        ctx.validate(createRule);
        const req = ctx.request.body;
        let res = await ctx.service.wishs.create(req);
        ctx.body = { id: res.id };
        ctx.status = 201;
    }
    async destroy() {
        const ctx = this.ctx;
        let id = ctx.params.id;
        const res = await ctx.service.wishs.destroy(id);
        ctx.body = res;
        ctx.status = 204;
    }
}

module.exports = WishsController;
