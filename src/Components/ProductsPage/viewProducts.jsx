
import '../../Styles/viewProd/viewProducts.css'

export const ViewProducts = ({ listaAlimentos = [] }) => {
    return (
        <>
            <div className="cotenendor-vistaProductos">
                <div className='container'>
                    <div className='row'>
                        {listaAlimentos.map(productos => (
                            <div key={productos.id} className="col-md-3 mb-2 col-sm-12">
                                <div className="card border border-black" style={{ width: '18rem' }}>
                                    <img src={productos.imagen} className="card-img-top" alt='' />
                                    <div className="card-body ">
                                        <h6 className="card-title border-black">{productos.nombreProducto}</h6>
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