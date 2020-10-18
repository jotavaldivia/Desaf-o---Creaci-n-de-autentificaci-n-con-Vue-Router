import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import {firebaseApp} from './firebase/firebaseInit.js'
Vue.config.productionTip = false

  const firebase = firebaseApp

  firebase.auth().onAuthStateChanged(function(){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
  