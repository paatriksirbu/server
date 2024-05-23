'use strict'

import { Router } from 'express'
let router = Router()

// Obtenemos todos los profesores
router.get('/', ProfesorController.getAllProfesores)

// Seleccionamos un profesor por su id
router.get('/:id', ProfesorController.getProfesorById)

// Creamos un nuevo profesor
router.post('/', ProfesorController.createProfesor)

// Actualizamos un profesor
router.put('/:id', ProfesorController.updateProfesor)

// Eliminamos un profesor
router.delete('/:id', ProfesorController.deleteProfesor)

export default router
