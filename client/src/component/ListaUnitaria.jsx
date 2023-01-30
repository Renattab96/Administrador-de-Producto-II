import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const ListaUnitaria = () => {
    const [listaUnitaria, setListaUnitaria]=useState({});

    // obtener id de url
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/producto/filtrar/${id}`,{
        })
        .then((res) => {
          console.log(res);
          setListaUnitaria(res.data);
          // navigate('/productos')
          }).catch((err) => {
             console.log(err)
          })
      },[ ])
 
  return (
    <div className='col-xl-900 align-content-justify border:1px'>
        <br />
        <h1 > Detalle </h1>
        <hr className='text-decoration:none'/>
        <p>Titulo: {listaUnitaria.title}</p>
        <p>Precio: {listaUnitaria.price} </p>
        <p>Descripcion: {listaUnitaria.descripcion}</p>
    </div>
  )
}

export default ListaUnitaria