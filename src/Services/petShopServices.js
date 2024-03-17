import axios from "axios";

const baseUrl = "http://localhost:8080/alimentos";


export const findAll = async()=>{
  try {
    const response = await axios.get(`${baseUrl}/all`);
    return response;
  } catch (error) {
    console.log(error);
  }

  return null;
}

export const findByBrand = async(brand)=>{
  try {
    const response = await axios.get(`${baseUrl}/brand/${brand}`);
    return response;
  } catch (error) {
    console.log(error);
  }

  return null;
}

export const findBySearch = async(valor)=>{
  try {
    const response = await axios.get(`${baseUrl}/search/${valor}`);
    return response;
  } catch (error) {
    console.log(error);
  }

  return null;
}