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
  Header,Footer
  }
}
</script>

<style scoped>

</style>
