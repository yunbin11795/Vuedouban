<template>
  <el-carousel class="Carousel" >
    <el-carousel-item v-for="item in items" :key="item">
      <img :src="item.message"/>
    </el-carousel-item>
  </el-carousel>
</template>


<script>

export default {
    data(){
        return {
          items: [
            {message:require('../../assets/image/1.jpg')},
            {message:require('../../assets/image/2.jpg')},
            {message:require('../../assets/image/3.jpg')},
            {message:require('../../assets/image/4.jpg')},
            {message:require('../../assets/image/5.jpg')}
          ]
        }
    },
}
</script>

<style>
  .Carousel .el-carousel__container,.Carousel img{
    width: 750px;
    height: 469px;
  }
  .Carousel:after{
    content: '';
    display: block;
    height: 24px;
    background: #f4f4f4;
  }
</style>
