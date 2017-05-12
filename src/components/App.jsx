import React from "react";
import QuestionsList from "./QuestionsList.jsx";
import Scorebox from "./Scorebox.jsx";

class App extends React.Component{


	constructor(){
		super();
		this.state = {
			questions: [
				{
					id: 1,
					text: "what color is the ocean?",
					choices: [
						{
							id: "a",
							text: "blue"
						},
						{
							id: "b",
							text: "red"
						},
						{
							id: "c",
							text: "pink"
						}
					],
					answer: "a"
				},
				{
					id: 2,
					text: "how many wheels does a sedan have?",
					choices: [
						{
							id: "a",
							text: 2
						},
						{
							id: "b",
							text: 4
						},
						{
							id: "c",
							text: 6
						}
					],
					answer: "b"
				},
				{
					id: 3,
					text: "what state is San Francisco in?",
					choices: [
						{
							id: "a",
							text: "California"
						},
						{
							id: "b",
							text: "Nevada"
						},
						{
							id: "c",
							text: "Texas"
						}
					],
					answer: "a"
				}
			],
			score: 0,
			currentQuestion: 1
		}

		this.changeHandler = this.changeHandler.bind(this)
	}



	changeHandler(answer, choice){
		choice.target.value === answer ? 
			this.setState({
				score: this.state.score + 1,
				currentQuestion: this.state.currentQuestion + 1
			})
		:
			this.setState({
				currentQuestion: this.state.currentQuestion + 1
			})
	}

	render(){
		return(
			<div>
				<Scorebox {...this.state}/>
				<QuestionsList {...this.state}
					changeHandler={this.changeHandler}
				/>
			</div>
		)
	}


}


export default App
