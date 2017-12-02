<template>
  <div class="searchHeader">
    <el-row class="demo-autocomplete">
      <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        icon="search"
        @select="handleSelect"
      ></el-autocomplete>
    </el-row>
  </div>
</template>


<script>
  export default{
    data() {
      return {
        restaurants: [],
        state1: '',
      };
    },
    methods:{
      querySearch(queryString, cb) {
        let restaurants = this.restaurants;
        let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "X战警" },
          { "value": "异形" },
          { "value": "神奇女侠" },
          { "value": "蜘蛛侠" }
        ];
      },
      handleSelect(item) {
        return this.$store.commit('setValue', {
          value: item.value
        })
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style>
.searchHeader .demo-autocomplete{
  height: 80px;
  font-size: 36px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #666;
}
.searchHeader .el-input__inner{
  height: 60px;
  width: 640px;
  font-size: 30px;
  background: #e5e5e5;
  margin-left: 20px;
  border: none;
}

.el-autocomplete-suggestion li{
    font-size: 30px;
}
.searchHeader .el-input__icon{
  right: 20px;
  top: 11px;
}
</style>
