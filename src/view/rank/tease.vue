<template>
  <div class="tease">
    <div class="line" v-for="(item,index) in getTop" :key="item.id">
      <div class="content">
        <img :src="item.images.large"/>
        <div class="comic-detail">
          <h3>{{item.title}}</h3>
          <ul class="comic-show">
            <li class="painter">{{item.rating.average}}分</li>
            <li class="comic-type">{{item.original_title}}</li>
            <li class="comic-date">电影</li>
          </ul>
        </div>
      </div>
      <div class="rank-number first">{{index+1}}</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default{
    mounted(){
        this.$store.commit('setTopData');
    },
    computed:{
        getTop(){
            return this.$store.getters.getTopData;
        }
    }
  }
</script>

<style>
  @import "../../assets/css/public.css";
  @import "color.css";
</style>
