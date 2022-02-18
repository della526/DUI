import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss'
import '../components/css/card.scss'
// import Demo from '../components/lib/Demo/index'
// import Card from '../components/lib/card/index'
import dui from '../components/lib/index'



// window.Vue = Vue;

// Vue.component('Demo',Demo)
// Vue.use(Demo)
// Vue.use(Card)
Vue.use(dui)
console.log(dui)

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
}).$mount('#app')
console.log(vm)