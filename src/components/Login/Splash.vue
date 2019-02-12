<template>
  <div id="splash">
      <img src="../../assets/images/Home/home.jpg" @click="homeClick">
  </div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {

			}
		},
		mounted(){
		  setTimeout(()=>{
		    this.homeClick()
		  },3000)
		},
		methods:{
			homeClick(){
				console.log(111)
				this.$router.push({
							name: 'Login'
						})
			}
		}
	}
</script>

<style scoped="scoped">
	#splash{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	#splash img{width: 100%;}
</style>