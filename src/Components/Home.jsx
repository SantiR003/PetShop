import { useState,useEffect } from "react";
import { findAll } from "../Services/petShopServices";
import '../Styles/homePage.css'
import { Body } from "./Body";


export const HomePage = ({detalleAlimento})=>{

    const[alimentos, setAlimentos] = useState([]);


    useEffect(()=>{
        obtenerAlimentos();
    },[]);


    const obtenerAlimentos = async()=>{
        const response = await findAll();
        setAlimentos(response.data);
    }


   return (
  <>
  <div className="contenedor-principal">

    <Body productos={alimentos} detalleAlimento = {detalleAlimento}/>
   
   </div>
  </>
   ) 
}