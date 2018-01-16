<template>
<div id="app">

    <!-- 路由容器 -->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>

<nav class="tabs">
    <!-- <a class="tab" href="#/one">one</a>
    <a class="tab" href="#/two">two</a>
    <a class="tab" href="#/three">three</a>
    <a class="tab" href="#/four">four</a> -->

    <router-link to="/one" class="tab">one</router-link>
    <router-link to="/two" class="tab">two</router-link>
    <router-link to="/three" class="tab">three</router-link>
    <router-link to="/four" class="tab">four</router-link>

</nav>

</div>
  
</template>

<script>

export default {
   
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
html, body, #app{
    width: 100%;
    height: 100%;
}
.tabs{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    display: flex;
    background: palegoldenrod;
    border-top: 1px solid #ddd;
}
.tabs .tab{
    flex: 1;
    text-align: center;
    line-height: 49px;
    border-right: 1px solid #ddd;
    font-size: 24px;
    font-weight: blod;
    color: red;
}
.tabs .tab:last-child{
    border: none;
}
.tabs .tab.router-link-active{
    color: #fff;
}

.page{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 49px;
    width: 100%;
}
.page.subpage{
    bottom: 0;
    z-index: 1;
}
.ani{
    animation-duration: 300ms;
    animation-timing-function: ease-in;
}
#one{
    background: palegreen;
}
#two{
    background: paleturquoise;
}
#three{
    background: palevioletred;
}
#four{
    background: papayawhip;
}
#one-detail{
    background: plum;
}

</style>
