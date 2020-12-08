<template>
     <div class="swiper-container" :class="dataClass">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'
export default {
    props:{
        preslider:{
        type:Number,
        default:1
        },
        dataClass:{
            type:String,
            default:'swiper-container'
        }
    },
    mounted(){
    var swiper = new Swiper('.'+this.dataClass, {
       slidesPerView: this.preslider,
      spaceBetween: 30,
      freeMode: true,
    });
    }
}
</script>
<style scoped>
.swiper-wrapper img{
    width:100%;
}
</style>