const crSlilde=document.querySelector(".carousel-slide")
const crImg=document.querySelectorAll(".carousel-slide img")

//buttons
const prev=document.querySelector("#prevbtn");
const next=document.querySelector("#nextbtn")

//counters
let counter=1
const size=crImg[0].clientWidth;

crSlilde.style.transform='translateX('+(-size*counter)+'px)';

//eventlisteners
next.addEventListener('click',()=>{
    if(counter>= crImg.length-1){
        return;
    } 
    crSlilde.style.transition="transform 0.4s ease-in-out"
    counter++
    
   
    crSlilde.style.transform='translateX('+(-size*counter)+'px)'
})
prev.addEventListener('click',()=>{
    if(counter<=0){
        return;
    } 
    crSlilde.style.transition="transform 0.4s ease-in-out"
    counter--
    
   
    crSlilde.style.transform='translateX('+(-size*counter)+'px)'
})

crSlilde.addEventListener("transitionend",()=>{
   
    if(crImg[counter].id=== "lastclone"){
        crSlilde.style.transition="none"
        counter=crImg.length-2

        crSlilde.style.transform='translateX('+(-size*counter)+'px)'

    }
})
crSlilde.addEventListener("transitionend",()=>{
    if(crImg[counter].id=== "firstclone"){
        crSlilde.style.transition="none"
        counter=crImg.length-counter

        crSlilde.style.transform='translateX('+(-size*counter)+'px)'

    }
})