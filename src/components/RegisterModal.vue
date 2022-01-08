<template>
    <div @click="$emit('close-register-modal')" class="container position-fixed top-0 bg-secondary opacity-75 min-vw-100 min-vh-100"></div>
    <div id="login-box" class="p-1 rounded">
      <h1 class="text-center">Register</h1>    
      <hr>
      <form class="form" @submit.prevent="handleForm">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" class="form-control" id="email" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password">Passwort:</label>
          <input type="text" class="mb-5 form-control" id="password" v-model="password" />
        </div>      
        <div class="form-group">
          <button type="submit" class="btn btn-primary w-100 form-control">Register</button>
        </div>
      </form>
    </div>
  
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  emits: ["close-register-modal"],
  data(){
    return {      
        email: '',
        password: ''      
    }    
  },
  methods: {
    handleForm(){              
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorCode, errorMessage);
      });     
      
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
  height: 350px;
  border: 1px solid gray;
  background-color: #fff;
}

</style>