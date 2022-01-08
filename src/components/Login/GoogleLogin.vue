<template>
  <section class="d-flex justify-content-center mb-4">
    <button 
        class="btn btn-outline-primary" 
        @click="loginWithGoogle"
        >Login with Google
    </button>
  </section>
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default {
  methods: {
    loginWithGoogle(){
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
      .then(() => {                
          this.$emit('close-login-from-google')
      })
    } 
  }
}
</script>
