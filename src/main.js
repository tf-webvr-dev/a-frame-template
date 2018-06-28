// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Aframe from 'aframe'
import GamepadControls from 'aframe-gamepad-controls'
Aframe.registerComponent('gamepad-controls', GamepadControls)

import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA4Q2A9UOlgfQOfVoqhgzUtEJKSc1T_RxY",
  authDomain: "tf-webvr-dev.firebaseapp.com",
  databaseURL: "https://tf-webvr-dev.firebaseio.com",
  projectId: "tf-webvr-dev",
  storageBucket: "tf-webvr-dev.appspot.com",
  messagingSenderId: "192817435892"
}
firebase.initializeApp(config);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
