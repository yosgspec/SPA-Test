function Home(){
	(()=>{
		var self=setInterval(()=>{
			var o;
			if(o=document.getElementById("hello")){
				o.innerHTML=HelloWorld("SinglePageApplication!");
				clearInterval(self);
			}
		},0);
	})();

	return `
		<div class="home">
			<span id=hello></span>
		</div>
	`;
}
