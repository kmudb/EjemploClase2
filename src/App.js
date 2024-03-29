import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[tipo,settipo]=useState(1);
  const[total,settotal]=useState(0);
const[valor,setvalor]=useState(0);
useEffect(()=>{
  settotal((valor/tipo));
},[tipo])

const handleTotalChange=e=>{
  if(!isNaN(e.target.value)){
    setvalor(e.target.value);
  }
}

  return (
  <div >
    <h1>Convertidor de unidades</h1>
    
    <select onChange={event=>settipo(event.target.value)} value={tipo}>
      <option value={1}>Unidad</option>
      <option value={10}>Decena</option>
      <option value={100}>Centena</option>
      <option value={1000}>Mil</option>
    </select>
    <input onChange={handleTotalChange} value={valor}/>
      <h3>
    Valor inicial:{valor}
    </h3>
  <h3>
    Conversion:{total}
    </h3>

  </div>
    );
}

export default App;
