<template>
    <div style="background-color:#ccc" v-if="datalist">
       
        <div class="detail-back-icon">
            <i class="iconfont icon-arrow-left" @click="handleBack"></i>
        </div>
        <detail-header v-top :name="datalist.name"></detail-header>
        <div class="detail__img" :style="{backgroundImage:'url('+datalist.poster+')'}"></div>
      <div class="detail__info">
        <h2>{{datalist.name}}</h2>
        <p>{{datalist.category}}</p>
        <p>{{datalist.premiereAt | dateFilter}}上映</p>
         <p style="margin-bottom:20px">{{datalist.nation}}|{{datalist.runtime}}分钟</p>
         <p :class="isShow ?'detail__synopsis__show':'detail__synopsis' ">{{datalist.synopsis}}</p>
      </div>
         <div style="text-align:center;background:#fff" @click="isShow=!isShow"><i class="iconfont" :class="isShow ? 'icon-shangla':'icon-RectangleCopy'"></i></div>
      <div class="detail__actors">
          <h3>演职人员</h3>
          <detail-swiper :preslider="3" dataClass="datalistactors">
                <div class="swiper-slide" v-for="(item,index) in datalist.actors" :key="index">
                    <img :src="item.avatarAddress" alt="">
                    <div style="text-align:center">
                        <div style="font-size:14px">{{item.name}}</div>
                        <div style="font-size:12px;color:#ccc">{{item.role}}</div>
                    </div>
                </div>
          </detail-swiper>
           <h3>剧照</h3>
            <detail-swiper :preslider="2" dataClass="datalistphotos" style="margin-bottom:55px">
                 <div class="swiper-slide" v-for="(data,index) in datalist.photos" :key="index">
                  <div :style="{backgroundImage:'url('+data+')'}" style="background-size:cover;height:100px;background-position:center" @click="handlepreview(index)"></div>
                </div>
            </detail-swiper>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
import moment from 'moment'
import DetailSwiper from './Detail/DetailSwiper'
import DetailHeader from './Detail/DetailHeader'
import { ImagePreview } from 'vant'
import { mapMutations } from 'vuex'
Vue.filter("dateFilter",function(date){
    return moment(date*1000).format("YYYY-MM-DD")+" ";
})
Vue.directive("top",{
    inserted(el){
       window.onscroll=()=>{
           if((document.documentElement.scrollTop || document.body.scrollTop) >50){
               el.style.display="block";
           }else{
                 el.style.display="none";
           }
       }
    },
    unbind(){
        window.onscroll=null;
    }
})
export default {
    data(){
        return {
            datalist:null,
            isShow:false
        }
    },
    components:{
        DetailSwiper,
        DetailHeader
    },
    methods:{
     ...mapMutations("TabbarModule",["showTabbar","hiddenTabbar"]),
        handlepreview(index){
ImagePreview({
    images:this.datalist.photos,
    startPosition:index,
    closeIconPosition:"top-left",
    closeable:true
});
 },
 onSwipeLeft(){
     console.log("left");
 },
 handleBack(){
     this.$router.back();
 }
    },
    mounted(){
        this.hiddenTabbar();
        this.http({
            url:`/gateway?filmId=${this.$route.query.myid}&k=4525801`,
            headers:{
                  'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            // console.log(res.data.data.film);
            this.datalist=res.data.data.film;
        })
        
    },
    beforeDestroy(){
        this.showTabbar();
    }
}
</script>
<style scoped>
.detail__img{
height:200px;background-position:center;background-repeat:no-repeat;width:100%;
background-size: cover;
}
.detail__info{
    padding: 20px 20px;
    background-color: #fff;
}
.detail__info p{
    font-size: 13px;
    color: #555;
}
.detail__synopsis{
    height: 37px;
    overflow: hidden;
    background-color: #fff;
    transition: height .5s;
}

.detail__synopsis__show{
    height:145px;
    transition: height .5s;
}
.detail__actors{
    margin-top: 10px;
    padding: 0 20px;
    background-color: #fff;
}
.detail__actors h3{
    font-weight: normal;
}
.swiper-container {
      width: 100%;
      height: 100%;
    }
.swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
    }
.detail-back-icon{
 position: absolute;
 top: 10px;
 left:10px;
 z-index: 99;
 background-color: #ccc;
 border-radius: 50%;

 }
 .detail-back-icon i{
     font-size: 30px;
 }
</style>