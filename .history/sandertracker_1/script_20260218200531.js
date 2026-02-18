const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")


navBar.addEventListener("mouseenter", () => {
    navTexts.forEach(navText => navText.classList.add)
    setTimeout( () => {
        navTexts.forEach(
        navText => {
            navText.classList.add("hovered", "transparent")
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