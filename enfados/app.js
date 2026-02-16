const form = document.getElementById('form');

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    // FECHA
    const fecha = document.getElementById("fecha").value;

    // LUGAR (radio)
    const lugarSeleccionado = document.querySelector('input[name="lugar"]:checked');
    const lugar = lugarSeleccionado ? lugarSeleccionado.id : null;

    // SELECT
    const tipo = document.getElementById("tipo").value;

    // TEXTAREA
    const motivo = document.getElementById("motivo").value;

    // RANGE - convertir a número
    const intensidad = parseInt(document.getElementById("intensidad").value);

    // CHECKBOXES
    const motivo_sn = document.getElementById("motivo_sn").checked;
    const insistir = document.getElementById("insistir").checked;
    const pesimista = document.getElementById("pesimista").checked;
    const perdon = document.getElementById("perdon").checked;

    // TEXTAREA
    const disculpa = document.getElementById("disculpa").value;

    // RADIO galleta
    const galletaSeleccionada = document.querySelector('input[name="galleta"]:checked');
    const galleta = galletaSeleccionada ? galletaSeleccionada.value : null;

    const datosFormulario = {
        fecha,
        lugar,
        tipo,
        motivo,
        intensidad,
        motivo_sn,
        insistir,
        pesimista,
        perdon,
        disculpa,
        galleta
    };

    console.log(datosFormulario);

    try {
        const response = await fetch("http://127.0.0.1:8000/enfado", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosFormulario)
        });

        const resultado = await response.json();
        alert(resultado.mensaje);

    } catch (error) {
        console.error("Error:", error);
        alert("Error al enviar el formulario. ¿Está el servidor corriendo?");
    }
});