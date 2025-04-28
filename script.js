//your JS code here. If required.
let btn=document.getElementById("incrementBtn");
let count=0;
btn.addEventListener("click",()=>{
	alert(count);
	count=count+1;
	let para=document.getElementById("counter");
	
	para.innerText=count;
})