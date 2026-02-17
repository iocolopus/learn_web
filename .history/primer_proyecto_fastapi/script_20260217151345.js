const saveBtn = document.getElementById("saveBtn")
const loadBtn = document.getElementById("loadBtn")
const text = document.getElementById("text")
const messageInput = document.getElementById("messageInput")

const API_BASE_URL = "http://localhost:8000"

async function saveMessage() {
    const message = messageInput.value

    const response = await fetch(`${API_BASE_URL}/message`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
    })

    if (!response.ok) {
        text.textContent = "Error al guardar"
        return
    }

    text.textContent = "Mensaje guardado correctamente"
}

async function loadMessage() {
    const response = await fetch(`${API_BASE_URL}/message`)

    if (!response.ok) {
        text.textContent = "Error al cargar"
        return
    }

    const data = await response.json()
    const message = data.message || "(vacío)"

    messageInput.value = data.message || ""
    text.textContent = `Mensaje cargado: ${message}`
}

saveBtn.addEventListener("click", saveMessage)
loadBtn.addEventListener("click", loadMessage)