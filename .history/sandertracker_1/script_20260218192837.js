const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")

navBar.addEventListener("mouseenter", () => {
    window.alert(navTexts[0])
})