module.exports={
    pages:{
        index:{
            entry:'src/main.js'
        }
    },

    // 
    // test1
    // devServer:{
    //     proxy:'http://localhost:5000'
    // }
    // 第二种方式
    devServer:{
        proxy:{
            '/api':{
                target:'http://106.52.61.60:8081',
                pathRewrite:{'^/api':''},
                changeOrigin : true,
                secure : false,
            }
        }
    }
}



// module.exports = {
//     //基本路径
//     publicPath : '',
//     //不能使用history模式
//     //输出文件目录
//     outputDir : 'dist',
//     //放置静态资源目录
//     assetsDir : 'static',
//     //指定生成的index.html路径
//     indexPath : 'index.html',
//     //检查
//     lintOnSave : true,
//     // 代理方式1
//     devServer:{
//         proxy:'http://localhost:5000'
//     }
//     // devServer : {
//     //     proxy : {
//     //         '/api' : {
//     //             target : "http://localhost:8082",
//     //             //是否反向代理
//     //             changeOrigin : true,
//     //             secure : false,
//     //             pathRewrite : {
//     //                 "^/api" : "",
//     //             }
//     //         }
//     //     }
//     // }
// }