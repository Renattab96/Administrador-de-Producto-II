import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@react/router';
import Eliminar from '../components/Eliminar';
// import {producto} from '../../../server/models/producto.models';

const Detalle = (props) => {
    const [producto, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, []);
    return (
        <div>
            <Link to={"/"}>
                    Home
            </Link>
            <h2> Products Detail:</h2>
            <h3>Title: {producto.title}</h3>
            <p>Price: {producto.price}</p>
            <p>Description: {producto.description}</p>

            <Link to={"/" + producto._id + "/edit"}>Edit</Link>
            <Eliminar 
                    productId={producto._id} 
                    successCallback={() => navigate("/")} 
            />
        </div>
    )
}

export default Detalle;