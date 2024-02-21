// App.jsx
import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Preventa from './components/Preventa';
import Aspirantes from './components/Aspirantes';
import Profesiones from './components/Profesiones';
import Form from './components/Form';
import Contacto from './components/contacto';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const App = () => {
    return (
        <div className="dashboard">
            <Header />
            <Menu />
            
            <Routes>
                <Route path='/' element={<main className="content-wrap">
                <Preventa />
                <Aspirantes />
                <Profesiones />
            </main>} />
                <Route path='/aspirantes' element={<main className="content-wrap"><Aspirantes /></main>} />
                <Route path='/profesiones' element={<main className="content-wrap"><Profesiones /></main>} />
                <Route path='/formulario' element={<main className="content-wrap"><Form/></main>} /> 
                <Route path='/contacto' element={<main className="content-wrap"><Contacto/></main>} /> 
            </Routes>
        </div>
    );
};

export default App;
