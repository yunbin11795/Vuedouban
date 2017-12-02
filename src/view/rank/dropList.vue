<template>
  <div class="dropList">
    <div class="choose-show">
      <div class="choose-header">
        <span ref="drop" @click="showList">分类<i class="el-icon-caret-bottom"></i></span>
        <span ref="day">日</span>
        <span ref="type">欢乐向</span>
      </div>
      <div class="choose-body">
        <ul class="choose-rank">
          <li><router-link to="/rank/moods">北美票房</router-link></li>
          <li><router-link to="/rank/tease">人气排行</router-link></li>
          <li><router-link to="/rank/take">上升排行</router-link></li>
        </ul>
      </div>
    </div>
    <div class="choose-content" ref="list">
        <div class="choose-title">
          <span @click="changeTime">选择分类</span>
          <span @click="changeType">选择时间</span>
        </div>
        <div class="choose-day">
          <ul @click="getValue($event)">
            <li v-for="value in item">{{value.message}}</li>
          </ul>
        </div>
    </div>
  </div>
</template>


<script>
  let isDay=false;
export default{
    data(){
        return{
            item:[
              {message:'全部'},
              {message:'欢乐向'},
              {message:'后宫'},
              {message:'热血'}
            ]
        }
    },
  methods:{
      changeType(){
          this.item=[
            {message:'日'},
            {message:'周'},
            {message:'月'},
            {message:'总'},
          ];
        isDay=true;
      },
      changeTime(){
        this.item=[
          {message:'全部'},
          {message:'欢乐向'},
          {message:'后宫'},
          {message:'热血'}
        ];
        isDay=false;
      },
      getValue(e){
          const Target=e.target;
          if(isDay){
            this.$refs.day.innerHTML=Target.innerHTML;
          }
          else {
              this.$refs.type.innerHTML=Target.innerHTML;
          }
          this.$refs.list.style.display='none';
          thie.$store.commit('check',{
              day:this.$refs.day.innerHTML,
              type:this.$refs.type.innerHTML
          })
      },
      showList(){
        this.$refs.list.style.display='flex';
      }
  },
}
</script>

<style>
.choose-show{
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 26px;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid #666;
}
.choose-show .choose-body .choose-rank{
  display: flex;
}
.choose-header{
  width: 300px;
  text-align: left;
}
.choose-rank a{
  color: #000;
}
.choose-rank a:focus{
  color: #0090ff;
}
.choose-rank li:after{
  content: '|';
  display: inline-block;
  padding: 0 4px;
}
.choose-rank li:nth-last-of-type(1):after{
  content: '';
}
  .choose-content{
    display: none;
  }
  .choose-title{
    display: flex;
    flex-flow: column;
    background: #eee;

  }
.choose-title span{
  padding: 0 10px;
  width: 116px;
}
.choose-day {
  width: 100%;
}
.choose-day ul{
  display: flex;
  flex-flow: column;
}
.choose-day li{
  width: 100%;
  text-align: left;
  padding-left: 20px;
  border-bottom: 1px solid #666;
}
.choose-title span,.choose-day li{
    height: 50px;
    line-height: 50px;
  }
.choose-title span:hover{
  background: #fff;
}
.el-icon-caret-bottom:before{
  color: #0090ff;
}
</style>
