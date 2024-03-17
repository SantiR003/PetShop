import { useState } from "react";
import '../Styles/header.css';


export const Header = ({obtenerInput})=>{

    const[busqueda,setBusqueda] = useState('');

    const controladorOnChange= (event)=>{
       setBusqueda(event.target.value);
    }

    const controladorOnSubmit = (event)=>{
      event.preventDefault();

      if(!busqueda)
      {
        alert("Debe completar el campo");
      }
      else{
        obtenerInput(busqueda);
      }
      setBusqueda('');
    }

    return (  
        <div className="container-fluid sticky-md-top">
      <div className="row">
        <div className="col-md-4">
            <div className="contenedor-marca ">
              <div className="texto-titulo">
              <h1>Pet Paradise</h1>
              </div>
              <div className="imagen-titulo">
              <img className="imagen-logo" src="src\Img\Icons\Diseño sin título (4).png" alt="" />
              </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="contenedor-input d-flex justify-content-center">
            <form onSubmit={controladorOnSubmit} className="d-flex">
              <input type="text" className="form-control me-2" placeholder="Buscar" value={busqueda} onChange={controladorOnChange} />
              <button type="submit" className="btn btn-warning">🔎</button>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contenedor-redes d-flex justify-content-center">
            <a href="#" className="me-3">
              <img className="icons-header" src="src/Img/Icons/facebook.png" alt="Facebook" />
            </a>
            <a href="#" className="me-3">
              <img className="icons-header" src="src/Img/Icons/instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img className="icons-header" src="src/Img/Icons/whatsapp.png" alt="Whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}