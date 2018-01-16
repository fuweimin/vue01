//管理项目路由的文件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 让vue框架使用vue-router插件
//需要执行use方法
Vue.use(VueRouter);


//引入路由需要管理的页面组件
import One from './pages/One.vue'
import OneDetail from './pages/OneDetail.vue'
import Two from './pages/Two.vue'
import Three from './pages/Three.vue'
import Four from './pages/Four.vue'

//配置页面如何管理，如何进行切换
const routes = [
    //这个数组中，一个页面就是一个配置项
    {
        path: '/one',//页面hash值路径
        component: One,//当地址跟path配置相同时，使用的组件
        children: [//这个页面配置的子页面
            //一个对象就是一个子页面的配置项
            {
                path: 'detail',
                component: OneDetail
            }

        ]
    },
    {
        path: '/two',
        component: Two
    },
    {
        path: '/three',
        component: Three
    },
    {
        path: '/four',
        component: Four
    }
]





//创建路由对象
const router = new VueRouter({
    routes
});

//向外输出路由对象
export default router;

