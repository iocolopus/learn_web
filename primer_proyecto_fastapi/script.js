const btn = document.getElementById("button")
const text = document.getElementById("text")

async function call_api(){
    const response = await fetch("http://localhost:8000/")
    const data = await response.json()
    text.textContent = data.message
}

btn.addEventListener("click", call_api)