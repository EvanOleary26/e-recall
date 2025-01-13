import { useEffect, useState } from "react";
import QAInput from './QAInput';
import ResponseRow from './ResponseRow';

function InputPage() {
  const [responses, setResponses] = useState([[]])
  const [currentResponseIdx,setCurrentResponseIdx] = useState(0)
  
  const [funky, setFunky] = useState(false)
  const getQuestion = (currentInput) => {
    let tempResponses = [...responses,[]]
    tempResponses[currentResponseIdx][0] = currentInput
    setResponses([...tempResponses])

    setFunky(true)
  }

  const getAnswer = (currentInput) => {
    let tempResponses = [...responses]
    tempResponses[currentResponseIdx][1] = currentInput
    setResponses([...tempResponses])
    
    let tmpResponseIdx = currentResponseIdx+ 1
    setCurrentResponseIdx(tmpResponseIdx)

    setFunky(false)
  }

  return (
  <div className="InputPage">
  {!funky &&<QAInput getReturnFunction={getQuestion} title="Question Here:"/>}
  {funky && <QAInput getReturnFunction={getAnswer} title="Answer Here:"/>}
    <table>
      <tbody>{responses.map((response, idx) => 
     <ResponseRow response={response} key={idx}/>
    )}</tbody></table>

<br/><br/><br/>{funky && "you can answer!"}
    
  </div>
);

}

export default InputPage;