'use strict'

import data from './data.json' assert { type: 'json' }
import data from './data.json' assert { type: 'json' }

export function getAlumnos() {
    return data.alumnos
}

export function addAlumno(alumno) {
    data.alumnos.push(alumno)
}

export function getProfesores() {
    return data.profesores
}

export function addProfesor(profesor) {
    data.profesores.push(profesor)
}

export function getAsignaturas() {
    return data.asignaturas
}

export function addAsignatura(asignatura) {
    data.asignaturas.push(asignatura)
}