const express = require ("express")
const app = express()

const alumnos = [
    {
        id: 1,
        nombre: "Naty",
        carrera: "Programacion"
    },
    {
        id: 2,
        nombre: "Norma",
        carrera: "Programacion",
    
    }
    
]
const docentes = [{
    id : 1,
    nombre: "Clara",
    Especialidad: "Biologia",

}]
[{
id : 2,
nombre: "Bianca",
Especialidad: "Matematica"
}]
[{
    id: 3,
    nombre: "Valentina",
    Especialidad: "Ciencias de la Educacion",
}]
[{
    id: 4,
    nombre: Ludmila,
    Especialidad: "Derecho",
}]
[{ 
    id: 5,
    nombre: "Cecilia",
    especialidad:"Geografia",
}]


pp.get("/alumnos", (req, res)=>{
    res.json(alumnos)
})
app.get("/alumnos/:id", (req, res)=> {
    const id = Number(req.params.id)
    const alumno = alumnos.find (a => a.id === id)
    res.json(alumno)
app. listen(3000, () => {
    console.log("servidor funcionando en http://localhost:3000")
})
})
pp.get("/docentes", (req, res)=>{
    res.json(docentes)
})
app.get("/docentes", (req, res)=>{
    res.json(docentes)
})
app.get("/docentes/:id", (req, res)=> {
    const id = Number(req.params.id)
    const docente = docentes.find (a => a.id === id)
    res.json(docente)
})