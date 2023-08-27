import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }

   
   const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
   }


   const handleClearText=()=>{
    setText('')
    props.showAlert("Cleared the entire text!","success");
  }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent ===  "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces have been removed!","success");
    }
     

    const handleCopy=()=>{
      console.log("I am your copy");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard!","success");
    }
 


  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1 className='mb-2'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
      </div>


      {/* button.btn.btn-primary then enter */}
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Make copy</button>
      {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}
      <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>

    </div>

    <div className="container my-3"  style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Your text summary</h2>
        {/* making the necessary changes to remove some bugs */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>

    </>
  )
}




