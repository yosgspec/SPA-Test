function Counter(){
	var currentCount;

	function IncrementCount(){
		currentCount.innerText++;
	}

	(()=>{
		var self=setInterval(()=>{
			if(currentCount=document.getElementById("currentCount")){
				currentCount.innerText=0;
				clearInterval(self);
			}
		},0);
	})();

	(()=>{
		var o;
		var self=setInterval(()=>{
			if(o=document.getElementById("IncrementCount")){
				o.addEventListener("click",IncrementCount);
				clearInterval(self);
			}
		},0);
	})();

	return `
		<div class="counter">
		<h1>Counter</h1>

		<p>Current count: <span id=currentCount></span></p>

		<button id=IncrementCount>Click me</button>
		</div>
	`;
}
