<template>
    <nav class="container-fluid">
        <router-link to="/">Home</router-link>
        <router-link to="/simpsons">Simpsons</router-link>
        <router-link to="/calendar">Kalender</router-link>
        <router-link to="/calculator">Taschenrechner</router-link>
        <router-link to="/chat">Chat</router-link>
        <button v-if="isLoggedIn" type="button" class="btn btn-lg btn-outline-primary mt-1 text-decoration-none fs-3 btn-link float-end" @click="logout">Logout</button>
        <button v-else type="button" class="btn btn-lg btn-outline-primary mt-1 text-decoration-none fs-3 btn-link float-end" @click="$emit('open-login-modal')">Login</button>         
        <button type="button" class="btn btn-lg btn-outline-primary mt-1 text-decoration-none fs-3 btn-link float-end" @click="$emit('open-register-modal')">Register</button>
    </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  props: { 
    isLoggedIn: {
      type: Boolean,
      required: true
    } 
  },
  methods: {
    logout(){
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log("logged out successfully");
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style>
    nav {
        background-color: #00f;
        height: 70px;
    }

    nav a {
        font-size: 25px;
        text-decoration: none;
        display: inline-block;
        color: gray;
        cursor: pointer;  
        padding: 15px 5px;
        margin-right: 10px;              
    }
    nav a:hover {
        color: white;
    }
</style>
