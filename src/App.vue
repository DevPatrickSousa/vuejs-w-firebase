<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/feed">Feed</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/sign-in">Sign-in</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script setup>

import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import router from './router';
const isLoggedIn = ref(false)
let auth;
onMounted(
  () =>{
auth = getAuth()
onAuthStateChanged(auth,(user) =>{
  if (user){
    isLoggedIn.value = true
  }else{
    isLoggedIn.value = false
  }
}
)
  }
)


const handleSignOut = () =>{
signOut(auth).then(
  () =>{
    router.push('/')
  }
)
}
</script>
