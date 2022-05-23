// module.exports = {
//     devServer: {
//         port:8999,  //端口号配置
//         open:true  //自动打开浏览器
//     }
// }  
let proxyObj = {};

proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathRewrite: {
        '^/': ''
    }
};

/*这部分将请求转发到后端，前端端口是8080，后端端口是8081*/
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8082,
        proxy: proxyObj
    }
}