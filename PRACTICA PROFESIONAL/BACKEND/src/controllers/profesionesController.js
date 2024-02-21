// Importar el modelo de Profesiones
const db = require('../data/models');
const Profesion = db.Profesiones;
const Aspirante = db.Aspirantes;

// Función para obtener todas las profesiones con los aspirantes asociados
const getAllProfesiones = async (req, res) => {
    try {
        // Obtener todas las profesiones con los aspirantes asociados
        const profesiones = await Profesion.findAll({
            include: {
                model: Aspirante,
                as: 'Aspirantes' // Alias de la relación
            }
        });

        // Mapear los resultados para agregar el atributo linkDetalle
        const profesionesConLinkDetalle = profesiones.map(profesion => {
            const aspirantesConLinkDetalle = profesion.Aspirantes.map(aspirante => {
                // Construir el enlace al detalle del aspirante
                const linkDetalle = `http://localhost:3030/aspirantes/${aspirante.idAspirante}`;

                // Retornar solo los datos necesarios del aspirante
                return {
                    dni: aspirante.dni,
                    nombre: aspirante.nombre,
                    linkDetalle: linkDetalle // Agregar el enlace al detalle del aspirante
                };
            });

            // Retornar la profesión con los aspirantes actualizados
            return {
                idProfesion: profesion.idProfesion,
                nombreProfesion: profesion.nombreProfesion,
                aspirantes: aspirantesConLinkDetalle
            };
        });

        res.json(profesionesConLinkDetalle); // Devolver las profesiones con los aspirantes asociados como respuesta en formato JSON
    } catch (error) {
        console.error(error); // Imprimir el error en la consola para depuración
        res.status(500).json({ error: 'Error al obtener las profesiones' });
    }
};

module.exports = {
    getAllProfesiones
};
