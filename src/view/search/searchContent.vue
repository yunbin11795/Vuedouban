<template>
  <div class="searchConten" ref="box">
    <div class="line" v-for="subject in getResultData">
      <div class="content">
        <img :src="subject.images.large"/>
        <div class="comic-detail">
          <h3>{{subject.title}}</h3>
          <ul class="comic-show">
            <li class="painter">最高分:{{subject.rating.max}}</li>
            <li class="comic-type">电影</li>
            <li class="comic-date">{{subject.year}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    computed:{
      getResultData(){
          return this.$store.getters.getResult;
      }
    },
     mounted(){
          this.$store.commit('setValueData');
      },
    watch: {
      getResultData: function () {
        this.$store.commit('setValueData');
      },
    }
  }
</script>

<style>
  @import "../../assets/css/public.css";
</style>
