// import React from 'react'
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpclick = () =>{
        // console.log("Uppercase was clicked" + text);  
        let newText = text.toUpperCase();
        setText(newText); 
        props.displayAlert("Converted to UpperCase",'success')
    }
    const handleDownclick = () =>{
      // console.log("Lowercase was clicked" + text);  
      let newText = text.toLowerCase();
      setText(newText); 
      props.displayAlert("Converted to LowerCase",'success')

  }
  const handleClearclick = () =>{
    // console.log("Uppercase was clicked" + text);  
    let newText = '';
    setText(newText); 
    props.displayAlert("Cleared to",'success')

}

const handleBoldclick = () =>{
  // console.log("Uppercase was clicked" + text);  
  let newText = text.b();
  setText(newText); 
}

     
    const handleOnchange = (event) =>{
        console.log("on change"); 
        setText (event.target.value); 
    }
    const [text, setText] = useState('');
//  text ("hiiiiiiiiii");
//  setText ("hello");
 return (
  <>
<div className="container" style={{color:props.mode ==='dark'? 'white':'black'}}>
<h1 className='mb-4'>{props.heading} </h1>
<div className="mb-3">    
  <textarea className="form-control" value={text}  onChange = {handleOnchange} style ={{backgroundColor:props.mode ==='dark'? '#0f2f5f':'white',color:props.mode ==='dark'? 'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleDownclick}>Convert to LowerCase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleClearclick}>Clear Text</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleBoldclick}>Bold Text</button>
</div>

<div className='container my3'style={{color:props.mode ==='dark'? 'white':'black'}} >
  <h2>Your text summary</h2>
  <p>{text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} words and  {text.length} character</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:'Nothing to preview'}</p>
</div>
</>
  )
}
