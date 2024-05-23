const obtenerAsignatura = async (req, res) => {
    try {
        // Obtener el ID de la asignatura desde la solicitud
        const asignaturaId = req.params.id;

        // Obtener la asignatura desde la base de datos
        const asignatura = await Asignatura.findById(asignaturaId);

        // Verificar si la asignatura existe
        if (!asignatura) {
            return res.status(404).json({ error: 'Asignatura no encontrada' });
        }

        // Obtener los alumnos de la asignatura
        const alumnos = await Alumno.find({ asignatura: asignaturaId });

        // Obtener el profesor asociado a la asignatura
        const profesor = await Profesor.findById(asignatura.profesor);

        // Crear un objeto con todos los datos agregados
        const datosAsignatura = {
            asignatura: asignatura,
            alumnos: alumnos,
            profesor: profesor
        };

        // Devolver el objeto con los datos agregados
        res.json(datosAsignatura);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la asignatura' });
    }
};