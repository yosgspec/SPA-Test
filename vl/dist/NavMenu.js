document.getElementById("NavMenu").innerHTML=`
	<div id=nav>
		<a id="" href="#" onclick="NavMenu.setAddress(Home)">Home</a> |
		<a id=Counter href="#Counter" onclick="NavMenu.setAddress(Counter)">Counter</a> |
		<a id=Todo href="#Todo" onclick="NavMenu.setAddress(Todo)">Todo</a>
	</div>

	<style>
		div#nav{
			background-color:#DDEEFF;
		}
	</style>
`;

class NavMenu{
	static loaded(){
		var self=setInterval(()=>{
			var o;
			if(o=document.getElementById("body")){
				o.innerHTML=Home();
				clearInterval(self);
				const id=parent.location.hash.replace(/#/,"");
				if(id){
					NavMenu.setAddress(eval(id));
				}
			}
		},0);
	}

	static setAddress(fn){
		document.getElementById("body").innerHTML=fn();
	}
}
window.addEventListener("load",NavMenu.loaded());
