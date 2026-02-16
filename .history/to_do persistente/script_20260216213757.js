const input = document.getElementById("text_box");
const create_btn = document.getElementById("create");
const delete_btn = document.getElementById("delete");
const notesContainer = document.getElementById("notes_list");

function add() {
    const texto = input.value;

    if (texto == "") {
        return;
    }

    const nueva_nota = document.createElement("li");
    nueva_nota.textContent = texto;
    nueva_nota.className = "note";


    const boton_eliminar = document.createElement("button")
    
    boton_eliminar.textContent = "🗑️"

    nueva_nota.appendChild(boton_eliminar)
    notesContainer.appendChild(nueva_nota);

    input.value = "";
}

function del() {
    const list_item = notesContainer.lastElementChild;
    if (list_item) {
        list_item.remove();
    }
}

delete_btn.addEventListener("click", del);
create_btn.addEventListener("click", add);

input.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        create_btn.click();
    }
});

input.addEventListener("keydown", function(event) {
    if (event.key == "Delete") {
        delete_btn.click();
    }
});