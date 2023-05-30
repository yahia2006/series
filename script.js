function run(){
    const vid=document.getElementById('vid')
    vid.play()
}
const navopen=document.getElementById('S')
navopen.addEventListener('click',function(){
    document.getElementById('nav').style.transform='translateX(0px)'
})
const navclose=document.getElementById('close')
navclose.addEventListener('click',function(){
    document.getElementById('nav').style.transform='translateX(-100%)'
})


const search=document.getElementById('serachnow')
search.addEventListener('click',function(){
    document.getElementById('ser').style.scale='1'
    document.getElementById('serachnow').style.display='none'
    document.getElementById('serachide').style.display='block'
})
const hide=document.getElementById('serachide')
hide.addEventListener('click',function(){
    document.getElementById('ser').style.scale='1'
    document.getElementById('serachide').style.display='none'
    document.getElementById('serachnow').style.display='block'
    document.getElementById('ser').style.scale='0'
})

const venom=document.getElementById('venom')
venom.addEventListener('click',function(){
    window.location='Movies/venom.html'
})
