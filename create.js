let btn = document.querySelector('#btn')

let back = document.querySelector('.back')

back.addEventListener('click', ()=>{
    window.location.replace('/login.html')
})


let username = document.querySelector('#email')
let password = document.querySelector('#password')
let gender = document.querySelector('#select')


toogle.addEventListener('click', function(){
    if(password.type === 'password' ){
        password.setAttribute('type', 'text')
        toogle.classList.add('hide')
    }else{
        password.setAttribute('type', 'password')
        toogle.classList.remove('hide')
    }
    })

async function getToken (user){
    console.log(user)
   let res = await fetch ('https://pressa-exem.herokuapp.com/register',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(user)
    })
    let response = await res.json()
    // console.log(response)
    if (response.token && response.token != null ) {
        window.localStorage.setItem('token', response.token)
        window.location.replace('/index.html')
    }
    }

    btn.addEventListener('click',(e)=>{
         e.preventDefault()
         const user = {
            username:username.value,
            password:password.value,
            gender:gender.value
         }
         getToken(user)
    })
    
