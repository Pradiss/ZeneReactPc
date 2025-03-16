import { Link } from "react-router-dom";
import React, { useEffect, useState} from "react"
import axios from "axios";


const Header = () => {
  const [usuarios, setUsuarios] = useState([])
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/usuarios`)
         .then((resposta) => setUsuarios(resposta.data))
         .catch((error) => console.error("ERROR", error))
 }, [])

  return (
 
  <nav class="navbar navbar-expand-lg  justify-content-center sectionRadius container my-3 mb-4 shadow" >
    <div class=" container d-flex align-items-center p-2   ">
    
    
      <div class="ms-3">
        <a class="navbar-brand "   href="/" src="">
          <img class="w-100" src="./src/assets/react.svg" id="logo"/>
          
        </a>

      </div>

      <div class="input-group w-50  rounded-5 ">
        <input type="text" class="form-control rounded-start-5 " value=""/>
        
          <button class="btn btn-white border rounded-end-5   " type="button"><i class="bi bi-search fs-4"></i></button>
        
      </div>
     
        
     
      
      <div class="me-3">
        <ul class="dropdown-menu dropdown-menu rounded-4 p-2 me-3 ">
          <li><a class="dropdown-item" href="/login">Entrar</a></li>
          <li><a class="dropdown-item" href="/perfil/criar">Cadastrar-se</a></li>
          <li>
            <hr class="dropdown-divider"/>
          </li>
          <li><a class="dropdown-item" href="/sair">Sair</a></li>
        </ul>
        <button class="navbar-toggler " id="toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <a class="navbar-brand"  href="/home">
            <img class="w-100" src="./src/assets/react.svg" id="logo"/>
            </a>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body ">
            <ul class="navbar-nav justify-content-end flex-grow-1 btnNav ">
              <li class=" bborder nav-item  rounded-5 p-3 me-2 ">
                <a class="nav-link   " aria-current="page" href="/categorias">Categorias</a>
              </li>
              <li class=" bborder nav-item  rounded-5 p-3 me-2 ">
                <a class="nav-link   " aria-current="page" href="/contato">Contato</a>
              </li>
              <li class="bborder nav-item rounded-5 p-3 ">
                <Link class="nav-link " to={`/perfil/${usuarios.idUsuario}`}>Perfil</Link>
              </li>
              <li class="nav-item dropdown me-5">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-person-fill fs-2 "></i>
                </a>
                <ul class="dropdown-menu dropdown-menu rounded-4 p-2 me-3">
                  <li><a class="dropdown-item" href="/login">Entrar</a></li>
                  <li><a class="dropdown-item" href="/cadastro">Cadastrar-se</a></li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>
                  <li><a class="dropdown-item" href="/login">Sair</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
  </div>
</nav>
  )
}

export default Header;