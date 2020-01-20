<template>
<div id=counter>
	<h1>Counter</h1>

	<p>Current count: {{currentCount}}</p>

	<button @click="IncrementCount">Click me</button>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class Counter extends Vue{
	currentCount=0;

	IncrementCount():void{
		this.currentCount++;
	}
}
</script>
