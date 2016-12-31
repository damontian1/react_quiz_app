import React from "react";

const Questions = (props) => {
	

	return(
		<div className="well">
			<h3>{props.question.text}</h3>
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
