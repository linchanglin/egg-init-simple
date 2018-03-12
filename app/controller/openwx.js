const Controller = require('egg').Controller;

class OpenwxController extends Controller {
  async checkToken() {
    const ctx = this.ctx;
    const query = ctx.query;
    let signature = query.signature;
    let timestamp = query.timestamp;
    let nonce = query.nonce;
    let echostr = query.echostr;
    let arr = [timestamp, nonce, echostr];
    arr.sort();
    let str = arr[0] + arr[1] + arr[2];
    let sha1_str = hex_sha1(str);
    if ( sha1_str == signature && echostr) {
        ctx.body = echostr;
    } else {
        ctx.body = '';
    }
    ctx.status = 200;
  }
}

module.exports = OpenwxController;
