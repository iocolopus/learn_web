const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")

navBar.addEventListener("mouseenter", () => {
    navTexts.forEach(text => text.style.display = "inline-block")
})

navBar.addEventListener("mouseleave", () => {
    navTexts.forEach(text => text.style.display = "none")
})