<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 在Home、Search是显示的，在登录、注册隐藏。如果很多是不方便的 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: '',
  components: {
    Header, Footer
  },
  mounted () {
    //通知Vuex发请求，获取数据，存储于仓库中，在根组件中只执行一次。运行的时候就有了数据但是就是要用的会后才是使用。
    this.$store.dispatch("categoryList");
  }
}
</script>

<style scoped>
</style>
