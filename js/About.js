const navBar = document.getElementById("navBar-about")

//menu mobile
function BtnClose() {

    if (navBar.classList.contains("small:hidden") || navBar.classList.contains("xsmall:hidden")) {

        navBar.classList.remove("small:hidden")
        navBar.classList.remove("xsmall:hidden")
    } else {
        navBar.classList.add("small:hidden")
        navBar.classList.add("xsmall:hidden")
    }
}