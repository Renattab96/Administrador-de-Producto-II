import React, { useEffect, useState } from 'react'
import Formulario from '../component/Formulario'
import Listaproducto from '../component/Listaproducto';
import axios from 'axios';


const Main = () => {

  const [producto, setTitulo] = useState([]);
  const [ loaded, setloaded]=useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/productos')
      .then(res => setTitulo(res.data));
      setloaded(true)

      .catch(err => console.log("Error:", err))

  }, [])
  return (
           <div>
                <h1>Product Manager</h1>
                    <Formulario
                    initialTitle=""
                    initialPrice=""
                    initialDescription=""/>
                    <hr/>
                    <h1>All Products: </h1>
                    {loaded && <Listaproducto producto={producto} setTitulo={setTitulo}/>}
             </div>

  )
}


export default Main;