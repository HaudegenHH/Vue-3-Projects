<template>
  <h1 class="text-center my-3">Calender</h1>
  <div class="container w-50" style="font-size: 20px;">    
    <div class="py-2 fw-bold">{{ currentMonthName }} {{ currentYear }}</div>                  
    <section class="d-flex">
      <p v-for="day in days" :key="day" class="px-4 pb-2 text-center" style="width: 13%;">
        {{ day }}
      </p>
    </section>  
    <section class="container d-flex flex-wrap">
        <p v-for="day in startDay()" :key="day" class="px-4 text-center" style="width: 13.3%;"></p>
        <p v-for="num in daysInMonth(currentYear,currentMonth)" 
            :key="num" class="px-3 text-center" 
            style="width: 13.3%"
            :class="currentDateClass(num)">{{ num }}</p>
    </section>
    <section class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn btn-outline-primary" @click="prev" type="button">Prev</button>
      <button class="btn btn-outline-primary" @click="next" type="button">Next</button>
    </section>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      days: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    }
  },
  methods: {
    daysInMonth(year,month){
      return new Date(year, month, 0).getDate()
    },
    startDay(){
      return new Date(this.currentYear,this.currentMonth-1, 1).getDay()
    },
    next() {
      if(this.currentMonth === 12){
        this.currentMonth = 1
        this.currentYear +=1
      } else {
        this.currentMonth++
      }
    },
    prev() {
      if(this.currentMonth === 1){        
        this.currentMonth = 12
        this.currentYear -= 1
      } else {
        this.currentMonth--
      }
    },
    currentDateClass(num){
      let computedFullDate = new Date(this.currentYear, this.currentMonth-1, num).toDateString()
      let currentFullDate  = new Date().toDateString()

      return computedFullDate == currentFullDate ? 'text-white bg-info rounded' : ''
    }
  },
  computed: {
    currentMonthName(){
      return new Date(this.currentYear, this.currentMonth - 1).toLocaleString('default', {month:'long'})      
    }
  }
}
</script>
