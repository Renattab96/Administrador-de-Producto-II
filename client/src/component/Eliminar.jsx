import React from 'react'
import axios from 'axios';

const Eliminar = (props) => {

    const { id, successCallback } = props;
    
    const borrarproducto = e => {
        axios.delete('http://localhost:8000/api/product/' + {id})
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={borrarproducto}>
            Eliminar
        </button>
    )
}

export default Eliminar;