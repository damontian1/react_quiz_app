import React from "react";
import Results from "./Results.jsx";


const Scorebox = (props) => {
  

  return(
    <div className="well">
      {
        props.currentQuestion <= props.questions.length ?
        <p>Question {props.currentQuestion} of {props.questions.length}<span className="pull-right">Score: {Math.round((props.score/props.questions.length)*100)} %</span>
        </p>
        :
        <Results {...props}/>
      }
    </div>
  )
}

export default Scorebox