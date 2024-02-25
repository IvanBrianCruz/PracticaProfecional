import React, { useState, useEffect } from 'react';

const Profesiones = () => {
    const [profesiones, setProfesiones] = useState([]);

    useEffect(() => {
        const obtenerProfesiones = async () => {
            try {
                const response = await fetch('http://localhost:3030/profesiones');
                const data = await response.json();
                setProfesiones(data); // Supongo que el endpoint devuelve un array de profesiones
                console.log(data);
            } catch (error) {
                console.error('Error fetching profesiones:', error);
            }
        };

        obtenerProfesiones();
    }, []);

    return (
        <section className="content profesiones">
            <h2 className="mt-3">Profesiones</h2>
            <div className="list-group shadow-sm p-3 mb-5 rounded">
                <h4 className="list-group-item list-group-item-action active text-center" aria-current="true">
                    Listado de Profesiones
                </h4>
                {profesiones.map((profesion, index) => (
                    <button key={index} type="button" className="list-group-item list-group-item-action text-center">
                        {profesion.nombreProfesion} {/* Aquí se accede al nombre de la profesión */}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Profesiones;
