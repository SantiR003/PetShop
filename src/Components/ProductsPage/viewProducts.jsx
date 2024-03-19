
import {useNavigate } from 'react-router-dom';
import '../../Styles/viewProd/viewProducts.css'

export const ViewProducts = ({ listaAlimentos = [],detalleAlimento}) => {

    const navigate = useNavigate();

    if(listaAlimentos.length === 0)
    {
        navigate('/body');
    }

    const handleCardClick = (producto) => {
        detalleAlimento(producto);
        navigate('/detalles');
      }


    return (
        <>
            <div className="cotenendor-vistaProductos">
                <div className='container'>
                    <div className='row'>
                        {listaAlimentos.map(productos => (
                            <div key={productos.id} className="col-md-3 mb-2 col-sm-12">
                                <div className="card border border border-warning" style={{ width: '18rem',cursor:'pointer' }} onClick={() => handleCardClick(productos)}>
                                    <img src={productos.imagen} className="card-img-top" alt='' />
                                    <div className="card-body ">
                                        <h6 className="card-title">{productos.nombreProducto}</h6>
                                        <p className="card-text text-center">{productos.descripcion}</p>
                                    </div>
                                    <ul className="list-group list-group-flush ">
                                        <li className="list-group-item text-center">${productos.precio}</li>
                                        <li className="list-group-item text-center">{productos.marca.nombre_marca}</li>
                                        <li className="list-group-item text-center">{productos.categoria.nombre_categoria}</li>
                                    </ul>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}