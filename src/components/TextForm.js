import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    //text = "enter text here"; // wrong way to change the state
    // setText("New text"); //Correct way to change state
    //Remember this. We will use this more. 
    const handleUpClick = () => {    //THIS EVENT HANDLER CONVERTS TO UPPERCASE
        // console.log("Uppercase was clicked: " + text );
        let newText = text.toUpperCase();
        setText(newText);
        // let newText2 = text.toLowerCase();
        // setText(newText2);
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowClick = () => {   //THIS EVENT HANDLER CONVERTS TO LOWERCASE
        // console.log("Uppercase was clicked: " + text );
        // let newText1 = text.toUpperCase();
        // setText(newText1);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }


    const handleOnChange = (event) => {   //THIS EVENT HANDLER MAKES THE EVENT CHANGE BASED ON THE TARGET VALUE
        // console.log("On change");
        setText(event.target.value);
        
    }

    const handleCopy = () => {   //THIS EVENT HANDLER COPIES THE TEXT 
        console.log("this is copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success")
    }

    const handleClearClick = () => {  //THIS EVENT HANDLER CLEARS THE TEXT
        let newText = '';
        setText(newText)
        props.showAlert("Text is cleared", "success")
    }

    const handleExtraSaces = () => {  //THIS EVENT HANDLER REMOVES THE EXTRA SPACES
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success")
    }


    return (
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        {/* <label for="exampleFormControlTextarea1" className="form-label">Textarea Example</label> */}
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSaces}>Remove Extra Spaces</button>

        <div className="container my-2">
            <h1>your text summary</h1>
            <p> {text.split(' ').length} words and {text.length} characters</p>
        </div>
    </div>
  )
}
