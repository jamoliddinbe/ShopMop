let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')
let btn6 = document.querySelector('.btn6')
let btn7 = document.querySelector('.btn7')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')
let box5 = document.querySelector('.box5')
let box6 = document.querySelector('.box6')
let box7 = document.querySelector('.box7')
let map1 = document.querySelector('.map1')
let map2 = document.querySelector('.map2')
let map3 = document.querySelector('.map3')
let map4 = document.querySelector('.map4')
let map5 = document.querySelector('.map5')
let map6 = document.querySelector('.map6')
let map7 = document.querySelector('.map7')
let close1 = document.querySelector('.close1')
let close2 = document.querySelector('.close2')
let close3 = document.querySelector('.close3')
let close4 = document.querySelector('.close4')
let close5 = document.querySelector('.close5')
let close6 = document.querySelector('.close6')
let close7 = document.querySelector('.close7')
let userpage = document.querySelector('.userpage')


btn1.addEventListener('click', ()=>{
map1.style.display = 'flex'
close1.style.display = 'flex'
close1.style.marginTop = '20px'
map1.style.marginLeft = '400px'
box1.style.display = 'none'
})

btn2.addEventListener('click', ()=>{
  map2.style.display = 'flex'
  close2.style.display = 'flex'
  close2.style.marginTop = '20px'
  map2.style.marginLeft = '400px'
  box2.style.display = 'none'
  })

  btn3.addEventListener('click', ()=>{
    map3.style.display = 'flex'
    close3.style.display = 'flex'
    close3.style.marginTop = '20px'
    map3.style.marginLeft = '400px'
    box3.style.display = 'none'
    })

    btn4.addEventListener('click', ()=>{
      map4.style.display = 'flex'
      close4.style.display = 'flex'
      close4.style.marginTop = '20px'
      map4.style.marginLeft = '400px'
      box4.style.display = 'none'
      })

      btn5.addEventListener('click', ()=>{
        map5.style.display = 'flex'
        close5.style.display = 'flex'
        close5.style.marginTop = '20px'
        map5.style.marginLeft = '400px'
        box5.style.display = 'none'
        })

        btn6.addEventListener('click', ()=>{
          map6.style.display = 'flex'
          close6.style.display = 'flex'
          close6.style.marginTop = '20px'
          map6.style.marginLeft = '400px'
          box6.style.display = 'none'
          })

          btn7.addEventListener('click', ()=>{
            map7.style.display = 'flex'
            close7.style.display = 'flex'
            close7.style.marginTop = '20px'
            map7.style.marginLeft = '400px'
            box7.style.display = 'none'
            })

close1.addEventListener('click', ()=>{
  map1.style.display = 'none'
  close1.style.display = 'none'
  box1.style.display = 'flex'
})
close2.addEventListener('click', ()=>{
  map2.style.display = 'none'
  close2.style.display = 'none'
  box2.style.display = 'flex'
})
close3.addEventListener('click', ()=>{
  map3.style.display = 'none'
  close3.style.display = 'none'
  box3.style.display = 'flex'
})
close4.addEventListener('click', ()=>{
  map4.style.display = 'none'
  close4.style.display = 'none'
  box4.style.display = 'flex'
})
close5.addEventListener('click', ()=>{
  map5.style.display = 'none'
  close5.style.display = 'none'
  box5.style.display = 'flex'
})
close6.addEventListener('click', ()=>{
  map6.style.display = 'none'
  close6.style.display = 'none'
  box6.style.display = 'flex'
})
close7.addEventListener('click', ()=>{
  map7.style.display = 'none'
  close7.style.display = 'none'
  box7.style.display = 'flex'
})
userpage.addEventListener('click', ()=>{
  window.location.replace('/index.html')
})