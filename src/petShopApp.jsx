import { useEffect, useState } from "react";
import { HomePage } from "./Components/Home";
import { ViewProducts } from "./Components/ProductsPage/viewProducts";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { findBySearch } from "./Services/petShopServices";
import { DetalleProductos } from "./Components/ProductDetails/detallesProducto";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";


export const PetShopApp = () => {

    const [valor, setValor] = useState({});
    const [alimentos, SetAlimentos] = useState([]);

    useEffect(() => {
        controladorInputHeader();
    }, []);

    const controladorInputHeader = async (input) => {
        const respuesta = await findBySearch(input);
        SetAlimentos(respuesta.data);
    }

    const controladorDetalleAlimento = (valor)=>{
        setValor(valor);
        console.log("entre");
    }

    return (
        <>

            <Header obtenerInput={controladorInputHeader} controladorBotones={controladorInputHeader} />
            <Routes>
                    <Route path="body" element={<HomePage detalleAlimento={controladorDetalleAlimento} />}/>
                    <Route path="viewProducts" element={<ViewProducts listaAlimentos={alimentos} detalleAlimento={controladorDetalleAlimento} />}/>
                    <Route path="detalles" element={ <DetalleProductos alimento={valor} />}/>
                    <Route path="/" element={ <Navigate to={'/body'} />}/>

            </Routes>
            <Footer />
        </>

    );
}