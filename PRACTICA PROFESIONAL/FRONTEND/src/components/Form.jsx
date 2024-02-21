import React from 'react';

const FormularioDecorativo = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="dni" className="form-label">DNI</label>
                <input type="text" className="form-control" id="dni" name="dni" placeholder="Ingrese su DNI"  />
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingrese su nombre"  />
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" name="apellido" placeholder="Ingrese su apellido"  />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Ingrese su email"  />
            </div>
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input type="text" className="form-control" id="telefono" name="telefono" placeholder="Ingrese su teléfono"  />
            </div>
            <div className="mb-3">
                <label htmlFor="perfilUrlLinkedin" className="form-label">Perfil URL LinkedIn</label>
                <input type="text" className="form-control" id="perfilUrlLinkedin" name="perfilUrlLinkedin" placeholder="Ingrese su URL de LinkedIn"  />
            </div>
            <div className="mb-3">
                <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="fechaNacimiento" name="fechaNacimiento"  />
            </div>
            <div className="mb-3">
                <label htmlFor="sexo" className="form-label">Sexo</label>
                <select className="form-select" id="sexo" name="sexo" >
                    <option value="">Seleccionar</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="imagen" className="form-label">URL de la imagen</label>
                <input type="text" className="form-control" id="imagen" name="imagen" placeholder="Ingrese la URL de su imagen"  />
            </div>
            <div className="mb-3">
                <label htmlFor="profesion" className="form-label">Profesión</label>
                <input type="text" className="form-control" id="profesion" name="profesion" placeholder="Ingrese su profesión"  />
            </div>
            <button type="submit" className="btn btn-primary" >Guardar</button>
        </form>
    );
};

export default FormularioDecorativo;
