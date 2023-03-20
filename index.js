let nav=document.getElementsByTagName("nav")[0];
let hero=document.getElementsByClassName("hero")[0];
let bars=document.getElementsByClassName("bars")[0];

document.addEventListener("scroll",()=>{
    if(-(hero.getBoundingClientRect().y) > 100){
        nav.classList.add("visible");
    }else{
        nav.classList.remove("visible");
    }
})

bars.addEventListener("click",()=>{
    nav.classList.toggle("active");
})