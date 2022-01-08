<template>
  <div>
    Chats
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { ref, getDatabase, onValue } from "firebase/database";

export default {
  setup() {
    onMounted(() => { 
      const db = getDatabase()      
      const collection = ref(db, "/chats")      
      onValue(collection, (snapshot) => {        
        console.log(snapshot);      
      });
    })
  }
}
</script>