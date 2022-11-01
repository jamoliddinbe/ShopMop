let url = "https://fakestoreapi.com/products"
let korzinka = document.querySelector('.korzinka')
let plus = document.querySelector('.plus')
let container = document.querySelector('.container')
let korbox = document.querySelector('.korbox')
let korboxbtn =document.querySelector('.korboxbtn')
let img = document.querySelector('.img')
let categorybox = document.querySelector('.category')
let imgactive = document.querySelector('.img-active')
let imgnorm = document.querySelector('.imgnorm')
let filials = document.querySelector('.about')
var basket = []
let selectEl = document.querySelector('#tanlash')
let search = document.querySelector('#search')
let searchbtn = document.querySelector('#searchbtn')
let soni = document.querySelector('.soni')


if (!window.localStorage.getItem('token')) {
    window.location.replace('./login.html')
}

if(window.close){
window.localStorage.clear()
}







selectEl.addEventListener('change', async () =>{
    let data =  await getData2().then(res => res)
    let filtered = data.filter(el => el.category == tanlash.value )
    render(categorybox, filtered)
})

searchbtn.addEventListener('click', async () =>{
    let data =  await getData2().then(res => res)
    let filtered = data.filter(el => el.title.includes(search.value) )
    render(categorybox, filtered)

})




// filliallaga o'tiw
filials.addEventListener('click', ()=>{
    window.location.replace('/filials.html')
})
// filliallaga o'tiw





//  reklama
setInterval(() => {
    img.style.display = 'block'
    imgactive.style.display = 'none'
    imgnorm.style.display = 'none'
}, 2000);
setInterval(() => {
    img.style.display = 'none'
    imgnorm.style.display = 'block'
    imgactive.style.display = 'none'
}, 4000);
setInterval(() => {
    imgactive.style.display = 'block'
    imgnorm.style.display = 'none'
    img.style.display = 'none'
}, 6000);
//  reklama



// korzinka kiriw ciqiw
korzinka.addEventListener( 'click', ()=>{
    korbox.style.display = 'flex'
    korbox.style.flexDirection = 'column'
} )

korboxbtn.addEventListener( 'click', ()=>{
    korbox.style.display = 'none'
} )
// korzinka kiriw ciqiw


// tovarlarni yaratish

async function getData2(){
    let res = await fetch('https://fakestoreapi.com/products')
    res = await res.json()
    return res
  
 }



async function getData(){
   let res = await fetch('https://fakestoreapi.com/products')
   res = await res.json()
    render(categorybox,res)
}
getData()

async function render(list, data){
list.innerHTML = null

data?.forEach(el=>{
    let box1  =   document.createElement('div')
    box1.className = 'goodbox'
    box1.style.width = '350px'
    box1.style.height = 'auto'
    box1.style.border = '1px solid black'
    box1.style.display = 'flex'
    box1.style.flexDirection = 'column'
    box1.style.alignItems = 'center'
    box1.style.marginLeft = '35px'
    box1.style.marginTop = '20px'
    box1.style.padding = '10px'
    let img1 = document.createElement('img')
    img1.className = 'goodimg'
    img1.style.width = '300px'
    img1.style.marginTop = '20px'
    img1.style.height = '50%'
    img1.src = el.image
    let h3 = document.createElement('h3')
    h3.className = 'goodh2'
    h3.textContent = el.title.slice(0,20)
    let p1 = document.createElement('p')
    p1.className = 'goodp'
    p1.textContent = el.description
    let priceEl = document.createElement('span')
    priceEl.className = 'price'
    priceEl.textContent = el.price +'$'
    priceEl.style.fontSize = '32px'
    priceEl.style.color = 'green'

    let btnEl = document.createElement('button')
    btnEl.className = 'addbtn'
    btnEl.textContent = 'Add'
    btnEl.value = el.id
    btnEl.style.borderRadius = '25px'
    btnEl.style.width = '120px'
    btnEl.style.height = '40px'
    btnEl.style.background = 'red'
    btnEl.style.color = 'white'
    btnEl.style.marginTop = '50px'

    btnEl.addEventListener('click',(e) =>{
        let basketItem = data.find(el => el.id == e.target.value)
           basket.push(basketItem)
       localStorage.setItem('basket',JSON.stringify(basket))})
       box1.append(img1, h3, p1, priceEl, btnEl )
       list.append(box1)
       list.style.display = 'flex'
       list.style.flexWrap = 'wrap'
       list.style.marginTop = '50px'

       if (document.getElementsByClassName('elbox').length < 1 ) {
        soni.style.display = 'none'
       }else{
        soni.textContent = document.getElementsByClassName('elbox').length
       }
})
}

// tovarlarni yaratish




function basketRender(list){
    let data = localStorage.getItem('basket')
    data = JSON.parse(data)
    list.innerHtml = null
   data?.forEach(el =>{

    let divEl = document.createElement('div')
    divEl.className = 'elbox'
    divEl.style.display = 'flex'
    divEl.style.alignItems = 'center'
    divEl.style.justifyContent = 'space-around'
    divEl.style.marginTop = '10px'
    let imgEl = document.createElement('img')
    imgEl.className = 'tovarrasmi'
    imgEl.style.width = '200px'
    imgEl.style.height = '200px'
    imgEl.src = el.image
    let spanEl = document.createElement('span')
    spanEl.className = 'price'
    spanEl.style.color = 'blue'
    spanEl.style.fontSize = '32px'
    spanEl.textContent = el.price + '$'
    let btnEl = document.createElement('button')
    btnEl.className = 'delete'
    btnEl.value = el.id 
    btnEl.style.borderRadius = '25px'
    btnEl.style.width = '120px'
    btnEl.style.background = 'red'
    btnEl.style.color = 'white'
    btnEl.textContent = 'Delete'

   btnEl.addEventListener('click',() =>{
    divEl.style.display = 'none'
  localStorage.removeItem('basket')
 })
 

   divEl.append(imgEl,spanEl,btnEl)
   list.append(divEl)
 })
}
basketRender(korbox)


