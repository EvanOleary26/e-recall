import { use, useState } from "react";


function QAInput({getReturnFunction, title}) {
    //const [submission, setSubmission] = useState('')
    const [currentInput, setCurrentInput] = useState('')
    const handleInputChange = (e) => {
      setCurrentInput(e.target.value)
    }
    
    const handleKeyDown = (e) => {
      if (e.key == 'Enter') {
        //setSubmission(currentInput)
        getReturnFunction(currentInput)
        setCurrentInput("")
      }
    }
    return (
    <div className="QAInput">
      <input placeholder={title} 
       value={currentInput} 
       onChange ={handleInputChange}
       onKeyDown={handleKeyDown}/>

    </div>
  );
  
}

export default QAInput;