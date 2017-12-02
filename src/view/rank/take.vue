<template>
  <div class="take">
    <div class="line" v-for="(item,index) in  getWeek" :key="item.id">
      <div class="content">
        <img :src="item.subject.images.large"/>
        <div class="comic-detail">
          <h3>{{item.subject.title}}</h3>
          <ul class="comic-show">
            <li class="painter">{{item.subject.rating.average}}分</li>
            <li class="comic-type">{{item.subject.pubdates[0]}}</li>
            <li class="comic-date">上升名次:{{item.delta}}</li>
          </ul>
        </div>
      </div>
      <div class="rank-number first">{{index+1}}</div>
    </div>
  </div>
</template>

<script>
  export default{
    mounted(){
      this.$store.commit('setWeeklyData');
    },
    computed:{
        getWeek(){
            return this.$store.getters.getWeeklyData;
        }
    }
  }
</script>

<style>
  @import "../../assets/css/public.css";
  @import "color.css";
</style>
