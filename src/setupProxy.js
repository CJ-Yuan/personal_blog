//这是解决跨域的文件
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/visit',
//     createProxyMiddleware({
//       target: "https://openapi.baidu.com/rest/2.0/tongji/report/getData",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/visit": ""
//       }
//     })
//   );
// };