import { useNavigate } from "react-router-dom";
import '../../Styles/productDetails/detallesProducto.css'

export const DetalleProductos = ({ alimento }) => {

    const navigate = useNavigate();

    if (alimento) {
        console.log("hola");
        navigate('/body');
    }


    return (
        <>
            <div className=" container-principal container-fluid d-flex justify-content-center align-items-center" style={{ minheight: '100vh' }}>
                <div className="container-secundario">
                    <div className="container">
                        <div className="carta-detalles card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-4 col-sm-12">
                                    <img src={alimento.imagen} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <div className="card-body cuerpo-carta">
                                        <h5 className="card-title">{alimento.nombreProducto}</h5>
                                        <p className="card-text">${alimento.precio}</p>
                                        <p className="card-text"><small className="text-body-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum delectus quibusdam deserunt adipisci vel suscipit aliquam consectetur ullam exercitationem, veritatis, nihil magnam optio autem quidem eius voluptas quasi at!</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}