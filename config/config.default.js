// module.exports = appInfo => {
//   const config = exports = {};

//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1514973191845_2587';

//   // add your config here
//   config.middleware = [];

//   return config;
// };

exports.keys = 'my-cookie-secret-key';
exports.mongoose = {
  url: 'mongodb://127.0.0.1:27017/egg-init-simple',
  options: {}
};

// mount middleware
exports.middleware = [
  'errorHandler'
];
exports.errorHandler = {
  match: '/api',
},
exports.security = {
  ignore: '/api/',
  csrf: {
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
  domainWhiteList: ['http://localhost:8080']
};

exports.cors = {
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  credentials: true
}

// exports.cluster = {
//   listen: {
//     port: 7001,
//     hostname: '127.0.0.1',
//     // path: '/var/run/egg.sock',
//   }
// }


