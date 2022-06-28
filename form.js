import React, { useState } from 'react'
export default function Textform(props) {
  const  convertUpper= () => {
    console.log("Uppercase was cliked" + text);
    let newText = text.toUpperCase();
    setText(newText)

  }
  const  convertLower= () => {
    console.log("Uppercase was cliked" + text);
    let newText = text.toLowerCase();
    setText(newText)

  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        <button className="btn btn-primary mx-2" onClick={convertUpper}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={convertLower}>Convert to lowercase</button>
      </div>
    </div>
    <div className="container my-3">
      <h2>Your symmary</h2>
      <p>Word {text.split(" ").length} and {text.length} characters</p>
    <p>{0.08*text.split(" ").length} Minute for reading</p>
    <h1>Preview</h1>
    <p>{text}</p>
    </div>
    </>
  )
}
