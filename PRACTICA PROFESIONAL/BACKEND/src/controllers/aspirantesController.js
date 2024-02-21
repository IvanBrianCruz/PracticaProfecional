const db = require('../data/models');
const Aspirante = db.Aspirantes;
const Profesion = db.Profesiones;

// Función para obtener todos los aspirantes
const getAllAspirantes = async (req, res) => {
    try {
        // Obtener todos los aspirantes desde la base de datos
        const aspirantes = await Aspirante.findAll({
            include: {
                model: Profesion,
                as: 'Profesione' // Corregir el alias aquí
            }
        });

        // Construcción del objeto literal a devolver
        const aspirantesResponse = {
            count: aspirantes.length,
            aspirantes: aspirantes.map(aspirante => ({
                id: aspirante.idAspirante,
                dni: aspirante.dni,
                nombre: aspirante.nombre,
                apellido: aspirante.apellido,
                email: aspirante.email,
                telefono: aspirante.telefono,
                perfilUrlLinkedin: aspirante.perfilUrlLinkedin,
                fechaNacimiento: aspirante.fechaNacimiento,
                sexo: aspirante.sexo,
                imagen: aspirante.imagen,
                profesion: {
                    id: aspirante.Profesione.idProfesion, // Aquí también corregir el alias
                    nombre: aspirante.Profesione.nombreProfesion
                }
            }))
        };

        res.json(aspirantesResponse); // Devolver los aspirantes como respuesta en formato JSON
    } catch (error) {
        console.error(error); // Imprime el error en la consola para depuración
        res.status(500).json({ error: 'Error al obtener los aspirantes' });
    }
};

// Función para obtener un aspirante por su ID
const getAspiranteById = async (req, res) => {
    const id = req.params.id; // Obtener el ID del parámetro de la URL
    try {
        // Obtener el aspirante por su ID desde la base de datos
        const aspirante = await Aspirante.findByPk(id, {
            include: Profesion // Incluir la profesión del aspirante
        });

        if (!aspirante) {
            return res.status(404).json({ error: 'Aspirante no encontrado' });
        }

        // Devolver los datos del aspirante como respuesta en formato JSON
        res.json(aspirante);
    } catch (error) {
        console.error(error); // Imprimir el error en la consola para depuración
        res.status(500).json({ error: 'Error al obtener el aspirante' });
    }
};

module.exports = {
    getAllAspirantes,
    getAspiranteById
};
