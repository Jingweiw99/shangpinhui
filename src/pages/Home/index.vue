<template>
  <div>
    <!-- 已经注册成全局组件了，不需要引人 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    //有两个直接在父组件上v-for
    <Floor v-for="f in floorList" :key="f.id" :list="f"></Floor>
    
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from 'vuex'
export default {
  name: "",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted () {
    //派发action，获取floor数据
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({floorList:state=>state.home.floorList})
  },
}
</script>

<style>
</style>