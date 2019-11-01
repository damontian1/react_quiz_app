import React from "react";

const Questions = (props) => {

  let question = props.question.text
  let questionCased = question.charAt(0).toUpperCase() + question.substring(1)

  return(
    <div className="well">
      <h3>{questionCased}</h3>
      <ul className="list-group">
        {
          props.question.choices.map(function(choice){
            return(
              <li className="list-group-item" key={choice.id}>
                {choice.id} <input type="radio" onChange={props.changeHandler.bind(this, props.question.answer)} value={choice.id} /> {choice.text}
              </li>
            )
          })
        }
      </ul>
    </div>
  )


}

export default Questions
