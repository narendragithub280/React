import React, {useState} from 'react'

// console.log(useState('Enter the text blowe'))

export default function Textbox(props) {
  const handleUpClick =()=>{
    // console.log("Uppercase was clicked: " ,+ text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick =()=>{
    // console.log("Lowercase was clicked: " ,+ text);
    let newText = text.toLowerCase();
    setText(newText);
  } 
  const handleClearClick =()=>{
    // console.log("Lowercase was clicked: " ,+ text);
    let newText = ' ';
    setText(newText);
  }
  
  const handleOnChange = (event) =>{
    // console.log ("On Change");
    setText(event.target.value );
  }

  const handleCopyClik = () => {
    console.log("I am copy");
    let text = document.getElementById("my-textbox");
    text.select( ); 
    // text.selectionRange( 0, 99999 );
    navigator.clipboard.writeText(text.value);
  } 
  const handleExtraSpaces = () => {
    let newText  =  text.split (/[ ]+/);
    setText(newText.join(" "));
  }

  const[text, setText] = useState('');
  
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" id="my-textbox" value={text} onChange={handleOnChange} rows="4" placeholder="Enter the text here.." style={{background: props.mode==='bottom'?'dark':'bottom'}} >  </textarea>
      </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >  Convert to Uppercase </button>
        <button className="btn btn-primary mx-1 " onClick={handleLoClick} >  Convert to Lowercase  </button>
        <button className="btn btn-primary mx-1 " onClick={handleClearClick} >  Clear Text  </button>
        <button className="btn btn-primary mx-1 " onClick={handleCopyClik}>  Copy Text </button>
        <button className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>  Remove Extra Spaces </button>
    </div>
    <div className="container my-3">
      <h2>Its Text Summary </h2>
      <p> {text.split (" ").length }Word And {text.length} Carecters</p>
      <p> {0.008 * text.split (" ").length }Minuts Of Read</p>
      <br />
      <br />
      <h2>Preview</h2>
      <br />
      <p>{text}</p>
    </div>
    </>
  )
}

  

