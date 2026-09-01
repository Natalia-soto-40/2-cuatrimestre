const express = require ("express")
const app = express()
app.use(express.json())//cualquier info q obtengo de ser en formato json
constalumnosRouters = require("./routes/alumnos.routes")
app.use =("/alumnos", alumnosRoutes)

let alumnos = [
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
const docentes = {
    id : 1,
    nombre: "Clara",
    Especialidad: "Biologia",

},
{
id : 2,
nombre: "Bianca",
Especialidad: "Matematica"
},
{
    id: 3,
    nombre: "Valentina",
    Especialidad: "Ciencias de la Educacion",
},
{
    id: 4,
    nombre: "Ludmila",
    Especialidad: "Derecho",
},
{ 
    id: 5,
    nombre: "Cecilia",
    Especialidad:"Geografia"
}
app. listen(3000,() => {
    console.log("servidor funcionando en http://localhost:3000")
})

