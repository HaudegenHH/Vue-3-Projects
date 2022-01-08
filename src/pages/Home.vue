<template>
  
    <div id="home-cont" class="text-center">
      <h1>Willkommen!</h1>
      <h4 class="py-3">Zusammenstellung mehrerer Vue Components, PlugIns, Mixins,etc:</h4>
      <ul>
        <li v-for="(comp, idx) in comps" 
        :key="comp" 
        style="margin: 0; list-style: none;"
        >{{ idx + 1 }}. {{ comp }}</li>
      </ul>
    </div>
  
</template>
<script>
export default {
  data(){
    return {
      comps: ["CRUD Anwendung","Kalender","Vue-Router, Vuex","REST Api-App","Lifecycle Hooks","Login-System (mit Firebase DB & self-made Modal)", "Taschenrechner mit der Composition API","Real-Time-Chat (mit Firebase DB)"]
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

  #home-cont {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);    
  }
</style>
