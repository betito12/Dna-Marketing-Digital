const form=document.getElementById("form")
const userName=document.getElementById("userName")
const userEmail=document.getElementById("userEmail")
const userPhone=document.getElementById("userPhone")
const userWeb=document.getElementById("userWeb")
const btnForm=document.getElementById("btn-submit-form")
const navBar=document.getElementById("navBar")
if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/serviceWorker.js").then(res=>console.log("service worker ok")).catch(err=>console.log("service worker not registered",err))})}
function BtnClose(){if(navBar.classList.contains("small:hidden")||navBar.classList.contains("xsmall:hidden")){navBar.classList.remove("small:hidden")
navBar.classList.remove("xsmall:hidden")}else{navBar.classList.add("small:hidden")
navBar.classList.add("xsmall:hidden")}}
function checkInputUsername(){const usernameValue=userName.value;if(usernameValue===""){errorAlert(userName,"Preencha com um Nome!")}else if(usernameValue.length<8){errorAlert(userName,"O nome deve ter no minimo 8 caracteres!")}else{const formItem=userName.parentElement;formItem.className="form-content"}}
function checkInputEmail(){const ValidationExpressionEmail=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;const emailValue=userEmail.value;if(emailValue===""){errorAlert(userEmail,"O email é obrigatório.")}else if(!ValidationExpressionEmail.test(emailValue)){errorAlert(userEmail,"Digite um E-mail Valido!.")}else{const formItem=userEmail.parentElement;formItem.className="form-content"}}
function checkInputPhone(){const Phone=userPhone.value;const ValidationExpressionPhone=/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/
if(Phone===""){errorAlert(userPhone,"O Número de Telefone é obrigatório.")}else if(!ValidationExpressionPhone.test(Phone)){errorAlert(userPhone,"Digite um Número de Telefone Valido!")}else{const formItem=userPhone.parentElement;formItem.className="form-content"}}
function errorAlert(input,message){const formItem=input.parentElement;const textMessage=formItem.querySelector("p")
textMessage.innerText=message;formItem.className="form-content error"}
function checkForm(){checkInputUsername();checkInputEmail();checkInputPhone();const formItems=form.querySelectorAll(".form-content");const isValid=[...formItems].every((item)=>{return item.className==="form-content"});if(isValid){HandlerFormContact();Swal.fire({title:'Formulário enviado!',text:'Você será redirecionado para o whatsApp.',icon:'success',confirmButtonText:'OK'})}}
function HandlerFormContact(){const{value}=userWeb;const ValidUrlValue=value.length<1?"Não possui um site":value;const EndPoint=`https://api.whatsapp.com/send/?phone=71996193437&text=Nome+Da+Pessoa:+${userName.value}%0AE-mail:+${userEmail.value}%0ATelefone:+${userPhone.value}%0AWebSite:+${ValidUrlValue}`
window.open(EndPoint);cleanInput()}
function cleanInput(){userEmail.value=""
userName.value=""
userPhone.value=""
userWeb.value=""}
function HandlerPlanContact(plan){const EndPoint=`https://api.whatsapp.com/send/?phone=71996193437&text=Quero+Adquirir+o+Plano:+${plan}`;window.open(EndPoint)}
form.addEventListener("submit",(event)=>{event.preventDefault();checkForm()});userName.addEventListener("blur",()=>{checkInputUsername()})
userEmail.addEventListener("blur",()=>{checkInputEmail()})
userPhone.addEventListener("blur",()=>{checkInputPhone()})
window.addEventListener("scroll",()=>{const scroll=document.getElementById("btnscroll")
if(window.scrollY>400){scroll.style.display="inline"}else{scroll.style.display="none"}})