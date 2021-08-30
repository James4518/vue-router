<template>
    <div id="app">
      <router-link to='/home' replace>首页</router-link>
      <router-link to='/about' replace>关于</router-link>
      <!-- <router-link :to="'/user/'+userId" replace>我的</router-link>
      <router-link :to="{path: '/profile', query: {name: 'kebo', age: 18, height: 1.88}}">档案</router-link> -->
      <button @click="userClick">用户</button>
      <button @click="profileClick">档案</button>
      <router-view></router-view>
    </div>
</template>

<script>
import HomeNews from "./news.vue";
import Home from "./home.vue";
export default {
  name: 'app',
  components: {Home, HomeNews},
  data(){
    return{userId:"张三"}
  },
  methods:{
  userClick() {
    this.$router.push('/user/' + this.userId)
  },
  profileClick() {
    this.$router.push({
      path: '/profile',
      query: {
        name: 'kobe',
        age: 19,
         height: 1.88
      }
    })
  }
  }
}
</script>