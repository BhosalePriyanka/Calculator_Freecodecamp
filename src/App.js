
import { useState } from 'react';
import './App.css';

function App() {
  const count = [
  {id:"zero",number:"0"},{id:"one",number:"1"},{id:"two",number:"2"},{id:"three",number:"3"},{id:"four",number:"4"}, 
  {id:"five",number:"5"},{id:"six",number:"6"},{id:"seven",number:"7"},{id:"eight",number:"8"},
  {id:"nine",number:"9"},{id:"ten",number:"10"}
  ]
  const oprator = [
  {id:"add",style:"+"}, {id:"subtract",style:"-"},{id:"multiply",style:"*"},{id:"divide",style:"/"}
  ]
  
  const[result,setResult] = useState('0')
  
  const handelClick = (e) =>{
  if(result === '0'){
    setResult(e.target.value)
  }else{
    setResult(result.concat(e.target.value))
  }
  }
  
  const handelDecimal = (e) =>{
  const array = result.split(' ')
  const lastNumber = array[array.length - 1]
  if(!lastNumber.includes('.')){
  setResult(result + '.')
   }else
  if(lastNumber.includes('-')){
  setResult(result + e.target.value)
  }else
  if(lastNumber.includes('+')){
   setResult(result + e.target.value)
  }else
  if(lastNumber.includes('*')){
   setResult(result + e.target.value)
   }else
  if(lastNumber.includes('/')){
   setResult(result + e.target.value)
   }
  }
  
  const evaluate = () =>{
    const output = eval(result);
   const output1 = output.toFixed(4)
   const output2 = parseFloat(output1).toString()
  setResult(output2)
  }
  
  const handelOperator = (e) =>{
    if(result === '0'){
      setResult(e.target.value)
    }else{
     
  const lastNumber = result.charAt(result.length - 1)
  const secondLastNumber = result.charAt(result.length - 2)
  let tempVariable = result;
  if (
    (e.target.value === '*' || e.target.value === '-' || e.target.value === '+' 
    || e.target.value === '/')
     &&
    (lastNumber.includes('*') || lastNumber.includes('-') || lastNumber.includes('+')
    || lastNumber.includes('/'))
     &&
     (secondLastNumber.includes('*') || secondLastNumber.includes('-') || secondLastNumber.includes('+')
    || secondLastNumber.includes('/')))
    {
      tempVariable = tempVariable.slice(0, -1)
      tempVariable = tempVariable.slice(0, -1)
    }
  else if (e.target.value === '-'){
    // if ((lastNumber.includes('*') || lastNumber.includes('-') || lastNumber.includes('+')
    // || lastNumber.includes('/'))
    //  &&
    //  (secondLastNumber.includes('*') || secondLastNumber.includes('-') || secondLastNumber.includes('+')
    // || secondLastNumber.includes('/'))
    // ){
    //   tempVariable = tempVariable.slice(0, -1)
    // }
  }
  else if(lastNumber.includes('+')
  || lastNumber.includes('*')
  || lastNumber.includes('/')){
    tempVariable = tempVariable.slice(0, -1)
  }
  
  setResult(tempVariable + e.target.value)
    }
  }
  
  const clear = () =>{
    setResult('0')
  }
  
  
    return (
      <div className="App">
        <div className='container' >
        <input type="text" id="display" readOnly value={result}/>
        {count.map((data)=>
          <button key = { data.id} onClick={handelClick} readOnly value = {data.number} id = {data.id} >{data.number}</button>
        )}
        {oprator.map((opData)=>
          <button key= { opData.id} onClick={handelOperator} readOnly value = {opData.style}  id = {opData.id}>{opData.style}</button>
        )}
        <button onClick={handelDecimal} readOnly value = {'.'} id="decimal">.</button>
        <button  id="clear" onClick={clear} readOnly>Clear</button>
        <button id="equals" onClick={evaluate}>=</button>
        </div>
      </div>
    );
  }

export default App;
