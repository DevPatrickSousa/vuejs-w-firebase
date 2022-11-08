
<template>
    <div>
        <h1>Sign In</h1>
        <input type="text" name="email" id="email" placeholder="Email" v-model="email">
        <input type="password" name="password" id="password" placeholder="Password" v-model="password">
        <button @click="signUp">Sign In</button>
        <p v-if="errMsg">{{errMsg}}</p>
        <p>already have an account? <router-link to="/sign-in"></router-link></p>
        <button @click="signInWithGoogle">Sign In With Google</button>
    </div>
</template>
    
<script setup>
/* eslint-disable */
import {ref} from 'vue'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useRouter } from 'vue-router';
const email = ref('')
const password = ref('')
const errMsg = ref()
const router = useRouter()
const signUp = ()=> {
const auth = getAuth

    signInWithEmailAndPassword(getAuth(), email.value, password.value)
.then((data) =>{
    console.log('successfully signed in!')

    console.log(auth.currentUser)

    router.push('/feed')
})
.catch((error)=>{
    console.log(error.code);
    //alert(error.message);
    switch (error.code) {
                case 'auth/invalid-email'
                    : errMsg.value = 'Invalid email';
                    break;
                case 'auth/user-not-found'
                    : errMsg.value = 'User not found';
                    break;
                case 'auth/wrong-password'
                    : errMsg.value = 'Incorret password';
                    break;
                
            }
}
)
}
const signInWithGoogle = ()=>{

}

</script>
    
<style>

</style>