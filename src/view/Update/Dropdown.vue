<template>
    <div class="dropdownList">
      <el-dropdown menu-align="start" @command="handleCommand">
  <span class="el-dropdown-link" >
   {{choose}}<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="即将上线">
            <router-link to="/list/all" class="link">即将上线</router-link>
          </el-dropdown-item>
          <el-dropdown-item command="正在热映">
           <router-link to="/list/japan" class="link">正在热映</router-link>
          </el-dropdown-item>
          <el-dropdown-item command="国产漫画">
            <router-link to="/list/china" class="link">国产漫画</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script>
  export default{
      data(){
          return {
              choose:'即将上线'
          };
      },
      methods:{
        handleCommand(command){
            this.choose=command;
        }
      }
  }
</script>

<style scoped>
  .dropdownList{
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    border-bottom: 1px solid #666;
  }
   .el-dropdown{
    font-size: 30px;
    padding-left: 20px;
  }
   .el-dropdown-menu{
    height: 50px;
    display: flex;
    align-items: center;
     margin-left: 20px;
     font-size: 30px;
  }
 .link{
    color: #000;
  }
   .link:focus{
    color: #000;
  }
</style>
