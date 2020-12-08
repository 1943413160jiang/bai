<template>
   <div class="swiper-container">
    <div class="swiper-wrapper">
    <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'
export default {
    mounted(){
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    }
}
</script>
<style scoped>
 .swiper-container {
      width: 100%;
      height: 100%;

    }
</style>