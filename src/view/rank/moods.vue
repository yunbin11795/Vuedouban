<template>
  <div class="moods">
    <div class="line" v-for="(item,index) in getMoods" :key="item.id">
      <div class="content">
        <img :src="item.subject.images.large"/>
        <div class="comic-detail">
          <h3>{{item.subject.title}}</h3>
          <ul class="comic-show">
            <li class="painter">{{item.subject.rating.average}}分</li>
            <li class="comic-type">票房:{{item.box}}</li>
            <li class="comic-date">电影</li>
          </ul>
        </div>
      </div>
      <div class="rank-number">{{item.rank}}</div>
  </div>
</div>
</template>

<script>
  export default{
    mounted(){
      this.$store.commit('setMoodsData');
    },
    computed:{
        getMoods(){
            return this.$store.getters.getMoodsData
        }
    }
  }
</script>

<style>
@import "../../assets/css/public.css";
@import "color.css";
</style>
