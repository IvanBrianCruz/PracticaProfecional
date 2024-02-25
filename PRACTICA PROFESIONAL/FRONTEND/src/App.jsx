// App.jsx
import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Preventa from './components/Preventa';
import Aspirantes from './components/Aspirantes';
import Profesiones from './components/Profesiones';
import Form from './components/Form';
import Contacto from './components/contacto';
import Error404 from './components/Error404';

import { Routes, Link, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="dashboard">

             <Link to ='/aspirantes'></Link>
             <Link to ='/profesiones'></Link>
             <Link to ='/formulario'></Link>
             <Link to ='/contacto'></Link> 

                <Header />
                <Menu />

            <Routes>
                <Route path='/' element={<main className="content-wrap">
                <Preventa />
            </main>} />
                <Route path='/aspirantes'  element = {<main className="content-wrap"><Aspirantes /></main>} />
                <Route path='/profesiones' element = {<main className="content-wrap"><Profesiones /></main>} />
                <Route path='/formulario'  element = {<main className="content-wrap"><Form/></main>}/> 
                <Route path='/contacto'    element = {<main className="content-wrap"><Contacto /></main>} /> 
                <Route path= "*" element = {<main className = "content-wrap"><Error404 /></main>} />
            </Routes>
        </div>
    );
};

export default App;
