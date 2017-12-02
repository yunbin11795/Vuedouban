/**
 * Created by yubin on 2017/6/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from  'axios';
Vue.use(Vuex);

export  default new Vuex.Store({
  state:{
    value:"全部",
    result:[],
    data:[],
    us_box_data:[],
    weekly_data:[],
    top_data:[],
    theaters_data:[],
    day:'日',
    type:'欢乐向'
  },
  getters:{
    getValue(state){
      return state.value;
    },
    getResult(state){
      return state.result;
    },
    getComicData(state){
      return state.data;
    },
    getMoodsData(state){
      return state.us_box_data;
    },
    getWeeklyData(state){
      return state.weekly_data;
    },
    getTopData(state){
      return state.top_data;
    },
    getTheatersData(state){
      return state.theaters_data;
    }
  },
  mutations:{
    setValue(state,{value}){
      state.value=value;
    },
    setValueData(state){
      axios.get('/api/movie/search?q='+state.value)
        .then((res)=> {
          state.result=res.data.subjects;
        })
    },
    setData(state){
      axios.get('/api/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a')
        .then((res)=>{
            state.data=res.data.subjects;
        })
    },
    setMoodsData(state){
      axios.get('/api/movie/us_box?apikey=0df993c66c0c636e29ecbb5344252a4a')
        .then((res)=> {
          state.us_box_data=res.data.subjects;
        });
    },
    setWeeklyData(state){
      axios.get('/api/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a')
        .then((res) => {
          state.weekly_data = res.data.subjects;
        });
    },
    setTopData(state){
      axios.get('/api/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a')
        .then((res)=> {
          state.top_data=res.data.subjects;
        });
    },
    set_in_theaters(state){
      axios.get('/api/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a')
        .then((res)=> {
          state.theaters_data=res.data.subjects;
        });
    },
    check(state,{day,type}){
      if(day===state.day||type===state.type){

      }
    }
  }
})
