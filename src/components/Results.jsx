import React from "react";

const Results = (props) => {
	

	return(
		<div style={{"display": "flex","height":"75vh","justify-content":"center","align-items":"center"}}>
			<div className="text-center" >
				<h4>You finished the Exam</h4>
				<p>Your score was {Math.round((props.score/props.questions.length)*100)}%</p>
					<a href=".">Take Test Again</a>
			</div>
		</div>
	)
}

export default Results

  