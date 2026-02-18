const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")


navBar.addEventListener("mouseenter", () => {
    setTimeout(navBar, 300)
    
})

navBar.addEventListener("mouseleave", () => {
    
    navTexts.forEach(
        navText => navText.classList.remove("hovered")
    )
})