import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import Home from "./Pages/Home.js"
import Counter from "./Pages/Counter.js"
import Todo from "./Pages/Todo.js"

const navStyle={
	backgroundColor:"#DDEEFF"
};

export default ()=>(
<BrowserRouter>
	<div id="nav" style={navStyle}>
		<Link to="/">Home</Link> | {
		}<Link to="/counter">Counter</Link> | {
		}<Link to="/todo">Todo</Link>
	</div>

	<Route exact path="/" component={Home} />
	<Route path="/counter" component={Counter} />
	<Route path="/todo" component={Todo} />
</BrowserRouter>
);
