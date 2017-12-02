<template>
  <div class="nav">
    <show class="new" :key="1">
        <h3 slot="title">近期必看</h3>
        <div>
          <img src="../../assets/image/2.jpg">
          <span class="nav-name">刀剑神域</span>
          <span class="nav-author">川原砾</span>
        </div>
        <div>
          <img src="../../assets/image/1.jpg">
          <span class="nav-name">fate stay night</span>
          <span class="nav-author">作者</span>
        </div>
        <div>
          <img src="../../assets/image/3.jpg">
          <span class="nav-name">东方幻想乡</span>
          <span class="nav-author">作者</span>
        </div>
    </show>
    <show class="hot" :key="2">
        <h3 slot="title">火热专题<router-link to="/special" class="el-icon-arrow-right"></router-link></h3>
        <div>
          <img src="../../assets/image/4.jpg">
          <span class="nav-name">介绍</span>
        </div>
      <div>
        <img src="../../assets/image/5.jpg">
        <span class="nav-name">介绍</span>
      </div>
      <div>
        <img src="../../assets/image/1.jpg">
        <span class="nav-name">介绍</span>
      </div>
      <div>
        <img src="../../assets/image/1.jpg">
        <span class="nav-name">介绍</span>
      </div>

    </show>
    <show class="master" :key="3">
      <h3 slot="title">大师级作者怎能不看</h3>
      <div>
        <img src="../../assets/image/5.jpg">
        <span class="nav-name">名字</span>
        <span class="nav-author">作者</span>
      </div>
      <div>
        <img src="../../assets/image/2.jpg">
        <span class="nav-name">名字</span>
        <span class="nav-author">作者</span>
      </div>
      <div>
        <img src="../../assets/image/4.jpg">
        <span class="nav-name">名字</span>
        <span class="nav-author">作者</span>
      </div>
    </show>
  </div>
</template>


<script>
import Show from '../../components/showList.vue';
export default{
    components:{
        Show
    }
}

</script>

<style scoped>
.nav span{
  display: flex;
}

.nav .hot{
  position: relative;
}
.nav .new img,.master img{
  height: 290px;
  width: 220px;
}
.nav .hot img{
  width: 342px;
  height: 176px;
}
.nav .new h3:before,.hot h3:before,.master h3:before{
  width: 50px;
  height: 50px;
  display: inline-block;
  padding: 0 20px;
}
.nav .new h3:before{
  content: url("../../assets/icon/time.svg");
}
.nav .hot h3:before{
  content: url("../../assets/icon/fire.svg");
}
.nav .master h3:before{
  content: url("../../assets/icon/master.svg");
}
.nav .nav-name{
  font-size: 26px;
  color: #5d5d5d;
  font-weight: bold;
  padding: 4px 0;
}
.nav .nav-author{
  font-size: 22px;
  color: #777777;
}
  .el-icon-arrow-right{
    position: absolute;
    right: 10px;
    top: 25px;
    color: #0190ff;
  }
</style>
