const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")


navBar.addEventListener("mouseenter", () => {
    time_out = setTimeout( () => {
        navTexts.forEach(
        navText => {
            navText.classList.add("hovered")
        }
    )
    }, 130)
})

navBar.addEventListener("mouseleave", () => {
    cla
    
    navTexts.forEach(
        navText => navText.classList.remove("hovered")
    )
})