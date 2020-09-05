import React from 'react'

function Result({score, responses, playAgain}) {
  return (
    <div className="result text-center">
      <h2 className="score text-center">You Scored {score}/{responses} Correct Answer</h2>
      <button className="btn btn-success playagain-btn" onClick={playAgain}>Play Again</button>

      
    </div>
  )
}

export default Result
