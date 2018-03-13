// app/extend/helper.js
// import moment from 'moment';
const moment = require('moment');
const sha1 = require('sha1');

module.exports = {
    moment: moment,
    sha1: sha1
};


  // 使用 helper 计算指定 url path
// ctx.helper.pathFor('home', { by: 'recent', limit: 20 })
  