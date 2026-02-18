const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")


navBar.addEventListener("mouseenter", () => {
    setTimeout(navBar, 300)
    navTexts.forEach(
        navText => navText.classList.add("hovered")
    )
})

navBar.addEventListener("mouseleave", () => {
    
    navTexts.forEach(
        navText => navText.classList.remove("hovered")
    )
})