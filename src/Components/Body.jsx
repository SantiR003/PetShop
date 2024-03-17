import '../Styles/body.css'


export const Body = ({ productos = [] }) => {

    const productosPorGrupo = [];

    for (let i = 0; i < productos.length; i += 4) {
        productosPorGrupo.push(productos.slice(i, i + 4));
    }

    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide bg-transparent" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="img-carousel carousel-item active">
                        <img src="src\Img\Promociones\2.png" className=" img-carousel mx-auto d-block w-50 img-fluid" alt="..." />
                    </div>
                    <div className="img-carousel carousel-item">
                        <img src="src\Img\Promociones\3.png" className="mx-auto d-block w-50 img-fluid" alt="..." />
                    </div>
                    <div className=" img-carousel carousel-item">
                        <img src="src\Img\Promociones\Pet Paradise.jpg" className="mx-auto d-block w-50 img-fluid" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='titulo-productos  border border-black '>
                <h2>Productos</h2>
            </div>

            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {productosPorGrupo.map((grupo, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="container">
                                    <div className="row">
                                        {grupo.map((producto) => (
                                            <div key={producto.id} className="col-md-3 mb-2 col-sm-12">
                                                <div className="card border border-warning" style={{ width: '18rem' }}>
                                                    <img src={producto.imagen} className="card-img-top" alt='' />
                                                    <div className="card-body">
                                                        <h6 className="card-title">{producto.nombreProducto}</h6>
                                                        <p className="card-text text-center ">{producto.descripcion}</p>
                                                    </div>
                                                    <ul className="list-group list-group-flush ">
                                                        <li className="list-group-item text-center">${producto.precio}</li>
                                                        <li className="list-group-item text-center">{producto.marca.nombre_marca}</li>
                                                        <li className="list-group-item text-center">{producto.categoria.nombre_categoria}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='titulo-marcas border border-black'>
                <h2>Marcas con las que trabajamos</h2>
            </div>

            <div className="container text-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 " >
                        <img src="src\Img\Marcas\1.jpg" className="mx-auto d-block w-100 img-fluid border border-5" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <img src="src\Img\Marcas\2.jpg" className="mx-auto d-block w-100 img-fluid border border-5" alt="..." />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <img src="src\Img\Marcas\3.jpg" className=" mx-auto d-block w-100 img-fluid border border-5" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <img src="src\Img\Marcas\4.jpg" className="mx-auto d-block w-100 img-fluid border border-5" alt="..." />
                    </div>
                </div>
            </div>

        </>
    );
}