import React from "react";
 
 function App() {
  
   const Btn1 = () => {
     return (
       document.getElementById("field1").value=document.getElementById("field1").value+"1"
     )
   }
   const Btn2 = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"2"
    )
  }
  const Btn3 = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"3"
    )
  }
  const Btn4 = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"4"
    )
  }
  const Btn5 = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"5"
    )
  }
  const Btn6 = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"6"
    )
  }
  const Btn7 = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"7"
    )
  }
   const Btn8 = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"8"
    )
  }
  const Btn9 = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"9"
    )
  }
  const Btn0 = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"0"
    )
  }
  const Btnadd = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"+"
    )
  }
  const Btnsub = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"-"
    )
  }
  const Btnmul = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"*"
    )
  }
  const Btndiv = () => {
    return (
      document.getElementById("field1").value=document.getElementById("field1").value+"/"
    )
  }
  const Btnclr = () => {
    return (
      document.getElementById("field1").value=" "
    )
  }
  const Btneq = () => {
    return (
      document.getElementById("field1").value=eval(document.getElementById("field1").value)
    )
  }
  
   return (
       <div>
       
       <div className="ui container"> 
          <label className="ui label blue">------Basic Calculator------</label><br/>
       <input placeholder="input" id="field1"/><br/>
       <button className="ui mini button green" onClick={Btn1}>1</button>
       <button className="ui mini  button green" onClick={Btn2}>2</button>
       <button className="ui mini button green" onClick={Btn3}>3</button>
       <button className="ui mini button green" onClick={Btnadd}>+</button><br/>
       <button className="ui mini button green" onClick={Btn4}>4</button>
       <button className="ui mini button green" onClick={Btn5}>5</button>
       <button className="ui mini button green" onClick={Btn6}>6</button>
       <button className="ui mini button green" onClick={Btnsub}>-</button><br/>
       <button className="ui mini button green" onClick={Btn7}>7</button>
       <button className="ui mini button green" onClick={Btn8}>8</button>
       <button className="ui mini button green" onClick={Btn9}>9</button>
       <button className="ui mini button green" onClick={Btnmul}>*</button><br/>
       <button className="ui mini button green" onClick={Btn0}>0</button>
       <button className="ui mini button green" onClick={Btndiv}>/</button>
       <button className="ui mini button green" onClick={Btnclr}>C</button>
       <button className="ui mini button green" onClick={Btneq}>=</button><br/>
       </div>
       </div>
   )
 }
   
export default App;

