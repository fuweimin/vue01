<template>
<div class="page subpage" id="one-detail">
    <h1>详情页面</h1>
    <button @click="goback()">返回</button>
</div>
  
</template>

<script>
export default {
    methods: {
        goback(){
            //组件内部使用路由对象
            // 访问$router
            console.log(this.$router);
            //当前路由的描述对象$route
            console.log(this.$route);

            this.$router.back();
            
        }
    }
}
</script>

<style>

</style>
