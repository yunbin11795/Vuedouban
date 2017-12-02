<template>
  <div class="header-tag">
    <ul>
      <li><router-link to="/index">推荐</router-link></li>
      <li><router-link to="/list" >更新</router-link></li>
      <li><router-link to="/type">分类</router-link></li>
      <li><router-link to="/rank">排行</router-link></li>
      <li><router-link to="/special">专题</router-link></li>
     <router-link to="/search"><li class="el-icon-search"></li></router-link>
    </ul>
  </div>
</template>


<script>
export default{

}

</script>

<style >
  .header-tag ul{
    display: flex;
    flex-flow: row nowrap;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
    background: #fff;
  }
  .el-icon-search:before{
    font-size: 38px;
  }
  .el-icon-search:hover{
    cursor: pointer;
  }
  .header-tag a{
    font-weight: bold;
    color: #333;
  }
  .header-tag a:focus{
    color: #0090ff;
  }
  .header-tag:after{
    content: '';
    display: block;
    height: 5px;
    background: linear-gradient(to right,#1e7dbd,#a81ebd);
  }

</style>
