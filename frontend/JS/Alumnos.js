// 11/08/2026 proyecto proyecto
const formulario = document.querySelector("#formulario")
const mensaje = document.querySelector("#mensaje")
let alumnoEditandoId = null;
let alumnoEditar = null

formulario.addEventListener();

function mostrarMensaje(texto, clase) {
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${clase}`
    mensaje.computedStyleMap.display = "block" //Para que se muestre el msj
    setTimeout(() => {
        mensaje.style.display = "none"
    }, 3000);
}


function obtenerAlumnos() {}
    return obtenerDatos("alumnos")

const listaAlumnos = document.querySelector("#listaAlumno")


function mostrarAlumnos(alumos) {
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
    <tr>
        <td>${alumno.id}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.carrera}</td>
        <td>${alumno.correo}</td>
        <td> 
        <button class="btn-editar" data-id="${alumno.id}" title="Editar alumno" ><i class="fa-solid fa-pen"></i></button> 
        <button class="btn-eliminar" data-id="${alumno.id}" title="Eliminar alumno" ><i class="fa-solid fa-trash"></i></button>
        </td>
    <tr>
    `;
    }
}



function eliminarAlumno(id) {
    const alumnos = obtenerAlumnos
    const alumnosActualizados = alumnos.filter(
        alumno => alumno.id !== id
    );

    localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))

    mostrarAlumnos(alumnosActualizados)
    if(alumnoEditandoId== id){
        formulario.reset()
        alumnoEditandoId = null
        formulario.querySelector("button").textContent = "Guardar"
    }

    mostrarMensaje("Alumno eliminado correctamente", "msj-exito")
}


listaAlumnos.addEventListener("click", (e) => {
    const boton_el = e.target.closest(".btn-eliminar")
    const confirmar = confirm("¿Está seguro de que desea eliminar este alumno?")
    if (boton_el) {
        const id = Number(boton_el.dataset.id)
        eliminarAlumno(id)
    }

    if (e.target.classList.contains("btn-editar")) {
       const id = Number(e.target.dataset.id)
        if (confirmar) { //Significa "Si confirmar es verdadero" no hace falta escribir  "confirmar == true".
        eliminarAlumno(id)
        }
       

        const boton_ed = e.target.closest(".btn-editar")
       if(boton_ed){
        const id = Number(boton_ed.dataset.id)
        editarAlumno(id)
       }
    }
})

function editarAlumno(id) {
    const alumnos = obtenerAlumnos
    const alumno = alumnos.find(alumno => alumno.id === id)
    Document.querySelector("#nombre").value = alumno.nombre;
    Document.querySelector("#carrera").value = alumno.carrera;
    Document.querySelector("#correo").value = alumno.correo;
alumnoEditar =
nombre = alumno.nombre,
carrera = alumno,carrera,

    alumnoEditandoId = id;
    formulario.querySelector("button").textContent = "Actualizar alumno"
    document.querySelector("#nombre").focus()

}

const alumno = obtAlumnos() //Esto y la línea de abajo tienen la función de mostrar la tabla ni bien se ingresa
mostrarAlumnos(alumnos)