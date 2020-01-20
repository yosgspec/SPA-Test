<template>
<div id=todo>
	<h1>Todo</h1>
	<ul>
		<li v-for="item in items">
			<label :class="{done: item.isChecked}">
				<input type=checkbox v-model="item.isChecked" @change="regist">{{item.title}}
			</label>
		</li>
	</ul>
	<input placeholder="キミの予定は?" v-model="newTitle" @keyup.enter="addItem"><button @click="delItem">抹消</button>
</div>
</template>

<style scoped>
	.done{
		text-decoration:line-through;
	}
</style>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

interface Item{
	title:string,
	isChecked:boolean
};

function memoryLoad<T>():T{
	return JSON.parse(localStorage.todo);
}

function memorySave<T>(memory:T):void{
	localStorage.todo=JSON.stringify(memory);
}

@Component
export default class Todo extends Vue{
	items:Item[]=[];
	newTitle=""

	mounted():void{
		try{
			this.items=memoryLoad();
		}
		catch{}
	}

	regist():void{
		memorySave(this.items);
	}

	addItem():void{
		this.items.push({title:this.newTitle,isChecked:false});
		this.newTitle="";
		this.regist();
	}

	delItem():void{
		this.items=this.items.filter(v=>!v.isChecked);
		this.regist();
	}
}
</script>
