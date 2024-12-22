import { useState } from "react";

function QuestionInput() {
    const [someVal,setSomeVal] = useState("Emma")
  const handleKeyDown = (e)=>setSomeVal(e.key + " Working")
    return (
    <div className="QuestionInput">
      <input onKeyDown={handleKeyDown}/> 
      {someVal}
    </div>
  );
}

export default QuestionInput;