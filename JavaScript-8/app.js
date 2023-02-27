

let windowH = window.innerHeight;
let windowW = window.innerWidth;
let up = document.querySelector(".fa-up-long");
console.log(windowH,"uzunlugu");
console.log(windowW,"eni");
up.style.display = "none";

/* 425 */

const box = document.querySelector(".box");
let boxs = document.querySelectorAll(".boxx");

console.log(boxs);

let newBoxs = Array.prototype.slice.call(boxs)

console.log(newBoxs,"newBoks");
window.addEventListener("scroll",()=>{
    let mesafe  = window.scrollY;

    newBoxs.slice(0,7).forEach((item)=>{
        if(mesafe > 1000){
            item.style.bottom = "100px"
            item.style.backgroundColor = "green"
        }else{
            item.style.bottom = "0px"
        }
    })
    newBoxs.slice(7,10).forEach((item)=>{
        if(mesafe > 1500){
            item.style.bottom = "100px"
            item.style.backgroundColor = "red"
        }else{
            item.style.bottom = "0px"
        }
    })

    console.log(mesafe);
    if(mesafe > 1270){
        up.style.display = "block"
    }else{
        up.style.display = "none"
    }

  /*   if(mesafe >= 485){
        box.style.left = "50%"
    }else{
        
        box.style.left = "-100%"
    } */
})

up.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})



