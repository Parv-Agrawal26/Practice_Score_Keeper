const matches = document.querySelector('select')
const p1 = document.querySelector('#p1Score')
const p2 = document.querySelector('#p2Score')
const button1 = document.querySelector('#p1Button')
const button2 = document.querySelector('#p2Button')
const button3 = document.querySelector('#reset')
button1.addEventListener('click',()=>{
    let p1Val = parseInt(p1.innerText)
    let matchVal = parseInt(matches.value)
    if(p1Val<matchVal){
        p1Val++
        p1.innerText = `${p1Val}`
    }
    if(p1Val===matchVal){   
        p1.style.color='green'
        p2.style.color='red'
        button1.disabled = true;
        button2.disabled=true;
    }
    setTimeout(()=>{
        if(p1Val===matchVal){
        alert(`Congratulation! Player 1 wins`)
    }}, 100)
})
button2.addEventListener('click',()=>{
    let p2Val = parseInt(p2.innerText)
    let matchVal = parseInt(matches.value)
    if(p2Val<matchVal){
        p2Val++
        p2.innerText = `${p2Val}`
    }
    if(p2Val===matchVal){
        p2.style.color='green'
        p1.style.color='red'
        button1.disabled = true;
        button2.disabled=true;
    }
    setTimeout(()=>{
        if(p2Val===matchVal){
            alert(`Congratulation! Player 2 wins`)
        }
    }, 100)
})
button3.addEventListener('click',()=>{
    p2.style.color='black'
    p1.style.color='black'
    matches.value='5'
    p1.innerText='0'
    p2.innerText='0'
    button1.disabled = false;
    button2.disabled=false;
})