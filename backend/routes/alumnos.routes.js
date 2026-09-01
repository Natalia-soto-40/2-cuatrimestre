const express = require("express")
const router = express.Router

router.get("", (req, res)=>{
    res.json(alumnos)
})
router.get("/:id", (req, res)=> {
    const id = Number(req.params.id)
    const alumno = alumnos.find (a => a.id === id)
    res.json(alumno)
})
router.post("/", (req, res)=>{
        const nuevoAlumno = req.body
        alumnos.push(nuevoAlumno)
        res.json({mensaje: "Alumno registrado correctamente"})
   
    //console.log(req.body)
    })
router.put("/:id", (req, res)=>{
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id)
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json =({mensaje: "Alumno actualizado correctamente"})
})
//DELETE eliminar
router.delete("/:id", (req,res)=>{
    const id = Number(req.params-id)
    alumnos = alumnos.filter(alumno => alumno.id !== id)
    res.json({mensaje: "Alumno eliminado correctamente"})
})

app.get("/docentes", (req, res)=>{
    res.json(docentes)
})
app.get("/docentes/:id", (req, res)=> {
    const id = Number(req.params.id)
    const docente = docentes.find(a => a.id === id)
    res.json(docente)
})
module export = 