<template>
    <div style="margin-bottom:47px;overflow:hidden">
<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in datalist" :key="item.filmId" @click="handleClick(item.filmId)">
     <div class="big__list__info"> <img :src="item.poster" alt="">
      <div>
          <h3>{{item.name}}</h3>
          <p>观众评分:<span style="color:orange">{{item.grade}}</span></p>
          <p class="list__actors">主演:{{item.actors | actorsFilter}}</p>
          <p>{{item.nation}}|{{item.runtime}}</p>
      </div>
      </div>
  </van-cell>
</van-list>
        </van-pull-refresh>
    </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue';
import { List,Lazyload,Cell,PullRefresh } from 'vant';
Vue.use(List).use(Lazyload).use(Cell).use(PullRefresh );
Vue.filter("actorsFilter",(actors)=>{
    var list="";
    for(var k in actors){
        list+=actors[k].name+" "
    }
    return list;
})
export default {
    data(){
        return {
            datalist:[],
            finished:false,
            loading:false,
            refreshing:false,
            total:0,
            current:0
        }
    },
    methods:{
        handleClick(id){
           this.$router.push(`/detail?myid=${id}`)
        },
        onLoad(){
            console.log("到底了");
            this.current++;
            http({
                url:`/gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=7473737`,
                headers:{
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films);
                if(res.data.data.films.length==0){
                    this.finished=true
                }else{
                this.datalist=[...this.datalist,...res.data.data.films];
                this.loading=false;
                }
            });
        },
         onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
      setTimeout(() => {
          this.refreshing=false
      }, 600);
    },
    }
}
</script>
<style scoped>
.big__list__info{
    display: flex;
}
.big__list__info img{
    width:65px;
    height:95px;
     margin-right: 10px;
}
.big__list__info p{
    font-size: 13px;
    color: #555;
}
@media screen and (max-width: 960px){
    .list__actors{
    width: 300px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap
}
}
</style>