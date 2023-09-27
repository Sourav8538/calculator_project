
var display=document.getElementById(`screen`)
var eq =document.getElementById('equal')
var cancel =document.getElementById('ac')
eq.addEventListener('click',calculate)
cancel.addEventListener('click',clearDisplay)
var plus =document.getElementById('plus')
var minus =document.getElementById('minus')
var divd =document.getElementById('devide')
var mult =document.getElementById('mul')
var per=document.getElementById('per')
per.addEventListener('click',calculate)
plus.addEventListener('click',()=>{appendToDisplay(plus.value)})
minus.addEventListener('click',()=>{appendToDisplay(minus.value)})  
divd.addEventListener('click',()=>{appendToDisplay(divd.value)})
mult.addEventListener('click',()=>{appendToDisplay(mult.value)})
  

var zero=document.getElementById('zero')
 zero.addEventListener('click',()=>{appendToDisplay(zero.value)})

 var dualzero=document.getElementById('dualzero')
 dualzero.addEventListener('click',()=>{appendToDisplay(dualzero.value)})


var nine=document.getElementById('nine')
nine.addEventListener('click',()=>{
    appendToDisplay(nine.value)
    
})

var eight=document.getElementById('eight')
eight.addEventListener('click',()=>{
    appendToDisplay(eight.value)
    

})
var seven=document.getElementById('seven')
seven.addEventListener('click',()=>{
    appendToDisplay(seven.value)
    var a=seven.value 
    console.log(a)

})

var six=document.getElementById('six')
six.addEventListener('click',()=>{
    appendToDisplay(six.value)
    var a=six.value 
    console.log(a)

})
var five=document.getElementById('five')
five.addEventListener('click',()=>{
    appendToDisplay(five.value)
    var a=five.value 
    console.log(a)

})
var four=document.getElementById('four')
four.addEventListener('click',()=>{
    appendToDisplay(four.value)
    var a=four.value 
    console.log(a)

})

var three=document.getElementById('three')
three.addEventListener('click',()=>{
    appendToDisplay(three.value)
    var a=three.value 
    console.log(a)

})
var two=document.getElementById('two')
two.addEventListener('click',()=>{
    appendToDisplay(two.value)
    

})
var one=document.getElementById('one')
one.addEventListener('click',()=>{
    appendToDisplay(one.value )
    

})
let displayValue = '';
function appendToDisplay(value) {
  displayValue += value;
  display.innerText = displayValue;
}
function calculate() {
    displayValue = eval(displayValue);

    display.innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  display.innerText = displayValue;
}
