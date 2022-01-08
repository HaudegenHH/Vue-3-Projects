<template>
  <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" @open-register-modal="isRegisterOpen = true" />
  <router-view></router-view>
  <LoginModal @close-login-modal="isLoginOpen = false" v-if="isLoginOpen" />
  <RegisterModal @close-register-modal="isRegisterOpen = false" v-if="isRegisterOpen" />
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  components: { AppHeader, LoginModal, RegisterModal },
  data() {
    return {
      isLoginOpen: false,
      isRegisterOpen: false,
      isLoggedIn: false,
      authUser: {}
    };
  },
  mounted() {    
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {        
        this.isLoggedIn = true
        this.authUser = user      
      } else {
        this.isLoggedIn = false
        this.authUser = {}
        console.log('User is not signed in');
      }
    })
  }
}
</script>
