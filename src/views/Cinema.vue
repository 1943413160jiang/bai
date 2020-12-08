<template>
<div>
<van-nav-bar
  title="影院"
  left-text="返回"
  right-text="按钮"
  left-arrow
    @click-left="onClickLeft" @click-right="onClickRight">
   <template #left>
  {{cityName}}<van-icon name="arrow-down" color="black"/>
  </template>
    <template #right>
    <van-icon name="search" size="18" color="black"/>
  </template>
  </van-nav-bar>
 <div class="cinema" :style="{height:height}">
        <ul>
            <li v-for="data in cinemalist" :key="data.cinemaId">
                <div>{{data.name}}</div>
                 <div class="cinema__address">{{data.address}}</div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import BetterScroll from 'better-scroll'
import Vue from 'vue';
import { NavBar,Icon } from 'vant';
import { mapActions, mapMutations, mapState } from 'vuex';
Vue.use(NavBar).use(Icon);
export default {
    data(){
        return {
            height:0
        }
    },
    computed:{
        ...mapState("CinemaModule",["cinemalist"]),
        ...mapState("CityModule",["cityId","cityName"]),
    },
    methods:{
        ...mapMutations("CinemaModule",["clearCinemaList"]),
        ...mapActions("CinemaModule",["getcinemaList"]),
        onClickLeft(){
            this.clearCinemaList();
            this.$router.push('/city');
        },
        onClickRight(){
            this.$router.push("/cinema/search");
        }
    },
    mounted(){
        this.height=document.documentElement.clientHeight-50+"px";
        if(this.cinemalist.length===0){
            this.getcinemaList(this.cityId).then(res=>{
                this.$nextTick(()=>{
                    new BetterScroll(".cinema",{
                    scrollbar:{
                        fade:false
                    }
                })
                })
            })
        }else{
            console.log("缓存了");
             this.$nextTick(()=>{
                new BetterScroll(".cinema",{
                    scrollbar:{
                        fade:false
                    }
                })
            })
        }
    }
}
</script>
<style scoped>
ul li{
    padding:10px 20px;
    border-bottom: 1px solid #ccc;
}
.cinema__address{
    font-size: 12px;
    color: #555;
}
.cinema{
    overflow: hidden;
    position: relative;
}
</style>