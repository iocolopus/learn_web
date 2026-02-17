const input = document.getElementById("text_box");
const create_btn = document.getElementById("create");
const delete_btn = document.getElementById("delete");
const notesContainer = document.getElementById("notes_list");
const save_btn = document.getElementById("save_button")
const load_btn = document.getElementById("load_button")




function add_note(text){
    const nueva_nota = document.createElement("li");
    nueva_nota.textContent = text;
    nueva_nota.className = "note";


    const boton_eliminar = document.createElement("button")
    boton_eliminar.classList.add('del_note_button', "button")
    boton_eliminar.id = "btn_del_note"
    boton_eliminar.textContent = "🗑️"

    nueva_nota.appendChild(boton_eliminar)
    notesContainer.appendChild(nueva_nota);
}

function add() {
    const texto = input.value;

    if (texto == "") {
        return;
    } else {add_note(texto)}


    input.value = "";
}

function del_last() {
    const list_item = notesContainer.lastElementChild;
    if (list_item) {
        list_item.remove();
    }
}

function del_note(event) {
    console.log(event)
    if (event.target.classList.contains('del_note_button')){
        console.log("eliminando nota")
        event.target.parentElement.remove()
    }
}

function save(){
    console.log("guardar con persistencia...");
    const notas = document.querySelectorAll("#notes_list li");
    let text_contents_list = [];

    for (let i = 0; i < notas.length; i++){
        text_nota = notas[i].textContent.slice(0, -3)
        console.log(text_nota)
        text_contents_list.push(text_nota)
    }
    console.log(text_contents_list)
    json_list = JSON.stringify(text_contents_list)
    console.log(json_list)

    fetch("http://127.0.0.1:8000/save", {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body:json_list
    })  
}

async function load(){
    console.log("cargar los datos persistenetes")
    let response = await fetch("http://127.0.0.1:8000/load")
    response = await response.json()

    notesContainer.innerHTML = ""

    response.forEach(note_text => {
        add_note(note_text)
    });

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

load_btn.addEventListener("click", load)
save_btn.addEventListener("click", save)