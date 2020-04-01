import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {name:"Pera", quantity:0},
      {name:"Melón", quantity:0},
      {name:"Sandia", quantity:0}
    ]
  },
  mutations: {
    aumentar(state,index){
      state.frutas[index].quantity ++
    },
    reiniciar(state){
      state.frutas.forEach( item =>{
          item.quantity = 0
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
