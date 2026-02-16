const input = document.getElementById("text_box");
const create_btn = document.getElementById("create");
const delete_btn = document.getElementById("delete");
const notesContainer = document.getElementById("notes_list");

let event;

function add() {
    const texto = input.value;

    if (texto == "") {
        return;
    }

    const nueva_nota = document.createElement("li");
    nueva_nota.textContent = texto;
    nueva_nota.className = "note";


    const boton_eliminar = document.createElement("button")
    boton_eliminar.classList.add('del_note_button', "button")
    boton_eliminar.id = "btn_del_note"
    boton_eliminar.textContent = "🗑️"

    nueva_nota.appendChild(boton_eliminar)
    notesContainer.appendChild(nueva_nota);

    input.value = "";
}

function del_last() {
    const list_item = notesContainer.lastElementChild;
    if (list_item) {
        list_item.remove();
    }
}

function del_note(event) {
    if (event.target.classList.contains('del_note_button')){
        const nota = event.target.parentElement;
        
        // 1. Añadir clase que activa la animación de salida
        nota.classList.add('removing');
        
        // 2. Esperar a que termine la animación (300ms) y luego eliminar
        setTimeout(() => {
            nota.remove();
        }, 300);
    }
}

delete_btn.addEventListener("click", del_last);
create_btn.addEventListener("click", add);



input.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        create_btn.click();íí
    }
});

input.addEventListener("keydown", function(event) {
    if (event.key == "Delete") {
        delete_btn.click();
    }
});

notesContainer.addEventListener("click",  del_note)

