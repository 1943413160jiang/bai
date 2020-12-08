<template>
    <div class="nav">
    <ul>
    <router-link to="/movie" tag="li" active-class="active">
    <i class="iconfont icon-dianying"></i>
    电影</router-link>
    <router-link to="/cinema" tag="li" active-class="active">
      <i class="iconfont icon-dianyingyuan"></i>
    电影院</router-link>
    <router-link to="/center" tag="li" active-class="active">
      <i class="iconfont icon-wode"></i>
    我的</router-link>
    </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 99;
}
ul{
    display: flex;
    text-align: center;
}
li{
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: 14px;
}
.iconfont{
    font-size: 26px;
}
.active{
    color: orange;
}
</style>