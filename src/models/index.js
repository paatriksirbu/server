'use strict'

import { getAlumnos, addAlumno, getProfesores, addProfesor, getAsignaturas, addAsignatura } from './data.js'

function getAlumnoById(idAlumno) {
    return data.asignaturas.find(alumno => alumno.id === idAlumno)
}

function getProfesorById(idProfesor) {
    return data.profesores.find(profesor => profesor.id === idProfesor)
}

function getAsignaturaById(idAsignatura) {
    return data.asignaturas.find(asignatura => asignatura.id === idAsignatura)
}

// Asignaturas que imparte un profesor
function getAsignaturasByProfesorId(idProfesor) {
    return data.asignaturas.filter(asignatura => asignatura.profesor === idProfesor)
}

// Asignaturas en las que está matriculado un alumno
function getAsignaturasByAlumnoId(idAlumno) {
    return data.asignaturas.filter(asignatura => asignatura.alumnos.includes(idAlumno))
}

export default {
    alumnos: {
        get: {
            all: getAlumnos,
            byId: getAlumnoById
        },
        add: addAlumno
    },
    profesores: {
        get: {
            all: getProfesores,
            byId: getProfesorById
        },
        add: addProfesor
    },
    asignaturas: {
        get: {
            all: getAsignaturas,
            byId: getAsignaturaById,
            byProfesorid: getAsignaturasByProfesorId,
        },
        add: addAsignatura
    }
}