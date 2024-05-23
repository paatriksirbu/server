import { Request, Response } from 'express';
import Profesor from '../models/Profesor';

// Obtener todos los profesores
export const obtenerProfesores = async (req, res)  => {
    try {
        const profesores = await Profesor.find();
        res.json(profesores);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los profesores' });
    }
};

// Crear un nuevo profesor
export const crearProfesor = async (req, res) => {
    try {
        const { nombre, edad, direccion } = req.body;
        const profesor = new Profesor({ nombre, edad, direccion });
        await profesor.save();
        res.json({ mensaje: 'Profesor creado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el profesor' });
    }
};

// Obtener un profesor por su ID
export const obtenerProfesorPorId = async (req, res)  => {
    try {
        const profesor = await Profesor.findById(req.params.id);
        if (profesor) {
            res.json(profesor);
        } else {
            res.status(404).json({ mensaje: 'Profesor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el profesor' });
    }
};

// Actualizar un profesor por su ID
export const actualizarProfesor = async (req, res)  => {
    try {
        const { nombre, edad, direccion } = req.body;
        const profesorActualizado = await Profesor.findByIdAndUpdate(
            req.params.id,
            { nombre, edad, direccion },
            { new: true }
        );
        if (profesorActualizado) {
            res.json({ mensaje: 'Profesor actualizado exitosamente' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el profesor' });
    }
};
