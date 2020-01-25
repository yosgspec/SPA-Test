import React,{Component} from "react";

const doneStyle={
	textDecoration:"line-through"
};

function memoryLoad(){
	return JSON.parse(localStorage.getItem("todo"));
}

function memorySave(memory){
	localStorage.setItem("todo",JSON.stringify(memory));
}

export default class Todo extends Component{
	render(){return (
	<div id="todo">
		<h1>Todo</h1>
		<ul>
			{this.state.items.map((item,i)=>(<li key={i}>
				<label style={item.isChecked? doneStyle: null}>
					<input type="checkbox" checked={item.isChecked} onChange={e=>this.itemReload(e,i)} />{item.title}
				</label>
			</li>))}
		</ul>
		<input placeholder="キミの予定は?" value={this.state.newTitle} onKeyUp={this.addItem} onChange={this.newTitleReload} /><button onClick={this.delItem}>抹消</button>
	</div>
	);}

	constructor(props){
		super(props);
		this.state={
			items:[],
			newTitle:""
		};
	}

	itemReload=(e,i)=>{
		var items=this.state.items;
		items[i].isChecked=e.target.checked;
		this.setState({items:items});
		this.regist();
	};
	newTitleReload=e=>this.setState({newTitle:e.target.value});

	componentDidMount(){
		this.setState({items:memoryLoad() || []});
	}

	regist=()=>{
		setTimeout(()=>memorySave(this.state.items),1);
	};

	addItem=e=>{
		if(e.key==="Enter"){
			this.setState(state=>{return {
				items:state.items.concat(
					{title:state.newTitle,isChecked:false}
				),
				newTitle:""
			}});
			this.regist();
		}
	};

	delItem=()=>{
		this.setState(state=>{return {
			items:state.items.filter(v=>!v.isChecked)
		};});
		this.regist();
	};
}
