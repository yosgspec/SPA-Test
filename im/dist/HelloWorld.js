function HelloWorld(id,msg){
	document.getElementById(id).innerHTML=`
		<div class="hello">
			<h1 class="HelloWorld">${msg}</h1>
		</div>

		<style>
			h1.HelloWorld{
				color: #0000FF;
			}
		</style>
	`;
}