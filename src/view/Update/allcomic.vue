<template>
  <div class="all">
    <div class="line" v-for="subject in getAll">
      <div class="content">
        <img class="imgLazyLoad" :src="subject.images.large"/>
        <div class="comic-detail">
          <h3>{{subject.title}}</h3>
          <ul class="comic-show">
            <li class="painter" v-if="subject.subtype==='movie'">
              电影
            </li>
            <li class="comic-type">{{subject.rating.average}}分</li>
            <li class="comic-date">{{subject.pubdates[0]}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    mounted(){
        this.$store.commit('setData');
    },
    computed:{
        getAll(){
            return this.$store.getters.getComicData;
        }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/public.css";
  @import "number.css";
</style>
