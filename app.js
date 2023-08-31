import React from 'react';
import './App.css';
import { useState } from 'react';

function App(){
  const[result,setResult]=useState('');
  const clickHandler=(event)=>{
   setResult(result.concat(event.target.value));
  };
  const clearResult=()=>
  {
    setResult('');
  }
  const calculate=()=>{
    try {
      setResult(eval(result).toString());
    } catch (error) {
      window.alert("sorry this is not allowed")
    }
    
  };
  return(
    <>
    <h1 className='header-text'> Calculator </h1>
    <div className="calculator">
      <h3 className="owner">karim's calculator</h3>
      <div className='result-div'>
      <input type='text' className='result' id='result' placeholder='0' value={result}/>
      </div>
    
       <table className='table'>
       <tr>
       <td><input type='button' value={9} className='button' onClick={clickHandler}/></td>
       <td><input type='button' value={8} className='button' onClick={clickHandler}/></td>
       <td><input type='button' value={7} className='button' onClick={clickHandler}/></td>
       <td><input type='button' value="+" className='button' onClick={clickHandler}/></td>
      </tr>
      <tr>
      <td><input type='button' value={6} className='button' onClick={clickHandler}/></td>
      <td><input type='button' value={5} className='button' onClick={clickHandler}/></td>
      <td><input type='button' value={4} className='button' onClick={clickHandler}/></td>
      <td><input type='button' value="-" className='button' onClick={clickHandler}/></td>
      </tr>
      <tr>
      <td><input type='button' value={3} className='button' onClick={clickHandler}/></td>
      <td><input type='button' value={2} className='button' onClick={clickHandler}/></td>
      <td><input type='button' value={1} className='button' onClick={clickHandler}/></td>
      <td><input type='button' value="*" className='button' onClick={clickHandler}/></td>
      </tr>
      <tr>
      <td><input type='button' value={0} className='button' onClick={clickHandler}/></td>
      <td><input type='button' value="=" className='button' onClick={calculate}/></td>
      <td><input type='button' value="c" className='button' onClick={clearResult}/></td>
      <td><input type='button' value="/" className='button' onClick={clickHandler}/></td>
      </tr>
        </table>
      </div>

      
 
    </>
  )

}

export default App;
