
<template>
	<div>
		<Header/>
		<Footer/>
	</div>
</template>

<script>
import Header from'./components/Header.vue'
import Footer from './components/Footer.vue'
	export default{
		name:'Main',
		components:{
			Header,
			Footer
		},
		beforeCreate:()=>alert('页面马上被创建了')
	}
</script>
