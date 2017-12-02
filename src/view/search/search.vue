<template>
  <div class="search">
    <SearchHeader></SearchHeader>
    <SearchContent></SearchContent>
  </div>
</template>


<script>
  import SearchHeader from './searchHeader.vue';
  import  SearchContent from './searchContent.vue'
  export default{
      components:{
          SearchHeader,SearchContent
      }
  }
</script>

<style>
.test{
  display: none;
}

</style>
