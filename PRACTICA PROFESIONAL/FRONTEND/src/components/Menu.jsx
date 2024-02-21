// Menu.jsx
import React from 'react';

const Menu = () => {
    return (
        <header className="menu-wrap">
            	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
            <figure className="user">
                <div className="user-avatar">
                    <img src="./src/assets/img/logo-dh.png" alt="Logo Digital House" />
                </div>
                <figcaption>
                    Digital House
                </figcaption>
            </figure>
            <nav>
                <section className="menu">
                    <h3>Opciones</h3>
                    <ul>
                        <li>
                            <a href="/">
                                <i className="bi bi-building" style={{ fontSize: "1.2rem", color: "cornflowerblue" }}></i>
                                  - Empresas
                            </a>
                        </li>
                        <li>
                            <a href="/aspirantes">
                                <i className="bi bi-person" style={{ fontSize: "1.2rem", color: "cornflowerblue" }}></i>
                                - Aspirantes
                            </a>
                        </li>
                        <li>
                            <a href="/profesiones">
                                <i className="bi bi-list-check" style={{ fontSize: "1.2rem", color: "cornflowerblue" }}></i>
                                - Profesiones
                            </a>
                        </li>
                        <li>
                            <a href="/formulario">
                                <i className="bi bi-person-vcard" style={{ fontSize: "1.2rem", color: "cornflowerblue" }}></i>
                                - Postulate aquí
                            </a>
                        </li>
                        <li>
                            <a href="/contacto">
                                <i className="bi bi-chat-left-text" style={{ fontSize: "1.2rem", color: "cornflowerblue" }}></i>
                                - Contacto
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    );
};

export default Menu;
