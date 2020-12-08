<template>
<van-index-bar :index-list="computedList" @change="handleLetter" :sticky='false'>
 <div v-for="item in datalist" :key="item.type">
<van-index-anchor :index="item.type" />
  <van-cell :title="data.name" v-for="(data,index) in item.list" :key="index" @click="handleCity(data.name,data.cityId)"/>
 </div>
</van-index-bar>
</template>
<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor,Toast } from 'vant';
import { mapMutations } from 'vuex';
Vue.use(IndexBar);
Vue.use(IndexAnchor);
export default {
    data(){
        return {
            datalist:[],
            indexList:[]
        }
    },
    computed:{
        computedList(){
            return this.datalist.map(item=>item.type)
        }
    },
    mounted(){
        this.http({
            url:"/gateway?k=4731861",
            headers:{
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res=>{
            // console.log(res.data.data.cities);
            this.datalist=this.handledDataCity(res.data.data.cities)
        })
    },
    methods:{
        ...mapMutations("CityModule",["changeCityId","changeCityName"]),
        handleCity(name,cityId){
            this.changeCityId(cityId);
            this.changeCityName(name);
            this.$router.back();
        },
        handleLetter(letter){
            Toast(letter);
        }, 
        handledDataCity(city){
            let letter=[];
            for(var code=65;code<91;code++){
                letter.push(String.fromCharCode(code));
            }
            let newcity=[];
            letter.forEach(item=>{
            const list=city.filter(k=> {return k.pinyin.substr(0,1).toUpperCase()===item});
            if(list.length>0){
                newcity.push({
                    type:item,
                    list:list
                });
            }
            })
            return newcity;
        }
    }
}
</script>
<style scoped>

</style>