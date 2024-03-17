import { useState,useEffect } from "react";
import { findAll } from "../Services/petShopServices";
import '../Styles/homePage.css'
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Body } from "./Body";


export const HomePage = ()=>{

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

    <Body productos={alimentos}/>
   
   </div>
  </>
   ) 
}