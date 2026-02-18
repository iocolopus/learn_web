const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")


navBar.addEventListener("mouseenter", () => {
    setTimeout( () => {
        navTexts.forEach(
        navText => navText.classList.add("hovered", "transparent")
    )
    }, 150)
    navTexts.forEach(navText => navText.classList.remove())
    
})

navBar.addEventListener("mouseleave", () => {
    
    navTexts.forEach(
        navText => navText.classList.remove("hovered")
    )
})