<template>
  <div class="Japan">
    <div class="line" v-for="subject in getTheaters">
      <div class="content">
        <img :src="subject.images.large"/>
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
        this.$store.commit('set_in_theaters');
    },
    computed:{
        getTheaters(){
            return this.$store.getters.getTheatersData
        }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/public.css";
  @import "number.css";
</style>
