<template>
    <div>
        <movie-swiper>
              <div class="swiper-slide" v-for="(data,index) in dataImg" :key="index">
                  <div :style="{backgroundImage:'url('+data+')'}" class="banner_img"></div>
           </div>
        </movie-swiper>
      <nowlist v-list></nowlist>
        <!-- <div style="margin-top:47px"></div> -->
        <router-view></router-view>
    </div>
</template>
<script>
import movieSwiper from './Movie/MovieSwiper'
import nowlist from '../components/Nowlist'
import Vue from 'vue'
Vue.directive("list",{
    inserted(el){
        window.onscroll=()=>{
         if(window.pageYOffset>=el.offsetTop){
             el.style.position="fixed";
             el.style.top=0;
         }
          if(window.pageYOffset<=200){
              el.style.position="";
               el.style.top="";
         }
        }
    },
    unbind(){
        window.onscroll=null
    }
});
export default {
    data(){
        return {
            dataImg:["https://static.maizuo.com/v5/upload/4a8da56010356705571f85b345165ed8.jpg?x-oss-process=image/quality,Q_70","https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70"]
        }
    },
    components:{
        movieSwiper,
        nowlist
    },
}
</script>
<style scoped>
.banner_img{
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>