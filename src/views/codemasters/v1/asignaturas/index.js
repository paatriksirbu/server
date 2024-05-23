'use strict'

import { Router } from 'express'
let router = Router()


// Obtenemos todas las asignaturas
router.get('/', AsignaturaController.getAllAsignaturas)

// Seleccionamos una asignatura por su id
router.get('/:id', AsignaturaController.getAsignaturaById)

// Creamos una nueva asignatura
router.post('/', AsignaturaController.createAsignatura)

// Actualizamos una asignatura
router.put('/:id', AsignaturaController.updateAsignatura)

// Eliminamos una asignatura
router.delete('/:id', AsignaturaController.deleteAsignatura)

export default router