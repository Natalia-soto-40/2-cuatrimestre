
console.log("Inicion")
setTimeout(()=>{
console.log("Buscando alumno...")
}, 3000)
console.log("Fin")
function saludar(){
    console.log("Hola")
}
function ejecutar(funcion){
    funcion()
}
ejecutar(saludar);//coll back

function despedirse(){
    console.log("Hasta Luego")
}
setTimeout(despedirse, 3000)// coll back es despedirse, 3000 equivale los segundos
(()=> {
    console.log("Buscando Docente...")
}, 2000);
setTimeout(()=>{
    console.log("Buscando Materias..")
}, 4000);
setTimeout(()=>{
    console.log("Buscando Curso....")
}, 1000);

console.log("Abriendo SGA")
setTimeout(()=>{
    console.log("Alumnos cargados..")
}, 3000);

console.log("El usuario puede seguir navegando")


//en 5 seg de espera tiene que aparecer la leyenda de espera Lista recibida
//1-solicitando Lista de alumnos...2-mientras espera-" Miestras tanto el programa sigue ejecutandose"
setTimeout(()=>{
    console.log("Lista de Alumnos...")
}, 5000);

console.log ("Mientras tanto el programa sigue ejecutandose");


function obtenerAlumno(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log("Ya tengo el arreglo")
        resolve(["Ana", "Juan", "Pedro"])//es la que contiene el resultado
    }, 3000);

})
}
obtenerAlumno().then((alumnos)=>{
    console.log(alumnos)
})


async function inciar() {
    const alumnos = await obtenerAlumno()
    console.log(alumnos)
}
function obtenerClima(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("22°c- soleado")
        }),2000;
    })
}
//con then()
obtenerClima().then((clima)=>{
    console.log(clima)
});
//
async function mostrarClima() {
    
}//terminar




async function mostrarSaldo() {
    const saldo= await consultarSaldo()
console.log('Su saldo es: $${saldo}')
}

async function mostrarUsuario() {
    constmensaje = await inciarSesion()
    console.log (mensaje)
}