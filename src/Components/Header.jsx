import { useState } from "react";
import '../Styles/header.css';


export const Header = ({ obtenerInput, controladorBotones }) => {

  const [busqueda, setBusqueda] = useState('');

  const controladorOnChange = (event) => {
    setBusqueda(event.target.value);
  }

  const controladorOnButtons = (valor) => {
    controladorBotones(valor);
  }

  const controladorOnSubmit = (event) => {
    event.preventDefault();

    if (!busqueda) {
      alert("Debe completar el campo");
    }
    else {
      obtenerInput(busqueda);
    }
    setBusqueda('');
  }

  return (
    <div className="container-fluid sticky-md-top">
      <div className="row">
        <div className="col-md-4">
          <div className="contenedor-marca" onClick={() => window.location.reload()}>
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
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle p-0 btn-warning" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="icono-desplegable m-0" src="src\Img\Icons\menu.png" alt="" />
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-header">Categorias</li>
                <li><button onClick={() => controladorOnButtons('Perros')} className="dropdown-item btn btn-link">Perros</button></li>
                <li><button onClick={() => controladorOnButtons('Gatos')} className="dropdown-item btn btn-link">Gatos</button></li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-header">Lineas</li>
                <li><button onClick={() => controladorOnButtons('Purina')} className="dropdown-item btn btn-link">Purina</button></li>
                <li><button onClick={() => controladorOnButtons('Vital Can')} className="dropdown-item btn btn-link">Vital Can</button></li>
                <li><button onClick={() => controladorOnButtons('Sieger')} className="dropdown-item btn btn-link">Sieger</button></li>
                <li><button onClick={() => controladorOnButtons('Royal Canin')} className="dropdown-item btn btn-link">Royal Canin</button></li>
              </ul>
            </div>
            <form onSubmit={controladorOnSubmit} className="d-flex flex-column flex-sm-row align-items-center">
              <input type="text" className="form-control me-2 mb-2 mb-sm-0" placeholder="Buscar" value={busqueda} onChange={controladorOnChange} />
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