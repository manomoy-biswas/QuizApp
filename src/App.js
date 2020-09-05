import React from 'react';
import './Assets/App.css';
import QuestionBank from "./Components/questionbank";

function App() {
  return (
    <div className="container">
      <div className="title">
        <span>QuizBee</span>
      </div>
      <QuestionBank/>
    </div>
  );
}

export default App;
