import React from "react";

const h1Style={
	color:"#0000FF"
};

export default props=>(
	<div id="hello" style={h1Style}>
		<h1>{props.msg}</h1>
	</div>
);
