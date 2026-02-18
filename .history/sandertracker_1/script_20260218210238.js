const navBar = document.querySelector(".navBar")
const navTexts = document.querySelectorAll(".navText")
const navItems = document.querySelectorAll(".navItem")
let currentinSection = document.querySelector(".inSection")


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
    clearTimeout(time_out)
    navTexts.forEach(
        navText => navText.classList.remove("hovered")
    )
})

navItems.forEach((navItem) =>
    navItem.addEventListener("click", (event) => {
    event.target.classList.add("InNavItem")
    currentInNavItem.classList.remove("inSection")
    currentInNavItem = event.target
})
)

