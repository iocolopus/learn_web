const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")


navBar.addEventListener("mouseenter", () => {
    navTexts.forEach(navText => navText.classList.add("transparent"))
    time_out = setTimeout( () => {
        navTexts.forEach(
        navText => {
            navText.classList.add("hovered")
        }
    )
    }, 130)
    
    
})

navBar.addEventListener("mou", () => {
    
    navTexts.forEach(
        navText => navText.classList.remove("hovered")
    )
})