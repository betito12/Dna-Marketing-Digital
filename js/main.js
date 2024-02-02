

// A FUNÇÃO DE ENVIAR EMAILS AINDA NÃO ESTÁ COM DEFAULT ENTÃO A PAGINA VAI PRÉ CARREGAR
function SubmitForm(e){

    e.preventDefault()
}

const navBar = document.getElementById("navBar")

function BtnClose(){

if(navBar.classList.contains("small:hidden") || navBar.classList.contains("xsmall:hidden")){

    navBar.classList.remove("small:hidden")
    navBar.classList.remove("xsmall:hidden")
}else{
    navBar.classList.add("small:hidden")
    navBar.classList.add("xsmall:hidden")
}
   
}