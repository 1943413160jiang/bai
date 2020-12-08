<template>
    <ul>
    <router-link to="/movie/nowplaying" active-class="active" tag="li"><span>正在热映</span></router-link>
     <router-link to="/movie/beforebegin" active-class="active" tag="li"><span>即将上映</span></router-link>
    </ul>
</template>
<style scoped>
ul{
    width:100%;
    display: flex;
  text-align: center;
  line-height: 45px;
  background-color: #fff;
  z-index: 99;
}
li{
    flex: 1;
    margin: 0 60px;
}

.active{
    color: orange;
     border-bottom: 3px solid orange;
}
</style>