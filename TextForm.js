import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick =()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase" , "success");
    }
    const handleLowerClick =()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase" , "success");
    }
    const handleClearClick =()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText = ' '
        setText(newText)
        props.showAlert("Removed white spaces","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Successfully!!!", "success");
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces Successfully!!!" , "success");
    }
    const handleOnChange =(event)=>{
        //console.log("On Change");
        setText(event.target.value)
    }
    const [text,setText] = useState("enter text here");
    //setText("new text"); //correct way to change the state
  return (
      <>
    <div className='container' style ={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value ={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='light'?'white':'grey' , color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-3' onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-3' onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-3' onClick={handleClearClick}>   Clear Text    </button>
        <button className='btn btn-primary mx-3' onClick={handleCopy}>  Copy     </button>
        <button className='btn btn-primary mx-3' onClick={handleExtraSpaces}>Remove Extra Spaces </button>


    </div>
    <div className='container my-3' style ={{color:props.mode==='light'?'black':'white'}} >
        <h1>Your text summary</h1>
        <p>{text.length>0 ? text.trim().split(" ").length:0} words and {text.length} characters</p>
      
        <p>{0.008* text.split(" ").length}   Minutes Read</p>
        <h3>Preview</h3>
        
        <p>{text.length>0?text:"enter something to preview"}</p> 
       </div>
    </>
  )
}
