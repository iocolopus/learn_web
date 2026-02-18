const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")


navBar.addEventListener("mouseenter", () => {
    navTexts.forEach(navText => navText.classList.add(""transparent""))
    setTimeout( () => {
        navTexts.forEach(
        navText => {
            navText.classList.add("hovered", )
            navText.classList.replace("transparent", "opaque")
        }
    )
    }, 150)
    
    
})

navBar.addEventListener("mouseleave", () => {
    
    navTexts.forEach(
        navText => navText.classList.remove("hovered")
    )
})