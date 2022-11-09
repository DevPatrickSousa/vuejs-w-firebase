
<template>
    <div>
        <h1>Sign Up</h1>
        <input type="text" name="email" id="email" placeholder="Email" v-model="email">
        <input type="password" name="password" id="password" placeholder="Password" v-model="password">
        <button @click="signUp">Sign Up</button>
        <p>already have an account? <router-link to="/sign-in"></router-link></p>
        <button @click="signInWithGoogle">Sign In With Google</button>
    </div>
</template>
    
<script setup>
/* eslint-disable */
import {ref} from 'vue'
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useRouter } from 'vue-router';
const email = ref('')
const password = ref('')
const router = useRouter()
const signUp = ()=> {
const auth = getAuth()

createUserWithEmailAndPassword(auth, email.value, password.value)
.then((data) =>{
    console.log('successfully registered!')
    console.log(auth.currentUser)
    router.push('/feed')
})
.catch((error)=>{
    console.log(error.code);
    alert(error.message);
}
)
}
const signInWithGoogle = ()=>{
const provider = new GoogleAuthProvider()
signInWithPopup(getAuth(), provider)
.then((result) =>{
    console.log(result.user)
    router.push('/feed')
})
.catch((error) =>{

}

)
}

</script>
    
<style>

</style>