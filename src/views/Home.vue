<template>
  <div class="home">
		<div class="list">{{url}}</div>
		<div class="about">颜色的变化</div>
		<div class="list">颜色的rem</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import config from '../config.js'
export default {
  name: 'home',
	data(){
		return{
			url:'123'
		}
	},
// 方法
	methods:{
		unpopup(){
			
		},
	},
	// 钩子函数 主要用在 页面加载之前加载数据
	created(){
		// 跨域请求
		
			window.fetch('http://www.jklj.net/e/showsstore.php',{
				method:'post',

				body:JSON.stringify()
			})
			.then(result=>{
				console.log(result)
			})
//                this.$http.post('http://www.jklj.net/e/showsstore.php',{
//                	name:'',
//                	age:''
//                }).then(function(data){
//                	console.log(data)
//                })
			
		},
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped type="text/css">
@import url("../assets/css/index.scss");
$white:#333333;
$yellow:#454545;

%font-sizes{
	font-size:10px;
	color:#42B983;
	line-height: 100px;
}

@mixin namess($aaa){
	width:200px;
	height: 300px;
	background: $aaa;
}

.home{
	.about{
		font-size:10px;
	}
	.list{
		font-size:40rem;
	}
	font-size:30rem;
	img{
		width:30px;
		height:30px
	}
  background: $white
}
</style>
