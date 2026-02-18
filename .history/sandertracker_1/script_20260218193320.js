const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")

navBar.addEventListener("mouseenter", () => {
    navTexts.forEach(
        navText => navText.classList.add("hovered")
    )
})

navBar.addEventListener("mouseexit", () => {
    navTexts.forEach(
        navText => navText.classList.remove("hovered")
    )
})