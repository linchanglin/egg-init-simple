// const Controller = require('egg').Controller;

// class UserController extends Controller {
//     async index () {
//         const ctx = this.ctx;
//         ctx.body = await ctx.model.User.find({});
//     }
// }

// module.exports = UserController;


const Controller = require('egg').Controller;

const createRule = {
    name: 'string', 
    pass: 'string',
}

const updateByIdRule = {
    name: { type: 'string', required: false },
    pass: { type: 'string', required: false }
}

class UsersController extends Controller {
    
    async index() {
        const ctx = this.ctx;
        const res = await ctx.service.users.index();
        ctx.body = res;
        ctx.status = 200;
    }
    async show() {
        const ctx = this.ctx;
        let id = ctx.params.id;
        const res = await ctx.service.users.show(id);
        ctx.body = res;
        ctx.status = 200;
    }
    async create() {
        const ctx = this.ctx;
        ctx.validate(createRule);
        const req = ctx.request.body;
        let res = await ctx.service.users.create(req);
        ctx.body = { id: res.id };
        ctx.status = 201;
    }
    async update() {
        const ctx = this.ctx;
        ctx.validate(updateByIdRule);
        let id = ctx.params.id;
        const req = ctx.request.body;
        const res = await ctx.service.users.update(id, req);
        ctx.body = res;
        this.status = 200;
    }
    async destroy() {
        const ctx = this.ctx;
        let id = ctx.params.id;
        const res = await ctx.service.users.destroy(id);
        ctx.body = res;
        ctx.status = 204;
    }
}

module.exports = UsersController;
