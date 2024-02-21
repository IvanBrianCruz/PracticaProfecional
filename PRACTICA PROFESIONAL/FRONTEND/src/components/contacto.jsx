import React from 'react';

const Contacto = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow bg-primary text-white mb-4">
            <img src="/src/assets/img/whasapp.png" className="card-img-top" alt="WhatsApp" />
            <div className="card-body">
              <h5 className="card-title">Whatsapp</h5>
              <p className="card-text">¡Contáctanos a través de WhatsApp!</p>
              <a href="https://wa.me/123456789" className="btn btn-light">Enviar mensaje</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow bg-danger text-white mb-4">
            <img src="/src/assets/img/email.png" className="card-img-top" alt="Email" />
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">Envíanos un correo electrónico</p>
              <a href="mailto:info@empresa.com" className="btn btn-light">Enviar email</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow bg-success text-white mb-4">
            <img src="/src/assets/img/x.png" className="card-img-top" alt="Twitter" />
            <div className="card-body">
              <h5 className="card-title">Twitter</h5>
              <p className="card-text">Síguenos en Twitter para estar al tanto de nuestras novedades</p>
              <a href="https://twitter.com/empresa_twitter" className="btn btn-light">Seguir en Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
