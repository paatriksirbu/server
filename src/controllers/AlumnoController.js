import { Request, Response } from 'express';
import Alumno from '../models/Alumno';

// Obtener todos los alumnos
export const obtenerAlumnos = async (req, res)  => {
    try {
        const alumnos = await Alumno.find();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los alumnos' });
    }
};

// Crear un nuevo alumno
export const crearAlumno = async (req, res) => {
    try {
        const { nombre, edad, direccion } = req.body;
        const alumno = new Alumno({ nombre, edad, direccion });
        await alumno.save();
        res.json({ mensaje: 'Alumno creado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el alumno' });
    }
};

// Obtener un alumno por su ID
export const obtenerAlumnoPorId = async (req, res)  => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        if (alumno) {
            res.json(alumno);
        } else {
            res.status(404).json({ mensaje: 'Alumno no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el alumno' });
    }
};

// Actualizar un alumno por su ID
export const actualizarAlumno = async (req, res)  => {
    try {
        const { nombre, edad, direccion } = req.body;
        const alumnoActualizado = await Alumno.findByIdAndUpdate(
            req.params.id,
            { nombre, edad, direccion },
            { new: true }
        );
        if (alumnoActualizado) {
            res.json({ mensaje: 'Alumno actualizado exitosamente' });
        }
    }
    catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el alumno' });
    }
};