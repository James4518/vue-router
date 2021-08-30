<template>
    <div id="app">
      <router-link to='/home' replace>首页</router-link>
      <router-link to='/about' replace>关于</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
import HomeNews from "./news.vue";
import Home from "./home.vue";
export default {
  name: 'app',
  components: {Home, HomeNews}
}
</script>