<template>
<div id=app>
	<div id=nav>
		<NavMenu/>
	</div>
	<router-view/>
</div>
</template>

<script lang:ts>
	import {Component,Vue} from "vue-property-decorator";
	import NavMenu from "@/components/NavMenu.vue";

	@Component({
		components:{
			NavMenu
		}
	})
	export default class App extends Vue{}
</script>
