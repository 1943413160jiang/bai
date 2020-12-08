<template>
   <div>
     <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @cancel="onCancel"
  />
</form>
<van-list
  finished-text="没有更多了"
><van-cell v-for="(item,index) in computedList" :key="index">
      <div>{{item.name}}</div>
       <div>{{item.address}}</div>
  </van-cell>
</van-list>
   </div>
</template>
<script>
import Vue from 'vue';
import { Search,List,Cell } from 'vant';
import { mapActions, mapState } from 'vuex';

Vue.use(Search).use(List).use(Cell);
export default {
    data(){
        return {
            value:""
        }
    },
    computed:{
        ...mapState("CityModule",["cityId"]),
        ...mapState("CinemaModule",["cinemalist"]),
        computedList(){
            if(this.value=="")return;
            // return this.$store.state.cinemalist.filter(item=>item.name.toUpperCase().indexOf(this.value.toUpperCase())>-1)
            return this.cinemalist.filter(item=>item.name.toUpperCase().includes(this.value.toUpperCase())||item.address.toUpperCase().includes(this.value.toUpperCase()))
        }
    },
    mounted(){
        // console.log(this.$store.state.cinemalist);
        if(this.cinemalist.length===0){
            this.getcinemaList(this.cityId);
        }else{
            console.log("缓存了");
        }
    },
    methods:{
        ...mapActions("CinemaModule",["getcinemaList"]),
        onCancel(){
            this.$router.replace('/cinema');
        }
    }
}
</script>