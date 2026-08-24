// 11/08/2026 proyecto proyecto
const formulario = document.querySelector("#formAlumno")
const mensaje = document.querySelector("#mensaje")
let alumnoEditandoId = null;

formulario.addEventListener("submit", function (event) {
    event.preventDefault();


    const nombre = document.querySelector("#nombre").value.trim()
    const carrera = document.querySelector("#carerra").value.trim()
    const correo = document.querySelector("#correo").value.trim()
    if (nombre === "" || carrera === "" || correo === ""){
       mostrarMensaje("Todos los campos son obligatorios!!!", "msj-error")
       return //Vuelve al inicio para poder comenzar otra vez a llenar los campos 
    }
   if (!correo.includes("@")) {
    mostrarMensaje("Ingrese un correo valido!!!", "msj-error")
    return
   }

   if (nombre.legth < 3) {
   mostrarMensaje("El nombre debe tenr al menos 3 caracteres!!!", "msj-error")
   return
   }

    const alumnos = obtenerAlumnos()


    if (alumno === null) {

        const alumno = {
            id: Date.now(),//Para generar un número unico internamente.
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }


        mostrarMensaje("Alumno guardado correctamente");
        alumnos.push(alumno)
    } else {
        const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId)
        alumno.nombre = nombre
        alumno.carrera = carrera
        alumno.correo = correo
        alumnoEditandoId = null;
        formulario.querySelector("button").textContent = "Guardar"

        mostrarMensaje("Alumno actualizado correctamente", "msj-exito")
    }

    localStorage.setItem("alumnos", JSON.stringify(alumnos))

    mostrarAlumnos(alumnos);

    formulario.reset();
});

function mostrarMensaje(texto, clase) {
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${clase}`
    mensaje.computedStyleMap.display = "block" //Para que se muestre el msj
    setTimeout(() => {
        mensaje.style.display = "none"
    }, 3000);
}


function obtenerAlumnos() {
    const datos = localStorage.getItem("alumnos")
    if (datos) {
        return JSON.parse(datos)
    }
    return [] //Evita que me devuelva null.
}

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
    alumnoEditandoId = id;
    formulario.querySelector("button").textContent = "Actualizar alumno"
    document.querySelector("#nombre").focus()

}

const alumno = obtAlumnos() //Esto y la línea de abajo tienen la función de mostrar la tabla ni bien se ingresa
mostrarAlumnos(alumnos)