import React, { useState } from 'react'

const QuestionBox = ({question, options, key, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="question-box">
      <div className="question-no font-weight-bolder">Q: </div>
      <div className="question">{question}
      <div> <strong>Options: </strong> 
        {answer.map((text, index) => (
          <div key={index}>
            <button onClick={() => {setAnswer([text]); selected(text);}} className="btn btn-danger btn-sm option-btn" > {text}</button>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default QuestionBox
