import { useState } from 'react';
import './App.css';
import Footerr from './Footer';
import Headerr from './Header';
import Sliderr from './Slider/Slider';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  const[n1,num1] = useState();
  const[n2,num2] = useState();
  const[tot,total] = useState();
  const[slt,select] = useState();
  function handleClick(){    
    if(slt == "Div"){
      total(Number(n1) / Number(n2));
    }else if(slt == "Sub"){
      total(Number(n1) - Number(n2));
    }else if(slt == "Mul"){
      total(Number(n1) * Number(n2));
    }else{
      total(Number(n1) + Number(n2));
    }    
  }

  return (
    <div >
      <Headerr/>      
        <div class="row">
            <div align="center">
              <br/>              
                <h2>React Js with Calculate Two Numbers</h2><br/>                 
                <input type="number" class="in" placeholder='Enter Number' onChange={(e)=>num1(e.target.value)}/><br/><br/>
                <input type="number" class="in" placeholder='Enter Number' onChange={(e)=>num2(e.target.value)}/><br/><br/><br/>                                    
                <select onChange={(e)=>select(e.target.value)} class="slt">
                    <option>Add</option>
                    <option>Sub</option>
                    <option>Mul</option>
                    <option>Div</option>
                </select>
                <input type="submit" class="btn btn-danger" onClick={handleClick}/>     
                <br/><br/>           
                <h1>{tot}</h1>          
                   
                <br/>          
            </div>
        </div>
        <Sliderr/>
        <Footerr/>
    </div>
  );
}

export default App;