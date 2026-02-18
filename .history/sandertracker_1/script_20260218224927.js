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

async function apiTest() {
    console.log("hola mundo")
}

navItems.forEach((navItem) =>
    navItem.addEventListener("click", (event) => {
    id_click = event.currentTarget.id
    console.log(event.currentTarget.id)
    if (id_click == "navItem1"){
        currentinSection.classList.remove("inSection")
        currentinSection = document.querySelector("#home")
        currentinSection.classList.add("inSection")
    }
    else if (id_click == "navItem2"){
        currentinSection.classList.remove("inSection")
        currentinSection = document.querySelector("#books")
        currentinSection.classList.add("inSection")
    }
    else if (id_click == "navItem3"){
        currentinSection.classList.remove("inSection")
        currentinSection = document.querySelector("#goals")
        currentinSection.classList.add("inSection")
    }
    else if (id_click == "navItem4"){
        currentinSection.classList.remove("inSection")
        currentinSection = document.querySelector("#apiTest")
        currentinSection.classList.add("inSection")
        apiTest
    }


})
)

