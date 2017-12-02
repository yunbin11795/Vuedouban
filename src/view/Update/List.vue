<template>
  <div class="list">
    <dropdown></dropdown>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Dropdown from './Dropdown.vue';

  export default {
      components:{
          Dropdown
      }
  }
</script>
