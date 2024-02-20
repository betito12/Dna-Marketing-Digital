const navBar=document.getElementById("navBar")
const btnNavBar=document.querySelectorAll(".navLink")
function BtnClose(){if(navBar.classList.contains("small:hidden")||navBar.classList.contains("xsmall:hidden")){navBar.classList.remove("small:hidden");navBar.classList.remove("xsmall:hidden")}else{navBar.classList.add("small:hidden");navBar.classList.add("xsmall:hidden")}}
btnNavBar.forEach((nav)=>{nav.addEventListener("click",()=>{navBar.classList.add("small:hidden")
navBar.classList.add("xsmall:hidden")})})
window.addEventListener("scroll",()=>{const scroll=document.getElementById("btnscroll")
if(window.scrollY>100){scroll.style.display="inline"}else{scroll.style.display="none"}})