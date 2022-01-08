<template>
    
    <div @click="close" 
          class="container position-fixed top-0 bg-secondary opacity-75 min-vw-100 min-vh-100">
    </div>

    <div id="login-box" class="p-2 rounded">
      <h1 class="text-center">Login</h1>    
      <hr>
      <GoogleLogin @close-login-from-google="close" />      
      <hr>
      <h6 class="text-center fw-bold">Or</h6>
      <form class="form" @submit.prevent="handleForm">
        <div class="form-group my-1">
          <label for="email">Email:</label>
          <input type="text" class="form-control" id="email" v-model="email" ref="emailRef" />
        </div>
        <div class="form-group">
          <label for="password">Passwort:</label>
          <input type="text" class="mb-5 form-control" id="password" v-model="password" />
        </div>      
        <div class="form-group">
          <button type="submit" class="btn btn-primary w-100 form-control">
            <span v-if="!isLoading">Login</span>
            <span v-else>Loading</span>
          </button>
        </div>
      </form>
    </div>
  
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import GoogleLogin from "./Login/GoogleLogin"

export default {
  emits: ["close-login-modal"],
  components: { GoogleLogin },
  data(){
    return {      
        email: '',
        password: '',
        isLoading: false     
    }    
  },
  mounted(){
    this.$refs.emailRef.focus()
  },
  methods: {
    handleForm(){  
      this.isLoading = true
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("signed in: ", user);
        this.email = ''
        this.password = ''
        this.isLoading = false
        this.close()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorCode, errorMessage);
        this.isLoading = false
      })      
    },
    close(){
      this.$emit('close-login-modal')
    }    
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 450px !important;
  border: 1px solid gray;
  background-color: #fff;
}

</style>