const Controller = require('egg').Controller;

class OpenwxController extends Controller {
  async checkToken() {
    const ctx = this.ctx;
    const query = ctx.query;
    const signature = query.signature;
    const timestamp = query.timestamp;
    const nonce = query.nonce;
    const echostr = query.echostr;
    const token = 'hello';
    let str = [token, timestamp, nonce].sort().join('');
    let sha1_str = ctx.helper.sha1(str);
    if ( sha1_str == signature && echostr) {
        ctx.body = echostr;
    } else {
        ctx.body = 'nothing';
    }
    ctx.status = 200;
  }
}

module.exports = OpenwxController;
