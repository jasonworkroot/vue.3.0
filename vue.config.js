const fs = require('fs')
module.exports={
	baseUrl:'/', //根目录
	outputDir:'dist', //构建输出目录
	assetsDir:'assets',//静态资源目录(技术，CSS，img，fonts)
	lintOnSave:false,//是否开启eslint保存检测，有效值：true||false||'error'
    devServer:{
		open:false, //项目启动后是否自动开启 true开启 false不开启
		host:'0.0.0.0',  //真机测试的时候给"0.0.0.0" 单机的时候给"localhost"
	    port:8082,   //配置的端口号
		https:false, //是否识别https协议 true的时候 非https路径报错
		hotOnly: true,//添加新的模块可以更好更新，就是热更新 webpack 已经实现了这个效果 写true或者false不会有问题
	    proxy: {
			// 跨域
	        '/apis':{
	            target:'http://www.thenewstep.cn/',  //跨域请求的地址
	            ws: true,
	            changOrigin: true,
	            pathRewrite:{
	            '^/apis':'/'
	            }
	        }
	    },
	},
	css: {
	    loaderOptions: {
	        sass: {
	              data: fs.readFileSync('src/assets/css/index.scss', 'utf-8')
	        }
	    }
	}
	
}
