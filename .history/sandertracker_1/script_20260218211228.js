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
    id_click = event.target.id
    console.log(event.target.id)
    if (id_click == "navItem1"){
        currentinSection.classList.remove("inSection")
        currentinSection = document.querySelector("#home")
        currentinSection.classList.add("inSection")
    }
    else if (id_click == "navItem2"){
        currentinSection.classList.remove("inSection")
        currentinSection.classList.add("books")
        currentinSection = document.querySelector(".books")
        currentinSection.classList.add("inSection")
    }
    else if (id_click == "navItem3"){
        currentinSection.classList.remove("inSection")
        currentinSection.classList.add("goals")
        currentinSection = document.querySelector(".goals")
        currentinSection.classList.add("inSection")
    }

})
)

