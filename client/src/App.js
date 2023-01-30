import './App.css';
import Main from "./views/Main"
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import Formulario from './component/Formulario';
import Listaproducto from './component/Listaproducto'
// import Formulario from './component/Formulario'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Main />}/>
        <Route path="/:id" element ={<Formulario/>}/>
        <Route  path="/:id/edit" element ={<Listaproducto/>}/>       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
