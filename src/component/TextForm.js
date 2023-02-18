import React, { useState } from 'react';


const TextForm =(props)=>{
  const [text,setText]= useState('Enter your text here');
  const handalUpChange=()=>{
    console.log('handalUpChange clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlart('Converted to Uppercase','seccess');
  }
  const handalLowChange=()=>{
    console.log('handalUpChange clicked');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlart('Converted to Lowercase','seccess');
  }
  const handalOnChange=(event)=>{
    console.log('handalOnChange clicked');
    setText(event.target.value);
  }
  const clearText=()=>{
    console.log('text cleared');
    setText('');
    props.showAlart('Text area has been cleared out','seccess');
  }
  const copyText=()=>{
    console.log('text copied');
    const text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    text.setSelectionRange(0,999);
    navigator.clipboard.writeText(text.value);
    props.showAlart('Text copied successfully','seccess');
  }
  return(
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3" >
        <textarea className="form-control"style={{backgroundColor:props.mode==='light'?'white':'#122654',color:props.mode==='light'?'black':'white'}} onChange={handalOnChange} id="exampleFormControlTextarea1" rows="5" value={text} ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handalUpChange} > Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handalLowChange} > Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={clearText} > Clear Text</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={copyText} > Copy Text</button>
      <div className="container my-2">
        <h2>Your text summery</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters </p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} time needed to read this </p>
        <h1>Summery</h1>
        <p>{text.length>0 ?text:"write something in the textbox above to preview it here"} </p>
      </div>
    </div>
     
    </>
  )
};
export default TextForm;