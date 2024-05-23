'use strict'

import { Router } from 'express'
let router = Router()


// Obtenemos todos las asignaturas

router.get('/', AlumnoController.getAllAlumnos)

// Seleccionamos a un alumno por su id
router.get('/:id', AlumnoController.getAlumnoById)

// Creamos un nuevo alumno
router.post('/', AlumnoController.createAlumno)

// Actualizamos un alumno
router.put('/:id', AlumnoController.updateAlumno)

// Eliminamos un alumno
router.delete('/:id', AlumnoController.deleteAlumno)

export default router