import React from "react";
import Questions from "./Questions.jsx";


const QuestionsList = (props) => {


	return(
		<div>
			{
				props.questions.map(function(question){
					var a = question;
					console.log(a);
					if(question.id === props.currentQuestion){ 
						return(
							<Questions 
								question={question}
								key={question.id}
								changeHandler={props.changeHandler}
								
							/>
						)
					}
				})
			}
		</div>
	)


}

export default QuestionsList
