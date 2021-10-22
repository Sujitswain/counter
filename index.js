// // document.getElementById("count-el").innerText=5

// let count=5

// count=count+4
// console.log(count)
// camelCase letters

let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")

let count=0

function increment(){
    count+=1
    countEl.textContent=count
}

function decrement(){
    count=count-1
    countEl.innerText=count
}
// for including spaces we use textContent
function save(){
    let countStr=count+" - "
    saveEl.textContent+=countStr
    countEl.innerText=0
    count=0
}