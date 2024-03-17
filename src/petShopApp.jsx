import { useEffect, useState } from "react";
import { HomePage } from "./Components/Home";
import { ViewProducts } from "./Components/ProductsPage/viewProducts";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { findByBrand, findBySearch } from "./Services/petShopServices";


export const PetShopApp = () => {

    const [valor,setValor] = useState(false);
    const [alimentos,SetAlimentos] = useState([]);

    useEffect(()=>{
        controladorInputHeader();
    },[]);

    const controladorInputHeader = async(input)=>{
        const respuesta = await findBySearch(input);
        SetAlimentos(respuesta.data);
        setValor(respuesta.data.length > 0);
    }


    return (
        <>
        <Header obtenerInput = {controladorInputHeader} controladorBotones = {controladorInputHeader}/>
            {valor == true ? (
                <ViewProducts listaAlimentos={alimentos}/>
            )
                :
                (
                    <HomePage />
                )
            }
        <Footer/>
        </>

    );
}