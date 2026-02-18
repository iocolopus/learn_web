const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")

navBar.addEventListener("mouseenter", () => {
    navTexts.forEach(
        navText => navTexts[0].classList.add("hovered")
    )
})