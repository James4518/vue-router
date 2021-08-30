<template>
  <div>
    <h2>我是用户界面</h2>
    <h2>昵称：{{userId}}</h2>
    <!-- <h2>{{$route.params.id}}</h2> -->
  </div>
</template>

<script>
  export default {
    name: "user",
    computed: {
      userId() {
        return this.$route.params.id
      }
    }
  }
</script>