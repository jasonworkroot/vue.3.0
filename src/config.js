export default {
	env: 'production',//发布上线需要改变此配置文件
	//开发环境参数地址
	api_host: function() {
		switch (this.env) {
		case 'development'://本地开发环境
			var api_host = 'http://localhost:8081/';
			break;
		case 'test'://线上测试环境
			var api_host = 'http://localhost:8081/';
			break;
		case 'production'://线上生产环境
			var api_host = 'http://www.thenewstep.cn/';
			break;
		}
		return api_host;
	},	
	
}