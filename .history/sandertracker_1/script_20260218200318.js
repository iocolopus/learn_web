const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")


navBar.addEventListener("mouseenter", () => {
    setTimeout( () => {
        navTexts.forEach(
        navText => {
            navText.classList.add("hovered", "transparent")
            navText.classList.replace("transparent", "opaque")
        }
    )
    }, 100)
    
    
})

navBar.addEventListener("mouseleave", () => {
    
    navTexts.forEach(
        navText => navText.classList.remove("hovered")
    )
})