import React,{Component} from "react";

export default class Counter extends Component{
	render(){return (
	<div id="counter">
		<h1>Counter</h1>

		<p>Current count: {this.state.currentCount}</p>

		<button onClick={this.IncrementCount}>Click me</button>
	</div>
	);}

	constructor(props){
		super(props);
		this.state={
			currentCount: 0
		}
	}

	IncrementCount=()=>{
		this.setState({currentCount: this.state.currentCount+1});
	};
}
