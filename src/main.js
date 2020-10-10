import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBm3zC3MsDpCBzQJotcnPRuk5z-hKelfcs",
    authDomain: "app-login-55046.firebaseapp.com",
    databaseURL: "https://app-login-55046.firebaseio.com",
    projectId: "app-login-55046",
    storageBucket: "app-login-55046.appspot.com",
    messagingSenderId: "70307070284",
    appId: "1:70307070284:web:8f28c2d38bc05ba3804fe9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
