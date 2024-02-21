import React, { useState, useEffect } from 'react';

const Aspirantes = () => {
    const [aspirantes, setAspirantes] = useState([]);

    useEffect(() => {
        const obtenerAspirantes = async () => {
            try {
                const response = await fetch('http://localhost:3030/aspirantes');
                const data = await response.json();
                //console.log(data+"-----------------------------------------------");
                setAspirantes(data.aspirantes);
            } catch (error) {
                console.error('Error fetching aspirantes:', error);
            }
        };

        obtenerAspirantes();
    }, []);

    return (
        <div className="content aspirantes">
            <h2>Aspirantes</h2>
            <div className="person-boxes">
                {aspirantes.map((aspirante) => (
                    <div key={aspirante.id} className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="box-avatar">
                        <img src={"./src/assets/img/" + aspirante.imagen} alt={aspirante.nombre} />


                        </div>
                        <div className="box-bio">
                            <h2 className="bio-name">{aspirante.nombre}</h2>
                            <p className="bio-position">{aspirante.profesion.nombre}</p>
                        </div>
                        <div className="box-actions">
                            <button>
                                <i className="bi bi-star"></i>
                            </button>
                            <button>
                                <i className="bi bi-chat"></i>
                            </button>
                            <button>
                                <i className="bi bi-envelope"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Aspirantes;
