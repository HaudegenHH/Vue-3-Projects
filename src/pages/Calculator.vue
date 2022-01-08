<template>
  <div class="calculator-grid">
    <div class="output">
      <div class="previous-operand">{{ prevNum }} {{ selectedOperation }} {{ currNum }}</div>
      <div class="current-operand">{{ currNum }}</div>
    </div>
    <button @click="pressed('AC')" class="span-two">AC</button>
    <button @click="pressed('DEL')">DEL</button>
    <button @click="pressed('/')">/</button>
    <button @click="pressed('1')">1</button>
    <button @click="pressed('2')">2</button>
    <button @click="pressed('3')">3</button>
    <button @click="pressed('*')">*</button>
    <button @click="pressed('4')">4</button>
    <button @click="pressed('5')">5</button>
    <button @click="pressed('6')">6</button>
    <button @click="pressed('+')">+</button>
    <button @click="pressed('7')">7</button>
    <button @click="pressed('8')">8</button>
    <button @click="pressed('9')">9</button>
    <button @click="pressed('-')">-</button>
    <button @click="pressed('.')">.</button>
    <button @click="pressed('0')">0</button>
    <button @click="pressed('=')" class="span-two">=</button>
  </div>

</template>

<script>
import { onMounted, onUnmounted, ref } from "vue"
export default {
  setup(){
    const operations = ['+','-','*','/']
    const numbers    = ['1','2','3','4','5','6','7','8','9','0']
    const prevNum = ref("")
    const currNum = ref("")
    const selectedOperation = ref("")

    function pressed(val){
      if(val == "=" || val == "Enter") calculate()
      else if(val == "AC") allClear()
      else if(val == "DEL" || val == "Backspace") delLast()
      else if(operations.includes(val)) applyOperation(val)
      else if(numbers.includes(val)) appendNum(val)
    }
    function calculate(){
      if(selectedOperation.value == "+") sum();
      else if(selectedOperation.value == "-") subtract();
      else if(selectedOperation.value == "*") multiply();
      else if(selectedOperation.value == "/") divide();
      prevNum.value = ''
      selectedOperation.value = ''
    }

    const sum = () => currNum.value = +prevNum.value + +currNum.value
    const subtract = () => currNum.value = prevNum.value - currNum.value
    const multiply = () => currNum.value = prevNum.value * currNum.value
    const divide = () => currNum.value = prevNum.value / currNum.value

    const allClear = () => { 
      currNum.value = ''
      prevNum.value = ''
      selectedOperation.value = ''
    }
    
    const delLast = () => currNum.value = currNum.value.substr(0, currNum.value.length-1)

    const applyOperation = (val) => {
      calculate()
      prevNum.value = currNum.value
      currNum.value = ""      
      selectedOperation.value = val
    }
    
    const appendNum = (val) => currNum.value = currNum.value + val

    const handleKeydown = (e) => pressed(e.key)
    onMounted(()=> window.addEventListener('keydown', handleKeydown))
    onUnmounted(()=> window.removeEventListener('keydown', handleKeydown))
    
    return { currNum, prevNum, selectedOperation, pressed }
  }  
}
</script>


<style>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  font-weight: normal;
}

body {
  background: linear-gradient(to right, #00AAFF, #00FF6C);
}

.calculator-grid {
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
}

.calculator-grid > button {
  cursor: pointer;
  font-size: 2rem;
  border: 1px solid white;
  outline: none;
  background-color: rgba(255,255,255,.75);
}

.calculator-grid > button:hover {
  background-color: rgba(255,255,255,.9);
}
.span-two {
  grid-column: span 2;
}

.output {
  grid-column: 1 / -1;
  background-color: rgba(0,0,0,.75);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
}
.output .previous-operand {
  color: rgba(255,255,255,.75);
  font-size: 1.5rem;
}

.output .current-operand {
  color: white;
  font-size: 2.5rem;
}
</style>