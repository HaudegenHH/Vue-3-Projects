<template>
   <h1 class="text-center">Die Simpsons</h1>
   <p class="text-center">Total: {{ simpCount }}</p>
   <div class="container d-flex justify-content-center">    
      <table class="table table-striped table-bordered table-hover w-50">
        <thead class="text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="simpson in simpsons" :key="simpson.id">
            <td class="py-3">{{ simpson.id }}</td>
            <td class="py-3">{{ simpson.name }}</td>
            <td>
              <button class="btn btn-primary mx-2" @click="editSimp(simpson.id, simpson.name)">Edit</button>
              <button class="btn btn-danger" @click="delSimp(simpson.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container my-3">      
        <form @submit.prevent="addSimp" class="mt-5">
          <div class="row d-flex justify-content-center">
            <div class="col-4">
              <input 
                type="text" 
                class="form-control" 
                v-model="newSimp" 
                @keyup="changeStatus" 
                ref="newSimpRef" 
              />
            </div>
            <div class="col-4">
              <button type="submit" class="btn btn-success form-control" :id="dataId" :disabled="isDisabled">{{ btnName }}</button>
            </div>
          </div>
        </form>
    </div>
</template>

<script>
import { computed, onMounted, ref } from "vue"

export default {
  setup(){
    const newSimpRef = ref("")
    const newSimp    = ref("")
    const isDisabled = ref(true)
    const btnName    = ref("Add")
    const dataId     = ref(0)

    let simpsons = ref([
        {id: 1, name: "Homer"},
        {id: 2, name: "Marge"},
        {id: 3, name: "Bart"},
        {id: 4, name: "Maggie"},
        {id: 5, name: "Lisa"},
        {id: 6, name: "Ruprecht"},
    ])

    function delSimp(id) {
      simpsons.value = simpsons.value.filter(simpson => simpson.id !== id)
    }

    function addSimp(){
      if(btnName.value == "Add"){
        if(newSimp.value == "") return        
        let id = simpsons.value[simpsons.value.length-1].id + 1 
        simpsons.value.push({id, name: newSimp.value})
        newSimp.value = ""
      } else if(btnName.value == "Edit"){
        if(newSimp.value == "") return
        simpsons.value.map(simpson => {
          if(simpson.id == dataId.value){
            simpson.name = newSimp.value
          }
        })    
        newSimp.value = ""
        btnName.value = "Add"
      }
    }
    
    function editSimp(id, name){
      newSimp.value = name
      btnName.value = "Edit"
      dataId.value = id
    }

    function changeStatus(){
      if(newSimp.value.trim() == "") return
      isDisabled.value = false
    }
    
    const simpCount = computed({
      get: () => simpsons.value.length      
    })

    onMounted(()=>{
      newSimpRef.value.focus()
    })    

    return { simpsons, newSimp, isDisabled, btnName, dataId, delSimp, addSimp,editSimp, changeStatus, newSimpRef, simpCount }
  }
}
</script>