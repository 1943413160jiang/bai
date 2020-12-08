<template>
<div>
 <tabbar v-show="isShowTabbar"></tabbar>
 <router-view></router-view>
</div>
</template>
<script>
import tabbar from './components/TabBar'
import {mapState} from 'vuex'
export default {
  components:{
    tabbar
  },
  computed:{
    ...mapState("TabbarModule",["isShowTabbar"])
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  touch-action: manipulation;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}


</style>
