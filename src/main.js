import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { initializeApp } from 'firebase/app'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const firebaseConfig = {
  apiKey: "AIzaSyBHAVENTVvWs71_DJ5R-R2rLULdgPJqWSw",
  authDomain: "vue3-project-51789.firebaseapp.com",
  projectId: "vue3-project-51789",
  storageBucket: "vue3-project-51789.appspot.com",
  messagingSenderId: "809260777598",
  appId: "1:809260777598:web:3aa27267a8a5b13a2c182f"
}

initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
