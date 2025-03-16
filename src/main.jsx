import React from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Website from './pages/Website.jsx'
import Perfil from './pages/Perfil.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Categorias from './pages/Categorias.jsx'
import Politica from './pages/Politica.jsx'
import Termos from './pages/Termos.jsx'
import Contato from './pages/Contato.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/perfil/:idUsuario" element={<Perfil/>}/>
          <Route path="/" element={<Website/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/categorias" element={<Categorias/>}/>
          <Route path="/politica" element={<Politica/>}/>
          <Route path="/termos" element={<Termos/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)