function Todo(){
	function memoryLoad(){
		return JSON.parse(localStorage.getItem("todo"));
	}

	function memorySave(memory){
		localStorage.setItem("todo",JSON.stringify(memory));
	}

	var newTitle;

	(()=>{
		var self=setInterval(()=>{
			if(newTitle=document.getElementById("newTitle")){
				items=memoryLoad();
				newTitle.value=items.newTitle;
				clearInterval(self);
			}
		},0);
	})();

	function regist(){
		items=newTitle.value;
		memorySave(items);
	}

	(()=>{
		var o;
		var self=setInterval(()=>{
			if(o=document.getElementById("regist")){
				o.addEventListener("click",regist);
				clearInterval(self);
			}
		},0);
	})();

	const items=[
		{title:"あいうえお",isChecked:false},
		{title:"かきくけこ",isChecked:false},
		{title:"さしすせそ",isChecked:false}
	]

	var itemsDom="";
	for(let item of items){itemsDom+=`
		<li>
			<label class=${item.isChecked? "done-Todo": ""}>
				<input type=checkbox ${item.isChecked? "checked": ""} onchange="regist()">${item.title}
			</label>
		</li>
	`;}

	return `
		<h1>Todo</h1>

		<ul>
			${itemsDom}
		</ul>
		<input id=newTitle><button id=regist>登録</button>

		<style>
			.done-Todo{
				text-decoration:line-through;
			}
		</style>
	`;
}