const alumnos=[
    {id: 1,
        nombre: "Ana"
    },
    {
        id: 2,
        nombre: "Natalia"
    }
];
function obtenerAlumnos() {
    return new Promise((resolve) =>{
        setTimeout(() => {
         resolve (alumnos)   
        },2000);
        
    })
}
async function iniciar() {
    const datos = await obtenerAlumnos()
console.table(datos)
}
iniciar()
//crear obtenerMaterias()
//crear obtenerDocentes()
//mostrar los datos a traves de async/await

function obtenerMaterias(){
    return new Promise((resolve)=>{
        setTimeout(()=> {
        resolve (materias)
    }, 3000);
    })
}
async function iniciar() {
    const datos = await obtenerMaterias()
    console.table(datos)
}
iniciar()
function obtenerDocentes(){
    return new Promise((resolve)=>{
     setTimeout(() => {
        resolve (docente)
    }, 3000);
})
}
async function iniciar() {
    const datos= await obtenerDocentes()
    console.table(datos)
    
}
iniciar()


//ejemplo:06/08/26
async function  prueba() {
const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
console.log(respuesta)
}
prueba()
//10/08/26
function mostrarAlumnos(alumnos){ 
    console.log(typeof alumnos)
    localStorage.setItem("alumnos", JSON.stringify (alumnos))
    const datosa = localStorage.getItem("alumnos")
    console.log(typeof datos)
    console.log (datos)
    const alumnosRecuperados = JSON.parse(datos)
    console.log(typeof alumnosRecuperados)
    console.table(alumnos)
    
}