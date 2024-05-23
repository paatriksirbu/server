'use strict'

import { Router } from 'express'
import { Router } from 'express'
import AlumnoController from '../../../controllers/codemasters/v1/alumnos'
let router = Router()


// Obtenemos todos los alumnos

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