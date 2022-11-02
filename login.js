let toogle = document.querySelector('#toogle')
let createbtn = document.querySelector('.createbtn')
let loader = document.querySelector('.loader')
let error = document.querySelector('.error')
let userEl = document.querySelector('#email')
let passwordEl = document.querySelector('#password')
let btn = document.querySelector('#btn')



createbtn.addEventListener('click', ()=>{
    window.location.replace('/create.html')
})
window.addEventListener('load', ()=>{
})


toogle.addEventListener('click', function(){
    if(passwordEl.type === 'password' ){
        passwordEl.setAttribute('type', 'text')
        toogle.classList.add('hide')
    }else{
        passwordEl.setAttribute('type', 'password')
        toogle.classList.remove('hide')
    }
    })

async function getToken (user){
    console.log(user)
   let res = await fetch ('https://pressa-exem.herokuapp.com/login',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(user)
    })
   

    let response = await res.json()
    loader.style.display = 'flex'
    if (response.token && response.token != null) {
        window.localStorage.setItem('token', response.token)
        loader.style.display = 'none'
        window.location.replace('/index.html')
    }else{
error.style.display = 'block'
    }

}
btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const user = {
        username :userEl.value,
        password:passwordEl.value
    }
    getToken(user)
})