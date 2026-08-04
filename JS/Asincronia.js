
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

console.log("El ususario puede seguir navegando")