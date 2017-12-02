<template>
  <div class="rank">
    <DropList></DropList>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
import DropList from './dropList.vue';
export default{
    components:{
        DropList
    }
}
</script>

<style>


</style>
