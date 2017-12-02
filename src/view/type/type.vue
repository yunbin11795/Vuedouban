<template>
  <div class="type">
      <router-link to="/index" v-for="item in getImg" class="imgList" :key="item.id">
        <img :src="item.images.large"/>
        <span>{{item.title}}</span>
      </router-link>
  </div>
</template>


<script>
export default{
    computed:{
        getImg(){
            return this.$store.getters.getComicData;
        }
    },
    mounted(){
        this.$store.commit('setData');
    }
}

</script>

<style>
.type{
  display: flex;
  flex-flow: row wrap;
  justify-content:space-around;
}
.imgList{
  display: flex;
  flex-flow: column;
}
.type img{
  width: 210px;
  height: 210px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.type a{
  color: #666;
  font-size: 26px;
}
.type a:nth-last-of-type(1),.type a:nth-last-of-type(2){
  display: none;
}
</style>
