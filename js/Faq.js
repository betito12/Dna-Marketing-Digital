const faq = document.querySelectorAll(".faq")
const IconFaq = document.querySelectorAll(".icon-faq")


faq.forEach( (faq, index) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")

        if(IconFaq[index].getAttribute("src") === "../../assets/icon-start.svg"){
            IconFaq[index].setAttribute("src", "../../assets/icon-close.svg")
        }else{
            IconFaq[index].setAttribute("src", "../../assets/icon-start.svg")
        }
    })
})