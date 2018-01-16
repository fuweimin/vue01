<template>
<div>
<div class="page" id="one">
    <h1>one</h1>
    <ul class="list">
        <li class="item" v-for="item in dataList">
            <router-link to="/one/detail">{{item}}</router-link>
        </li>
    </ul>
</div>
<transition enter-active-class="slideInRight ani"
    leave-active-class="slideOutRight ani">
<router-view></router-view>
</transition>
</div>
</template>

<script>
export default {
    data(){
        return {
            dataList: [1,2,3,4,5,6,7,8,9,10]
        }
    },
    created(){
        console.log('created');
    },
    destroyed(){
        console.log('destroyed');
    }
}
</script>

<style>
.list{
    border-top: 1px solid #ddd;
}
.list .item{
    list-style: none;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
}

</style>
