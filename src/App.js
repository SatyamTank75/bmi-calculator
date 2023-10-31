
import { useMemo, useState } from 'react';
import './App.css';

function App() {

  const [height,setHeight]= useState(170);
  const[weight,setWeight]=useState(60);

  function onWeightChange(event){
      setWeight(event.target.value)
  }
  function onHeightChange(event){
   setHeight(event.target.value)
  }
  const output = useMemo(()=>{
     const calculateHeight =height/100;
     return (weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height])

  
  return (
    <div className="App">
      <h1> project bmi calulator</h1>
      <div  className='input- section'>
       <p className='slider-input'>weight:{weight}kg</p>
       <input  type='range' className='input-slider' step="1" min="40" max="200" onChange={onWeightChange}/>

       <p className='slider-input'>height:{height}cm</p>
       <input  type='range' className='input-slider' step="1" min="40" max="200" onChange={onHeightChange}/>
       
      </div>

      <div className='output-section'>
        <p> your bmi is :</p>
        <p className='output'>{output}</p>
      </div>
    </div>
  );
}

export default App;
