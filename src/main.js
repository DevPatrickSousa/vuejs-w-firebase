import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBalafknK8U81TX-y7LplYFLYFn8sMyr0c",
  authDomain: "vue-login-9a6ae.firebaseapp.com",
  projectId: "vue-login-9a6ae",
  storageBucket: "vue-login-9a6ae.appspot.com",
  messagingSenderId: "1045534974949",
  appId: "1:1045534974949:web:8f6b5bec3831b07d5a050c"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
