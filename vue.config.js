module.exports = {
    //=====================================build建立相关====================================//
    publicPath: process.env.NODE_ENV === "production" ? "/app" : "/", // build baseurl
    outputDir: "app", //  build输出目录
    assetsDir: "static", // build静态输出目录
    indexPath: "index.html", // build html生成路径
    filenameHashing: true, // 文件名是否包含hash
    pages: {
        index: {
            // page 的入口
            entry: "src/main.js",
            // 模板来源
            template: "public/index.html",
            // 在 dist/index.html 的输出
            filename: "index.html",
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: "my-test-vue-app",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ["chunk-vendors", "chunk-common", "index"]
        }
    },
    lintOnSave: process.env.NODE_ENV !== "production" ? "error" : "default", // build建立强制交验通过eslint
    runtimeCompiler: true, // vue中使用template
    transpileDependencies: [], // 显示转译一个依赖
    productionSourceMap: process.env.NODE_ENV !== "production", // build环境不使用代码定位
    crossorigin: undefined, // 设置生成link等标签
    integrity: false, // 提供引用cdn链接安全性
    //=====================================css配置====================================//
    css: {
        requireModuleExtension: true, // 去掉css .module后缀
        sourceMap: false, // 是否开启css source map
        // loaderOptions: {
        //     css: {},
        //     postcss: {}
        // }
    },
    //=====================================开发服务设置====================================//
    devServer: {
        //=====================================代理配置====================================//
        proxy: {
            "/inspection": {
                target: "http://sz.xrdev.cn", // 代理地址
                ws: false, // ws地址
                changeOrigin: true, // 跨域
            }
        }
    }
}
