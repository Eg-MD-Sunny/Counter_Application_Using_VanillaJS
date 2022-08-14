//Select Dom Elements
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const resetEl = document.getElementById('reset');

//initial state
let count = 0;

//event listeners
incrementEl.addEventListener('click',()=>{
    count++;
    counterEl.innerText = count;
})
decrementEl.addEventListener('click',()=>{
    count--;
    if(count<0){
        count = 0; 
    }
    counterEl.innerText = count;
})